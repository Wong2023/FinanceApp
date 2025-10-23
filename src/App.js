import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import IncomePage from "./components/IncomePage";
import ProvidersPage from "./components/ProvidersPage";
import ExpensesPage from "./components/ExpensesPage";
import Layout from "./components/Layout";
import IncomeModalPage from "./components/IncomeModalPage";
import StubPage from "./components/StubPage";
import { Background, NoScroll } from "./styles/background";
import CatalogPage from "./components/CatalogPage";
import CatalogAddItemPage from "./components/AddItemPage"; 
import CatalogAddCategoryPage from "./components/addCategoryPage";
import ClientPage from "./components/ClientPage";  
import ExpenseModal from "./components/ExpenseModal";
import AddProviderPage from "./components/AddProviderPage";
import AuthPage from "./components/AuthPage";
import Calendar from "./components/Calendar";

function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("auth") === "true";
  return isAuth ? children : <Navigate to="/auth" replace />;
}

export default function App() {
  const layoutColor = "#6ce1d1"; // Бирюзовый для всех страниц

  return (
    <>
      <NoScroll />
      <Router>
        <Background bgColor={layoutColor} />
        <Routes>
          {/* Авторизация */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Layout + приватные маршруты */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout sidebarColor={layoutColor} />
              </PrivateRoute>
            }
          >
            {/* редирект с "/" на "/dashboard" */}
            <Route index element={<Navigate to="/dashboard" replace />} />

            {/* Dashboard */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/addincome" element={<IncomeModalPage />} />
            <Route path="dashboard/addexpenses" element={<ExpenseModal />} />

            {/* Доходы */}
            <Route path="income" element={<IncomePage />} />
            <Route path="income/addincome" element={<IncomeModalPage />} />

            {/* Провайдеры и расходы */}
            <Route path="providers" element={<ProvidersPage />} />
            <Route path="providers/add" element={<AddProviderPage />} />

            <Route path="client" element={<ClientPage />} />
            <Route path="expenses" element={<ExpensesPage />} />
            <Route path="expenses/addexpenses" element={<ExpenseModal />} />

            <Route path="calendar" element={<Calendar />} />

            {/* Каталог */}
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/addcategory" element={<CatalogAddCategoryPage />} />
            <Route path="catalog/additem" element={<CatalogAddItemPage />} /> 
            <Route path="catalog/edititem/:id" element={<CatalogAddItemPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
