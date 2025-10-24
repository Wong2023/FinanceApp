import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ModalBg,
  ModalBlock,
  ModalRow,
  Input,
  Select,
  SizeCheckbox,
  ModalActions,
  BackdropContainer,
  BigBlock,
  ModalBtn,
  SizeOptions
} from "../styles/addItemStyles";
import styled from "styled-components";
import { useLanguage } from "./LanguageContext";

const ModalContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SizeOptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

function AddItemPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();
  const [category, setCategory] = useState("");
  const [series, setSeries] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (id !== undefined) {
      const items = JSON.parse(localStorage.getItem("catalog_items") || "[]");
      const item = items[id];
      if (item) { setCategory(item.category); setSeries(item.series); setName(item.name); setSize(item.size); setPrice(item.price);
      }
    }
  }, [id]);

  const saveItem = () => {
    if (!category || !name || !size || !price) {
      alert(t("fillAllFields"));
      return;
    }
    let items = JSON.parse(localStorage.getItem("catalog_items") || "[]");
    if (id !== undefined) {
      items[id] = { category, series, name, size, price };
    } else {
      items.push({ category, series, name, size, price });
    }
    localStorage.setItem("catalog_items", JSON.stringify(items));
    navigate("/catalog");
  };
  return (
    <>
      <BackdropContainer>
        <BigBlock />
      </BackdropContainer>
      <ModalBg>
        <ModalBlock>
          <ModalContent>
            <h2 style={{ marginBottom: "20px" }}>{t("addItem")}</h2>
            <ModalRow>
              <label>{t("category")}:</label>
              <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">{t("choose")}...</option>
                <option value="Живопись">{t("painting")}</option>
                <option value="Графика">{t("graphics")}</option>
                <option value="Фото">{t("photo")}</option>
              </Select>
            </ModalRow>
            <ModalRow>
              <label>{t("series")}:</label>
              <Input value={series} onChange={(e) => setSeries(e.target.value)} />
            </ModalRow>
            <ModalRow>
              <label>{t("name")}:</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </ModalRow>
            <ModalRow>
              <label>{t("size")}:</label>
              <SizeOptions>
                {["Big", "Small", "Tiny"].map((s) => (
                  <SizeOptionItem key={s}>
                    <SizeCheckbox type="radio" value={s} checked={size === s} onChange={() => setSize(s)}
                    />
                    <span>{t(s.toLowerCase())}</span>
                  </SizeOptionItem>
                ))}
              </SizeOptions>
            </ModalRow>

            <ModalRow>
              <label>{t("price")}:</label>
              <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)}
              />
            </ModalRow>
          </ModalContent>
          <ModalActions>
            <ModalBtn onClick={() => navigate("/catalog")}>{t("cancel")}</ModalBtn>
            <ModalBtn primary onClick={saveItem}>{t("save")}</ModalBtn>
          </ModalActions>
        </ModalBlock>
      </ModalBg>
    </>
  );
}

export default AddItemPage;