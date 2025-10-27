// ExpensesView.js
import React from "react";
import {
  Header, TotalBox, TotalTitle, TotalAmount, TabsRowContainer,
  TabButtonsBar, TabButton, ActiveTabButton, IconRow, IconButton,
  TableWrapper, Table, TableRow, TableCell, TableHeader, Select,
  MonthYearRow, ContentArea, AddButton,
} from "../styles/ExpensesStyles";
import { useLanguage } from "./LanguageContext";
import useExpensesLogic from "./ExpensesLogic";

// export default function ExpensesPage() {
const ExpensesPage = () => {
  const { t } = useLanguage();
  const {
    navigate, fixedExpenses, staffExpenses, materialsList, providersList,
    TAB_NAMES, monthNamesFull, monthNamesShort, years,
    activeTab, setActiveTab, selectedMonth, setSelectedMonth,
    selectedYear, setSelectedYear,
  } = useExpensesLogic(t);

  const calendarRow = (
    <MonthYearRow style={{ marginBottom: 0, marginTop: 0 }}>
      <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
        {monthNamesFull.map((m) => <option key={m}>{m}</option>)}
      </Select>
      <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        {years.map((y) => <option key={y}>{y}</option>)}
      </Select>
    </MonthYearRow>
  );

  const renderTable = () => {
    if (activeTab === "Fixed")
      return (<>{calendarRow}
        <Table><thead><TableRow>
          {Array(5).fill(0).map((_,i)=><TableHeader key={i}>{t("info")}</TableHeader>)}
        </TableRow></thead><tbody>
          {fixedExpenses.map((exp,i)=>(<TableRow key={i}>
            <TableCell>{exp.name}</TableCell>
            {Array(4).fill(0).map((_,j)=><TableCell key={j}></TableCell>)}
          </TableRow>))}
        </tbody></Table></>);
    if (activeTab === "Staff")
      return (<>{calendarRow}
        <Table><thead><TableRow>
          {["name","position","type","hourlyRate","basePrice","salary",
            "contractedSalary","socialSecurity","totalCC"]
            .map((h)=><TableHeader key={h}>{t(h)}</TableHeader>)}
        </TableRow></thead><tbody>
          {staffExpenses.map((exp,i)=>(<TableRow key={i}>
            {["name","position","type","hourlyRate","basePrice","salary",
              "contractedSalary","seguridadSocial","totalCC"]
              .map((k)=><TableCell key={k}>{exp[k]}</TableCell>)}
          </TableRow>))}
        </tbody></Table></>);
    if (["Materials","Providers"].includes(activeTab)) {
      const list = activeTab === "Materials" ? materialsList : providersList;
      return (<>{calendarRow}
        <Table><thead><TableRow>
          <TableHeader>{t("name")}</TableHeader>
          {monthNamesShort.map((m)=><TableHeader key={m}>{m}</TableHeader>)}
        </TableRow></thead><tbody>
          {list.map((item,i)=>(<TableRow key={i}>
            <TableCell>{item.name}</TableCell>
            {monthNamesShort.map((m)=><TableCell key={m}></TableCell>)}
          </TableRow>))}
        </tbody></Table></>);
    }
    return (<>{calendarRow}
      <Table><thead><TableRow><TableHeader>{t("info")}</TableHeader></TableRow></thead>
      <tbody><TableRow><TableCell>{t("noData")}</TableCell></TableRow></tbody></Table></>);
  };

  return (
    <ContentArea>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Header>{t("expenses")} (Murkhasya)</Header>
        <AddButton onClick={() => navigate("/expenses/addexpenses")}>{t("addExpense")}</AddButton>
      </div>

      <TotalBox>
        <TotalTitle>{t("totalExpenses")}</TotalTitle>
        <TotalAmount>10.000$</TotalAmount>
      </TotalBox>

      <TabsRowContainer>
        <TabButtonsBar>
          {TAB_NAMES.map((tab) => {
            const Btn = tab === activeTab ? ActiveTabButton : TabButton;
            return <Btn key={tab} onClick={() => setActiveTab(tab)}>{t(tab.toLowerCase())}</Btn>;
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
}

export default ExpensesPage;