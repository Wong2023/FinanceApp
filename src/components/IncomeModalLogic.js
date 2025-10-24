// IncomeModalLogic.js
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useIncomeModalLogic(onSave, onClose) {
  const navigate = useNavigate();
  const location = useLocation();

  const editingIncome = location.state?.incomeToEdit || null;
  const editingMode = location.state?.editMode || false;
  const sourceFromState = location.state?.source || "offline";
  const fromDashboard = location.state?.fromDashboard || false;

  const [tab, setTab] = useState(
    editingMode ? (sourceFromState === "offline" ? "gallery" : "online") : "gallery"
  );

  const [form, setForm] = useState({
    item: "", date: "", dealer: "", shipping: "", insurance: "",
    payment: "", amount: "", frame: "", location: "", clientName: "",
    email: "", contact: "", country: "", comment: "", id: null,
  });

  useEffect(() => {
    if (editingMode && editingIncome) setForm(editingIncome);
  }, [editingMode, editingIncome]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setForm((prev) => ({ ...prev, contact: onlyDigits }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(form).every((v) => v === "" || v === null);
    if (isEmpty) return navigate(fromDashboard ? "/dashboard" : "/income");

    const newIncome = { ...form, id: editingMode ? form.id : Date.now() };
    const source = tab === "gallery" ? "offline" : "online";

    const clientData = {
      name: form.clientName, contact: form.contact,
      email: form.email, country: form.country,
    };

    if (clientData.name || clientData.email || clientData.contact || clientData.country) {
      const existing = JSON.parse(localStorage.getItem("clientsData")) || [];
      const updated = existing.some((c) => c.email === clientData.email)
        ? existing.map((c) => (c.email === clientData.email ? clientData : c))
        : [...existing, clientData];
      localStorage.setItem("clientsData", JSON.stringify(updated));
    }

    if (fromDashboard) {
      const key = source === "offline" ? "offlineData" : "onlineData";
      const existing = JSON.parse(localStorage.getItem(key)) || [];
      const updated = editingMode
        ? existing.map((i) => (i.id === newIncome.id ? newIncome : i))
        : [...existing, newIncome];
      localStorage.setItem(key, JSON.stringify(updated));
      if (onSave) onSave(newIncome);
      navigate("/dashboard");
    } else {
      if (onSave) onSave(newIncome);
      navigate("/income", { state: { newIncome, source, editMode: editingMode } });
    }
  };

  const handleCancel = () => {
    if (onClose) onClose();
    else navigate(fromDashboard ? "/dashboard" : "/income");
  };

  return {
    form, handleChange, handleSubmit, handleCancel,
    handleContactChange, tab, setTab, editingMode,
  };
}
