// IncomeView.js
import React from "react";
import {
  IncomeContainer, IncomeHeader, StatRow, StatBox,
  TableRow, TableControls, MainTable, TableHeader,
  TableBody, TableCell, TableActionLink, DeleteButton,
} from "../styles/incomePage";
import { useLanguage } from "./LanguageContext";
import { useIncomeLogic } from "./IncomeLogic";

export default function IncomePage() {
  const { t } = useLanguage();
  const {
    mode, setMode, selectedMonth, setSelectedMonth,
    selectedYear, setSelectedYear, filteredData,
    months, years, handleEdit, handleDelete, navigate
  } = useIncomeLogic(t);

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
            {filteredData.reduce((s, r) => s + Number(r.amount || 0), 0).toFixed(2)}$
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
          <button className="add-income-btn" onClick={() => navigate("/income/addincome")}>
            {t("addIncome")}
          </button>

          <select className="mode-select" value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="offline">{t("offline")}</option>
            <option value="online">{t("online")}</option>
          </select>

          <select className="month-select" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            <option value="all">{t("allMonths")}</option>
            {months.map((m) => (<option key={m} value={m}>{m}</option>))}
          </select>

          <select className="date-select" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="all">{t("allYears")}</option>
            {years.map((y) => (<option key={y} value={y.toString()}>{y}</option>))}
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
                <TableCell /><TableCell /><TableCell /><TableCell /><TableCell />
                <TableCell><TableActionLink>{t("edit")}</TableActionLink></TableCell>
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
                  <TableActionLink onClick={() => handleEdit(row)}>{t("edit")}</TableActionLink> |
                  <DeleteButton onClick={() => handleDelete(row.id)}>{t("delete")}</DeleteButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </MainTable>
    </IncomeContainer>
  );
}
