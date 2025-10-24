// ExpensesLogic.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useExpensesLogic(t) {
  const navigate = useNavigate();

  const fixedExpenses = [
    { name: "Rent" }, { name: "Water" },
    { name: "Electricity" }, { name: "Internet" }, { name: "Alarm" },
  ];

  const staffExpenses = [
    { name: "Liberta", position: "", type: "", hourlyRate: "",
      basePrice: "", salary: "", contractedSalary: "",
      seguridadSocial: "", totalCC: "" },
    { name: "Liberta" }, { name: "Liberta" }, { name: "Liberta" }, { name: "Liberta" },
  ];

  const materialsList = [
    { name: "Barna Paper" }, { name: "Casa Piera" },
    { name: "Belles Artes F." }, { name: "MBE" }, { name: "La Bolsera" },
  ];

  const providersList = [
    { name: "Super Servies" }, { name: "Ferreteria BCN" },
    { name: "Spray Planet" }, { name: "Marcos" },
  ];

  const TAB_NAMES = ["Fixed", "Staff", "Materials", "Providers", "Other"];
  const monthNamesFull = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const monthNamesShort = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - 2 + i);

  const [activeTab, setActiveTab] = useState("Fixed");
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [selectedYear, setSelectedYear] = useState("2025");

  return {
    t, navigate, fixedExpenses, staffExpenses,
    materialsList, providersList, TAB_NAMES,
    monthNamesFull, monthNamesShort, years,
    activeTab, setActiveTab, selectedMonth, setSelectedMonth,
    selectedYear, setSelectedYear
  };
}
