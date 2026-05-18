import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthContainer, AuthContent, AuthTitle, AuthInput, AuthButton,
  AuthSwitch, Toast, LanguageButtonsWrapper, LangButton,
} from "../styles/authStyles";
import { useLanguage } from "./LanguageContext";

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

  // Имитация бэкенда: достаем пользователей из localStorage
  const fetchAllUsersLocal = () => {
    try {
      const users = localStorage.getItem("local_users");
      return users ? JSON.parse(users) : [];
    } catch (err) {
      console.error("Error reading local users:", err);
      return [];
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleAuth = async () => {
    if (!username || !password) return showToast("Insert username and password");
    
    // Получаем список зарегистрированных пользователей локально
    const users = fetchAllUsersLocal();

    if (isRegister) {
      // Ищем, есть ли уже такой пользователь
      const exists = users.find((u) => u.name === username || u.email === username);
      if (exists) return showToast("User already exist");

      // Формируем объект пользователя (структура сохранена как у твоего сервера)
      const newUser = {
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
        name: username,
        email: username,
        password: password, // В реальном проекте хешируется, для демо пойдет
        contact: "0000000000",
        address: "",
        projectId: "ec08bb10-c5c8-4608-8176-164906872545",
      };

      // Сохраняем обновленный список в localStorage
      users.push(newUser);
      localStorage.setItem("local_users", JSON.stringify(users));

      showToast("registration successful");
      setIsRegister(false);
      setUsername("");
      setPassword("");
    } else {
      // Логика Входа
      const user = users.find((u) => (u.email === username || u.name === username) && u.password === password);
      
      if (!user) return showToast("incorrect login or password");
      
      // Авторизуем сессию
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    checkAuthStatus();
    // Логируем пользователей в консоль браузера для отладки, если нужно
    console.log("Current local users database:", fetchAllUsersLocal());
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

        <AuthInput 
          type="text" 
          placeholder={t("username")} 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
        <AuthInput 
          type="password" 
          placeholder={t("password")} 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

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
