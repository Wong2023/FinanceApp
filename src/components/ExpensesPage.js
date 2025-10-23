import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  TotalBox,
  TotalTitle,
  TotalAmount,
  TabsRowContainer,
  TabButtonsBar,
  TabButton,
  ActiveTabButton,
  IconRow,
  IconButton,
  TableWrapper,
  Table,
  TableRow,
  TableCell,
  TableHeader,
  Select,
  MonthYearRow,
  ContentArea,
  AddButton,
} from "../styles/ExpensesStyles";
import { useLanguage } from "./LanguageContext";

const fixedExpenses = [
  { name: "Rent" },
  { name: "Water" },
  { name: "Electricity" },
  { name: "Internet" },
  { name: "Alarm" },
];

const staffExpenses = [
  {
    name: "Liberta",
    position: "",
    type: "",
    hourlyRate: "",
    basePrice: "",
    salary: "",
    contractedSalary: "",
    seguridadSocial: "",
    totalCC: "",
  },
  { name: "Liberta" },
  { name: "Liberta" },
  { name: "Liberta" },
  { name: "Liberta" },
];

const materialsList = [
  { name: "Barna Paper" },
  { name: "Casa Piera" },
  { name: "Belles Artes F." },
  { name: "MBE" },
  { name: "La Bolsera" },
];

const providersList = [
  { name: "Super Servies" },
  { name: "Ferreteria BCN" },
  { name: "Spray Planet" },
  { name: "Marcos" },
];

const TAB_NAMES = ["Fixed", "Staff", "Materials", "Providers", "Other"];
const monthNamesFull = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthNamesShort = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => currentYear - 2 + i);

const ExpensesPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Fixed");
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [selectedYear, setSelectedYear] = useState("2025");

  function renderTable() {
    const calendarRow = (
      <MonthYearRow style={{ marginBottom: 0, marginTop: 0 }}>
        <Select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {monthNamesFull.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Select>
        <Select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </MonthYearRow>
    );

    if (activeTab === "Fixed") {
      return (
        <>
          {calendarRow}
          <Table>
            <thead>
              <TableRow>
                <TableHeader>{t("info")}</TableHeader>
                <TableHeader>{t("info")}</TableHeader>
                <TableHeader>{t("info")}</TableHeader>
                <TableHeader>{t("info")}</TableHeader>
                <TableHeader>{t("info")}</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {fixedExpenses.map((exp, idx) => (
                <TableRow key={idx}>
                  <TableCell>{exp.name}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
      );
    } else if (activeTab === "Staff") {
      return (
        <>
          {calendarRow}
          <Table>
            <thead>
              <TableRow>
                <TableHeader>{t("name")}</TableHeader>
                <TableHeader>{t("position")}</TableHeader>
                <TableHeader>{t("type")}</TableHeader>
                <TableHeader>{t("hourlyRate")}</TableHeader>
                <TableHeader>{t("basePrice")}</TableHeader>
                <TableHeader>{t("salary")}</TableHeader>
                <TableHeader>{t("contractedSalary")}</TableHeader>
                <TableHeader>{t("socialSecurity")}</TableHeader>
                <TableHeader>{t("totalCC")}</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {staffExpenses.map((exp, idx) => (
                <TableRow key={idx}>
                  <TableCell>{exp.name}</TableCell>
                  <TableCell>{exp.position}</TableCell>
                  <TableCell>{exp.type}</TableCell>
                  <TableCell>{exp.hourlyRate}</TableCell>
                  <TableCell>{exp.basePrice}</TableCell>
                  <TableCell>{exp.salary}</TableCell>
                  <TableCell>{exp.contractedSalary}</TableCell>
                  <TableCell>{exp.seguridadSocial}</TableCell>
                  <TableCell>{exp.totalCC}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
      );
    } else if (activeTab === "Materials") {
      return (
        <>
          {calendarRow}
          <Table>
            <thead>
              <TableRow>
                <TableHeader>{t("name")}</TableHeader>
                {monthNamesShort.map((month) => (
                  <TableHeader key={month}>{month}</TableHeader>
                ))}
              </TableRow>
            </thead>
            <tbody>
              {materialsList.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.name}</TableCell>
                  {monthNamesShort.map((month) => (
                    <TableCell key={month}></TableCell>
                  ))}
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
      );
    } else if (activeTab === "Providers") {
      return (
        <>
          {calendarRow}
          <Table>
            <thead>
              <TableRow>
                <TableHeader>{t("name")}</TableHeader>
                {monthNamesShort.map((month) => (
                  <TableHeader key={month}>{month}</TableHeader>
                ))}
              </TableRow>
            </thead>
            <tbody>
              {providersList.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.name}</TableCell>
                  {monthNamesShort.map((month) => (
                    <TableCell key={month}></TableCell>
                  ))}
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
      );
    } else {
      return (
        <>
          {calendarRow}
          <Table>
            <thead>
              <TableRow>
                <TableHeader>{t("info")}</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>{t("noData")}</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </>
      );
    }
  }

  return (
    <ContentArea>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Header>{t("expenses")} (Murkhasya)</Header>
        <AddButton onClick={() => navigate("/expenses/addexpenses")}>
          {t("addExpense")}
        </AddButton>
      </div>
      <TotalBox>
        <TotalTitle>{t("totalExpenses")}</TotalTitle>
        <TotalAmount>10.000$</TotalAmount>
      </TotalBox>

      <TabsRowContainer>
        <TabButtonsBar>
          {TAB_NAMES.map((tab) => {
            const ButtonComponent = tab === activeTab ? ActiveTabButton : TabButton;
            return (
              <ButtonComponent key={tab} onClick={() => setActiveTab(tab)}>
                {t(tab.toLowerCase())}
              </ButtonComponent>
            );
          })}
        </TabButtonsBar>
        <IconRow>
          <IconButton>＋</IconButton>
          <IconButton>✎</IconButton>
        </IconRow>
      </TabsRowContainer>

      <TableWrapper>{renderTable()}</TableWrapper>
    </ContentArea>
  );
};

export default ExpensesPage;
