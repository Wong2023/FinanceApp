// IncomeLogic.js
import { useState, useEffect, useRef } from "react";
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
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => currentYear - 2 + i);
  const activeData = mode === "offline" ? offlineData : onlineData;

  const filteredData = activeData.filter((row) => {
    if (!row.date) return false;
    const d = new Date(row.date);
    const mOk = selectedMonth === "all" || months[d.getMonth()] === selectedMonth;
    const yOk = selectedYear === "all" || d.getFullYear().toString() === selectedYear;
    return mOk && yOk;
  });

  const safeParse = (key) => {
    try {
      const val = localStorage.getItem(key);
      if (!val) return [];
      return JSON.parse(val);
    } catch {
      console.warn(`Corrupted data in localStorage for ${key}, resetting...`);
      localStorage.removeItem(key);
      return [];
    }
  };

  const loadData = () => {
    const off = safeParse("offlineData");
    const onl = safeParse("onlineData");
    setOfflineData(off);
    setOnlineData(onl);
  };

  const saveOfflineData = () =>
    localStorage.setItem("offlineData", JSON.stringify(offlineData));

  const saveOnlineData = () =>
    localStorage.setItem("onlineData", JSON.stringify(onlineData));

  const handleLocationChange = () => {
    if (!location.state?.newIncome) return;
    const { newIncome, source, editMode } = location.state;

    if (editMode) {
      if (source === "offline") {
        setOfflineData((p) => p.map((r) => (r.id === newIncome.id ? newIncome : r)));
      } else {
        setOnlineData((p) => p.map((r) => (r.id === newIncome.id ? newIncome : r)));
      }
    } else {
      const withId = { ...newIncome, id: Date.now() };
      if (source === "offline") setOfflineData((p) => [...p, withId]);
      else setOnlineData((p) => [...p, withId]);
    }

    window.history.replaceState({}, document.title);
  };

  const prev = useRef({ init: false, off: undefined, onl: undefined, loc: undefined });
  const runEffects = () => {
    if (!prev.current.init) {
      loadData();
      handleLocationChange();
      prev.current = { init: true, off: offlineData, onl: onlineData, loc: location.state };
      return;
    }
    if (prev.current.off !== offlineData) saveOfflineData();
    if (prev.current.onl !== onlineData) saveOnlineData();
    if (prev.current.loc !== location.state) handleLocationChange();
    prev.current = { init: true, off: offlineData, onl: onlineData, loc: location.state };
  };

  useEffect(() => { runEffects(); }, [offlineData, onlineData, location.state]);

  const handleDelete = (id) => {
    if (mode === "offline")
      setOfflineData((p) => p.filter((r) => r.id !== id));
    else
      setOnlineData((p) => p.filter((r) => r.id !== id));
  };

  const handleEdit = (row) => {
    navigate("/income/addincome", { state: { incomeToEdit: row, source: mode, editMode: true } });
  };

  return {
    mode, setMode,
    selectedMonth, setSelectedMonth,
    selectedYear, setSelectedYear,
    filteredData, months, years,
    handleEdit, handleDelete, navigate,
  };
};

export default useIncomeLogic;
