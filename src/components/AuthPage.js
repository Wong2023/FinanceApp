// AuthPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthContainer, AuthContent, AuthTitle, AuthInput, AuthButton,
  AuthSwitch, Toast, LanguageButtonsWrapper, LangButton,
} from "../styles/authStyles";
import { useLanguage } from "./LanguageContext";

const MCF_BASE = "/api";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();
  const { t, setLang } = useLanguage();

  const checkAuthStatus = () => {
    if (localStorage.getItem("auth") === "true") navigate("/dashboard");
  };

  const fetchAllUsers = async () => {
    try {
      const res = await fetch(`${MCF_BASE}/api/users/all`);
      return res.ok ? await res.json() : null;
    } catch (err) {
      console.error("fetchAllUsers error:", err);
      return null;
    }
  };

  const debugFetchUsers = async () => {
    const users = await fetchAllUsers();
    console.log("users (debug):", users);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleAuth = async () => {
    if (!username || !password) return showToast("Insert username and password");
    const users = await fetchAllUsers();
    if (!users) return showToast("error with server connection");

    if (isRegister) {
      const exists = users.find((u) => (u.email || u.name) === username);
      if (exists) return showToast("User already exist");

      const body = {
        name: username, email: username, password,
        contact: "0000000000", address: "",
        projectId: "ec08bb10-c5c8-4608-8176-164906872545",
      };

      const res = await fetch(`${MCF_BASE}/users/new`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) return showToast("registration error");
      showToast("registration successful");
      setIsRegister(false);
    } else {
      const user = users.find((u) => (u.email || u.name) === username);
      if (!user) return showToast("incorrect login or password");
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    }
  };

  useEffect(() => {
  checkAuthStatus();
  debugFetchUsers();
}, [navigate]);

  return (
    <AuthContainer>
      <AuthContent>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <AuthTitle>{isRegister ? t("register") : t("login")}</AuthTitle>
          <LanguageButtonsWrapper>
            <LangButton onClick={() => setLang("en")}>EN</LangButton>
            <LangButton onClick={() => setLang("es")}>ES</LangButton>
          </LanguageButtonsWrapper>
        </div>

        <AuthInput type="text" placeholder={t("username")} value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <AuthInput type="password" placeholder={t("password")} value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <AuthButton onClick={handleAuth}>
          {isRegister ? t("register") : t("login")}
        </AuthButton>

        <AuthSwitch>
          {isRegister ? t("alreadyHaveAccount") : t("dontHaveAccount")}{" "}
          <span onClick={() => setIsRegister(!isRegister)} style={{ cursor: "pointer" }}>
            {isRegister ? t("login") : t("register")}
          </span>
        </AuthSwitch>
      </AuthContent>
      {toastMessage && <Toast>{toastMessage}</Toast>}
    </AuthContainer>
  );
};

export default AuthPage;
