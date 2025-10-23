import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IncomeModal from "./IncomeModal";

export default function IncomeModalPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromDashboard = location.state?.fromDashboard || false;

  const handleSave = (data) => {
    console.log("Saved income:", data);
    // данные о клиенте уже сохранены в localStorage в IncomeModal
    if (fromDashboard) {
      navigate("/dashboard");
    } else {
      navigate("/income"); // не передаем state, ClientPage будет читать localStorage
    }
  };

  const handleClose = () => {
    if (fromDashboard) {
      navigate("/dashboard");
    } else {
      navigate("/income");
    }
  };

  return <IncomeModal onClose={handleClose} onSave={handleSave} />;
}
