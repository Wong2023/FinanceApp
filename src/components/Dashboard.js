import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderCards from "./HeaderCards";
import RemindersTable from "./RemindersTable";
import PaymentsTable from "./PaymentsTable";
import InfoTable from "./InfoTable";
import {
  Container,
  Content,
  Title,
  Row,
  Tables,
  AddButtonWrapper,
  AddButton,
  DropdownMenu,
  DropdownItem,
  LogoutButton,
  LanguageButtonsWrapper,
  LangButton,
} from "../styles/dashboard";
import { useLanguage } from "../components/LanguageContext";

function AddNewWithMenu({ onSelect, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleButtonClick = () => setMenuOpen((open) => !open);
  const handleSelect = (option) => {
    setMenuOpen(false);
    onSelect(option);
  };

  return (
    <AddButtonWrapper ref={wrapperRef}>
      <AddButton onClick={handleButtonClick}>{t("addNew")}</AddButton>
      <LanguageButtonsWrapper>
        <LangButton onClick={() => setLang("en")}>EN</LangButton>
        <LangButton onClick={() => setLang("es")}>ES</LangButton>
      </LanguageButtonsWrapper>
      {menuOpen && (
        <DropdownMenu
          style={{ opacity: 1, pointerEvents: "auto", transform: "translateY(0)" }}
        >
          <DropdownItem onClick={() => handleSelect("income")}>
            {t("income")}
          </DropdownItem>
          <DropdownItem onClick={() => handleSelect("expenses")}>
            {t("expenses")}
          </DropdownItem>
        </DropdownMenu>
      )}
    </AddButtonWrapper>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { t, setLang } = useLanguage();

  function handleMenuSelect(option) {
    if (option === "income") {
      navigate("/dashboard/addincome", { state: { fromDashboard: true } });
    } else if (option === "expenses") {
      navigate("/dashboard/addexpenses", { state: { fromDashboard: true } });
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/auth");
  };

  return (
    <Container>
      <Content>
        <AddNewWithMenu onSelect={handleMenuSelect} setLang={setLang} />
        <Title>{t("title")}</Title>
        <LogoutButton onClick={handleLogout}>{t("logout")}</LogoutButton>

        <Row>
          <HeaderCards />
        </Row>
        <Tables>
          <RemindersTable title={t("reminders")} />
          <PaymentsTable title={t("payments")} />
          <InfoTable title={t("info")} />
        </Tables>
      </Content>
    </Container>
  );
}
