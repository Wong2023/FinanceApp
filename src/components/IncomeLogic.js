// IncomeLogic.js
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useIncomeLogic = (t) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [offlineData, setOfflineData] = useState([]);
  const [onlineData, setOnlineData] = useState([]);
  const [mode, setMode] = useState("offline");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => currentYear - 2 + i);
  const activeData = mode === "offline" ? offlineData : onlineData;

  const filteredData = activeData.filter((row) => {
    if (!row.date) return false;
    const date = new Date(row.date);
    const monthMatch = selectedMonth === "all" || months[date.getMonth()] === selectedMonth;
    const yearMatch = selectedYear === "all" || date.getFullYear().toString() === selectedYear;
    return monthMatch && yearMatch;
  });

  const loadData = () => {
    const storedOffline = JSON.parse(localStorage.getItem("offlineData")) || [];
    const storedOnline = JSON.parse(localStorage.getItem("onlineData")) || [];
    setOfflineData(storedOffline);
    setOnlineData(storedOnline);
  };

  const saveOfflineData = () => {
    localStorage.setItem("offlineData", JSON.stringify(offlineData));
  };

  const saveOnlineData = () => {
    localStorage.setItem("onlineData", JSON.stringify(onlineData));
  };

  const handleLocationChange = () => {
    if (location.state?.newIncome) {
      const { newIncome, source, editMode } = location.state;

      if (editMode) {
        if (source === "offline") {
          setOfflineData((prev) => prev.map((r) => (r.id === newIncome.id ? newIncome : r)));
        } else {
          setOnlineData((prev) => prev.map((r) => (r.id === newIncome.id ? newIncome : r)));
        }
      } else {
        const incomeWithId = { ...newIncome, id: Date.now() };
        if (source === "offline") setOfflineData((p) => [...p, incomeWithId]);
        else setOnlineData((p) => [...p, incomeWithId]);
      }

      window.history.replaceState({}, document.title);
    }
  };

  useEffect(loadData, []);
  useEffect(saveOfflineData, [offlineData]);
  useEffect(saveOnlineData, [onlineData]);
  useEffect(handleLocationChange, [location.state]);

  const handleDelete = (id) => {
    if (mode === "offline")
      setOfflineData((prev) => prev.filter((row) => row.id !== id));
    else
      setOnlineData((prev) => prev.filter((row) => row.id !== id));
  };

  const handleEdit = (row) => {
    navigate("/income/addincome", {
      state: { incomeToEdit: row, source: mode, editMode: true },
    });
  };

  return {
    mode, setMode,
    selectedMonth, setSelectedMonth,
    selectedYear, setSelectedYear,
    filteredData, months, years,
    handleEdit, handleDelete, navigate,
  };
}
export default useIncomeLogic;
