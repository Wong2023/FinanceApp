import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IncomeModalView from "./IncomeModalView";

const IncomeModalPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromDashboard = location.state?.fromDashboard || false;

  const handleSave = (data) => {
    console.log("Saved income:", data);
    if (fromDashboard) {
      navigate("/dashboard");
    } else {
      navigate("/income"); 
    }
  };

  const handleClose = () => {
    if (fromDashboard) {
      navigate("/dashboard");
    } else {
      navigate("/income");
    }
  };

  return <IncomeModalView onClose={handleClose} onSave={handleSave} />;
}

export default IncomeModalPage;