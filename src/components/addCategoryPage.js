import React, { useState } from "react";
import {
  PageContainer,
  ModalBlock,
  ModalContent,
  ModalRow,
  Input,
  Select,
  ModalActions,
  ModalBtn
} from "../styles/addCategoryStyles";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSave = () => {
    if (!categoryName) {
      alert(t("enterCategoryName"));
      return;
    }
    console.log("Category Saved:", { categoryName, selectedItem });
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <h2 style={{ marginBottom: "20px" }}>{t("addCategory")}</h2>
      <ModalBlock>
        <ModalContent>
          <ModalRow>
            <label>{t("categoryName")}:</label>
            <Input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </ModalRow>
          <ModalRow>
            <label>{t("selectItems")}:</label>
            <Select
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
            >
              <option value="">{t("select")} --</option>
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
            </Select>
          </ModalRow>
        </ModalContent>
        <ModalActions>
          <ModalBtn onClick={handleCancel}>{t("cancel")}</ModalBtn>
          <ModalBtn primary onClick={handleSave}>{t("save")}</ModalBtn>
        </ModalActions>
      </ModalBlock>
    </PageContainer>
  );
};

export default AddCategory;
