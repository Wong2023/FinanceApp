import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IncomeContainer,
  IncomeHeader,
  StatRow,
  StatBox,
  TableRow,
  TableControls,
  MainTable,
  TableHeader,
  TableBody,
  TableCell,
  TableActionLink,
  DeleteButton,
} from "../styles/incomePage";
import { useLanguage } from "./LanguageContext";

export default function IncomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const [offlineData, setOfflineData] = useState([]);
  const [onlineData, setOnlineData] = useState([]);
  const [mode, setMode] = useState("offline");

  // фильтр
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const activeData = mode === "offline" ? offlineData : onlineData;

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => currentYear - 2 + i);

  const filteredData = activeData.filter((row) => {
    if (!row.date) return false;
    const date = new Date(row.date);
    const monthMatch =
      selectedMonth === "all" || months[date.getMonth()] === selectedMonth;
    const yearMatch =
      selectedYear === "all" || date.getFullYear().toString() === selectedYear;
    return monthMatch && yearMatch;
  });

  useEffect(() => {
    const storedOffline = JSON.parse(localStorage.getItem("offlineData")) || [];
    const storedOnline = JSON.parse(localStorage.getItem("onlineData")) || [];
    setOfflineData(storedOffline);
    setOnlineData(storedOnline);
  }, []);

  useEffect(() => {
    localStorage.setItem("offlineData", JSON.stringify(offlineData));
  }, [offlineData]);

  useEffect(() => {
    localStorage.setItem("onlineData", JSON.stringify(onlineData));
  }, [onlineData]);

  useEffect(() => {
    if (location.state?.newIncome) {
      const { newIncome, source, editMode } = location.state;

      if (editMode) {
        if (source === "offline") {
          setOfflineData((prev) =>
            prev.map((row) => (row.id === newIncome.id ? newIncome : row))
          );
        } else if (source === "online") {
          setOnlineData((prev) =>
            prev.map((row) => (row.id === newIncome.id ? newIncome : row))
          );
        }
      } else {
        const incomeWithId = { ...newIncome, id: Date.now() };
        if (source === "offline") {
          setOfflineData((prev) => [...prev, incomeWithId]);
        } else if (source === "online") {
          setOnlineData((prev) => [...prev, incomeWithId]);
        }
      }

      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleDelete = (id) => {
    if (mode === "offline") {
      setOfflineData((prev) => prev.filter((row) => row.id !== id));
    } else {
      setOnlineData((prev) => prev.filter((row) => row.id !== id));
    }
  };

  const handleEdit = (row) => {
    navigate("/income/addincome", {
      state: { incomeToEdit: row, source: mode, editMode: true },
    });
  };

  return (
    <IncomeContainer>
      <IncomeHeader>
        {t("incomeHeader")} (<span style={{ fontWeight: "normal" }}>{t("title")}</span>)
      </IncomeHeader>

      <StatRow>
        <StatBox>
          <div style={{ fontSize: 16, fontWeight: "bold" }}>
            {mode === "offline" ? t("totalOffline") : t("totalOnline")}
          </div>
          <div style={{ fontSize: 28, fontWeight: "bold", marginTop: 10 }}>
            {filteredData
              .reduce((sum, row) => sum + Number(row.amount || 0), 0)
              .toFixed(2)}
            $
          </div>
        </StatBox>

        <StatBox>
          <div style={{ fontSize: 16, fontWeight: "bold" }}>{t("paintingsSold")}</div>
          <div style={{ fontSize: 20, color: "#222", marginTop: 10 }}>
            <span style={{ fontFamily: "Courier New, monospace" }}>
              ({selectedMonth === "all" ? t("all") : selectedMonth}{" "}
              {selectedYear === "all" ? t("years") : selectedYear})
            </span>
            <span style={{ fontSize: 28, fontWeight: "bold", marginLeft: 16 }}>
              {filteredData.length}
            </span>
          </div>
        </StatBox>

        <TableControls>
          <button
            className="add-income-btn"
            onClick={() => navigate("/income/addincome")}
          >
            {t("addIncome")}
          </button>

          <select
            className="mode-select"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="offline">{t("offline")}</option>
            <option value="online">{t("online")}</option>
          </select>

          <select
            className="month-select"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="all">{t("allMonths")}</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <select
            className="date-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all">{t("allYears")}</option>
            {years.map((y) => (
              <option key={y} value={y.toString()}>
                {y}
              </option>
            ))}
          </select>
        </TableControls>
      </StatRow>

      <MainTable>
        <TableHeader>
          <TableCell>{t("date")}</TableCell>
          <TableCell>{t("paintingName")}</TableCell>
          <TableCell>{t("artist")}</TableCell>
          <TableCell>{t("client")}</TableCell>
          <TableCell>{t("amount")}</TableCell>
          <TableCell>{t("action")}</TableCell>
        </TableHeader>

        <TableBody>
          {filteredData.length === 0 ? (
            Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>
                  <TableActionLink>{t("edit")}</TableActionLink>
                </TableCell>
              </TableRow>
            ))
          ) : (
            filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.item}</TableCell>
                <TableCell>{row.dealer}</TableCell>
                <TableCell>{row.clientName}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  <TableActionLink onClick={() => handleEdit(row)}>
                    {t("edit")}
                  </TableActionLink>{" "}
                  |{" "}
                  <DeleteButton onClick={() => handleDelete(row.id)}>
                    {t("delete")}
                  </DeleteButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </MainTable>
    </IncomeContainer>
  );
}
