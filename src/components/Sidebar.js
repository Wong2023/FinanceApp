import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SidebarContainer,SidebarIcon,MenuBlock,Title,Dropdown,DropdownItem,
} from "../styles/sidebar";
import { useLanguage } from "./LanguageContext"; 
const iconUrl = "https://i.imgur.com/vD4fJbl.png";
export default function Sidebar() {
  const [hovered, setHovered] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage(); 
  const isDashboard =
    location.pathname === "/" || location.pathname.startsWith("/dashboard");
  const [sidebarColor, setSidebarColor] = useState("#6ce1d1");
  useEffect(() => {
    if (location.pathname.startsWith("/income")) {
      setSidebarColor("#ffe144");
    } else if (location.pathname.startsWith("/providers")) {
      setSidebarColor("#cbf3d2");
    } else {
      setSidebarColor("#6ce1d1");
    }
  }, [location.pathname]);

  return (
    <SidebarContainer bg={sidebarColor}>
      <SidebarIcon src={iconUrl} alt="Sidebar Icon" />
      <MenuBlock
        onMouseEnter={() => setHovered("murkhasya")}
        onMouseLeave={() => setHovered("")}
        expanded={hovered === "murkhasya" || isDashboard}
        isDashboard={isDashboard}>
        <Title>{t("murkhasya")}</Title>
        <Dropdown
          show={hovered === "murkhasya" || isDashboard}
          isDashboard={isDashboard}>
          <DropdownItem
            isCurrent={
              location.pathname === "/" || location.pathname === "/dashboard"
            }
            onClick={() => navigate("/")}>
            {t("dashboard")}
          </DropdownItem>
          <DropdownItem
            isCurrent={location.pathname === "/income"}
            onClick={() => navigate("/income")}>
            {t("income")}
          </DropdownItem>
          <DropdownItem
            isCurrent={location.pathname === "/expenses"}
            onClick={() => navigate("/expenses")}>
            {t("expenses")}
          </DropdownItem>
          <DropdownItem
            isCurrent={location.pathname === "/client"}
            onClick={() => navigate("/client")}>
            {t("client")}
          </DropdownItem>
          <DropdownItem
            isCurrent={location.pathname === "/providers"}
            onClick={() => navigate("/providers")}>
            {t("providers")}
          </DropdownItem>
          <DropdownItem
            isCurrent={location.pathname === "/catalog"}
            onClick={() => navigate("/catalog")}>
            {t("catalog")}
          </DropdownItem>
        </Dropdown>
      </MenuBlock>
      <MenuBlock
        onMouseEnter={() => setHovered("charcha")}
        onMouseLeave={() => setHovered("")}
        expanded={hovered === "charcha"}>
        <Title>{t("charcha")}</Title>
        <Dropdown show={hovered === "charcha"}>
          <DropdownItem
            orange
            isCurrent={location.pathname === "/income"}
            onClick={() => navigate("/income")}>
            {t("income")}
          </DropdownItem>
          <DropdownItem
            isCurrent={location.pathname === "/expenses"}
            onClick={() => navigate("/expenses")}>
            {t("expenses")}
          </DropdownItem>
          <DropdownItem
            isCurrent={location.pathname === "/personal"}
            onClick={() => navigate("/personal")}>
            {t("personal")}
          </DropdownItem>
        </Dropdown>
      </MenuBlock>
      <MenuBlock
        onMouseEnter={() => setHovered("personal")}
        onMouseLeave={() => setHovered("")}
        expanded={hovered === "personal"}>
        <Title>{t("personal")}</Title>
        <Dropdown show={hovered === "personal"}>
          <DropdownItem
            orange
            isCurrent={location.pathname === "/stock"}
            onClick={() => navigate("/stock")}>
            {t("stock")}
          </DropdownItem>
          <DropdownItem
            isCurrent={location.pathname === "/crypto"}
            onClick={() => navigate("/crypto")}>
            {t("crypto")}
          </DropdownItem>
        </Dropdown>
      </MenuBlock>
      <MenuBlock>
  <Title
    onClick={() => navigate("/calendar")}
    style={{ cursor: "pointer" }}>
    Calendar
  </Title>
</MenuBlock>
    </SidebarContainer>
  );}