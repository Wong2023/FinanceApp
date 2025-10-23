import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import {
  PageContainer,
  ModalBlock,
  ModalRow,
  Input,
  Select,
  ModalActions,
  ModalBtn,
  InfoSection,
  ClientSection,
  CommentInput,
  HeaderContainer,
  TabsContainer,
  FieldBlock,
} from "../styles/modal";

export default function IncomeModal({ onSave, onClose }) {
  const { t } = useLanguage();
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
    item: "",
    date: "",
    dealer: "",
    shipping: "",
    insurance: "",
    payment: "",
    amount: "",
    frame: "",
    location: "",
    clientName: "",
    email: "",
    contact: "",
    country: "",
    comment: "",
    id: null,
  });

  useEffect(() => {
    if (editingMode && editingIncome) {
      setForm(editingIncome);
    }
  }, [editingMode, editingIncome]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(form).every((val) => val === "" || val === null);
    if (isEmpty) {
      if (fromDashboard) {
        navigate("/dashboard");
      } else {
        navigate("/income");
      }
      return;
    }

    const newIncome = {
      ...form,
      id: editingMode ? form.id : Date.now(),
    };

    const source = tab === "gallery" ? "offline" : "online";

    const clientData = {
      name: form.clientName,
      contact: form.contact,
      email: form.email,
      country: form.country,
    };

    if (clientData.name || clientData.email || clientData.contact || clientData.country) {
      const existingClients = JSON.parse(localStorage.getItem("clientsData")) || [];
      const updatedClients = existingClients.some((c) => c.email === clientData.email)
        ? existingClients.map((c) => (c.email === clientData.email ? clientData : c))
        : [...existingClients, clientData];
      localStorage.setItem("clientsData", JSON.stringify(updatedClients));
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

  return (
    <PageContainer>
      <HeaderContainer>
        <h2 style={{ fontWeight: "bold", margin: 0 }}>
          {editingMode ? t("editIncome") : t("addIncome")}
        </h2>
      </HeaderContainer>

      <TabsContainer>
        <ModalBtn
          primary={tab === "gallery"}
          onClick={() => setTab("gallery")}
          disabled={editingMode}
        >
          {t("galleryIncome")}
        </ModalBtn>
        <ModalBtn
          primary={tab === "online"}
          onClick={() => setTab("online")}
          disabled={editingMode}
        >
          {t("onlineIncome")}
        </ModalBtn>
      </TabsContainer>

      <form onSubmit={handleSubmit}>
        <ModalBlock>
          <InfoSection>
            <ModalRow>
              <FieldBlock>
                <label>{t("item")}</label>
                <Input name="item" value={form.item} onChange={handleChange} />
              </FieldBlock>

              <FieldBlock>
                <label>{t("date")}</label>
                <Input type="date" name="date" value={form.date} onChange={handleChange} />
              </FieldBlock>
            </ModalRow>

            <ModalRow>
              <FieldBlock>
                <label>{t("artDealer")}</label>
                <Input name="dealer" value={form.dealer} onChange={handleChange} />
              </FieldBlock>

              <FieldBlock>
                <label>{t("shipping")}</label>
                <Input name="shipping" value={form.shipping} onChange={handleChange} />
              </FieldBlock>
            </ModalRow>

            <ModalRow>
              <FieldBlock>
                <label>{t("insurance")}</label>
                <Select name="insurance" value={form.insurance} onChange={handleChange}>
                  <option value="">{t("select")}</option>
                  <option value="Yes">{t("yes")}</option>
                  <option value="No">{t("no")}</option>
                </Select>
              </FieldBlock>

              <FieldBlock>
                <label>{t("payment")}</label>
                <Select name="payment" value={form.payment} onChange={handleChange}>
                  <option value="">{t("select")}</option>
                  <option value="Cash">{t("cash")}</option>
                  <option value="Card">{t("card")}</option>
                  <option value="Bank">{t("bankTransfer")}</option>
                </Select>
              </FieldBlock>

              <FieldBlock>
                <label>{t("frame")}</label>
                <Select name="frame" value={form.frame} onChange={handleChange}>
                  <option value="">{t("select")}</option>
                  <option value="With Frame">{t("withFrame")}</option>
                  <option value="No Frame">{t("noFrame")}</option>
                </Select>
              </FieldBlock>

              <FieldBlock>
                <label>{t("location")}</label>
                <Select name="location" value={form.location} onChange={handleChange}>
                  <option value="">{t("select")}</option>
                  <option value="Gallery">{t("gallery")}</option>
                  <option value="Storage">{t("storage")}</option>
                  <option value="Sold">{t("sold")}</option>
                </Select>
              </FieldBlock>
            </ModalRow>
          </InfoSection>

          <ClientSection>
            <ModalRow>
              <FieldBlock>
                <label>{t("clientName")}</label>
                <Input name="clientName" value={form.clientName} onChange={handleChange} />
              </FieldBlock>

              <FieldBlock>
                <label>{t("email")}</label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </FieldBlock>
            </ModalRow>

            <ModalRow>
              <FieldBlock>
                <label>{t("contact")}</label>
                <Input
                  type="tel"
                  name="contact"
                  value={form.contact}
                  onChange={(e) => {
                    const onlyDigits = e.target.value.replace(/\D/g, "");
                    setForm((prev) => ({ ...prev, contact: onlyDigits }));
                  }}
                />
              </FieldBlock>

              <FieldBlock>
                <label>{t("country")}</label>
                <Input name="country" value={form.country} onChange={handleChange} />
              </FieldBlock>
            </ModalRow>

            <ModalRow>
              <FieldBlock style={{ flex: 1 }}>
                <label>{t("clientComment")}</label>
                <CommentInput
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                />
              </FieldBlock>
            </ModalRow>
          </ClientSection>

          <ModalActions>
            <ModalBtn
              type="button"
              onClick={() => {
                if (onClose) {
                  onClose();
                } else {
                  if (fromDashboard) {
                    navigate("/dashboard");
                  } else {
                    navigate("/income");
                  }
                }
              }}
            >
              {t("cancel")}
            </ModalBtn>
            <ModalBtn primary type="submit">
              {editingMode ? t("update") : t("save")}
            </ModalBtn>
          </ModalActions>
        </ModalBlock>
      </form>
    </PageContainer>
  );
}
