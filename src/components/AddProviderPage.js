import React, { useState } from "react";
import {
  Container,
  Title,
  FormBox,
  FormRow,
  Label,
  Input,
  ButtonRow,
  CancelButton,
  SaveButton,
} from "../styles/addProviderStyles";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext"; 

const AddProviderPage  = () => { 
  const navigate = useNavigate();
  const { t } = useLanguage(); 

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    number: "",
    email: "",
    cif: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      const onlyNums = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: onlyNums });
      return;
    }

    if (name === "email") {
      setFormData({ ...formData, [name]: value });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    navigate("/providers"); 
  };

  const handleSave = () => {
    if (formData.email && !formData.email.includes("@")) {
      return;
    }

    const existingProviders = JSON.parse(localStorage.getItem("providers")) || [];
    const updatedProviders = [...existingProviders, formData];
    localStorage.setItem("providers", JSON.stringify(updatedProviders));

    navigate("/providers"); 
  };

  return (
    <Container>
      <Title>+ {t("addNew")} {t("providers")}</Title>

      <FormBox>
        <FormRow>
          <Label>{t("name")}:</Label>
          <Input type="text" name="name" value={formData.name} onChange={handleChange}
          />
        </FormRow>

        <FormRow>
          <Label>{t("address")}:</Label>
          <Input type="text" name="address" value={formData.address} onChange={handleChange}
          />
        </FormRow>

        <FormRow>
          <Label>{t("contact")}:</Label>
          <Input type="text" name="number" value={formData.number} onChange={handleChange}
          />
        </FormRow>

        <FormRow>
          <Label>Email:</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange}
          />
        </FormRow>

        <FormRow>
          <Label>CIF:</Label>
          <Input
            type="text"
            name="cif"
            value={formData.cif}
            onChange={handleChange}
          />
        </FormRow>

        <ButtonRow>
          <CancelButton onClick={handleCancel}>{t("cancel")}</CancelButton>
          <SaveButton
            onClick={handleSave}
            disabled={formData.email !== "" && !formData.email.includes("@")} // 🚫 кнопка блокируется если нет "@"
          >
            {t("save")}
          </SaveButton>
        </ButtonRow>
      </FormBox>
    </Container>
  );
}

export default AddProviderPage;