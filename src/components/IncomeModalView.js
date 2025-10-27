// IncomeModalView.js
import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  PageContainer, ModalBlock, ModalRow, Input, Select,
  ModalActions, ModalBtn, InfoSection, ClientSection,
  CommentInput, HeaderContainer, TabsContainer, FieldBlock,
} from "../styles/modal";
import useIncomeModalLogic from "./IncomeModalLogic";

const IncomeModal = ({ onSave, onClose }) => {
  const { t } = useLanguage();
  const {
    form, handleChange, handleSubmit, handleCancel,
    handleContactChange, tab, setTab, editingMode,
  } = useIncomeModalLogic(onSave, onClose);

  return (
    <PageContainer>
      <HeaderContainer>
        <h2 style={{ fontWeight: "bold", margin: 0 }}>
          {editingMode ? t("editIncome") : t("addIncome")}
        </h2>
      </HeaderContainer>

      <TabsContainer>
        <ModalBtn primary={tab === "gallery"} onClick={() => setTab("gallery")} disabled={editingMode}>
          {t("galleryIncome")}
        </ModalBtn>
        <ModalBtn primary={tab === "online"} onClick={() => setTab("online")} disabled={editingMode}>
          {t("onlineIncome")}
        </ModalBtn>
      </TabsContainer>

      <form onSubmit={handleSubmit}>
        <ModalBlock>
          <InfoSection>
            <ModalRow>
              <FieldBlock><label>{t("item")}</label>
                <Input name="item" value={form.item} onChange={handleChange} /></FieldBlock>
              <FieldBlock><label>{t("date")}</label>
                <Input type="date" name="date" value={form.date} onChange={handleChange} /></FieldBlock>
            </ModalRow>

            <ModalRow>
              <FieldBlock><label>{t("artDealer")}</label>
                <Input name="dealer" value={form.dealer} onChange={handleChange} /></FieldBlock>
              <FieldBlock><label>{t("shipping")}</label>
                <Input name="shipping" value={form.shipping} onChange={handleChange} /></FieldBlock>
            </ModalRow>

            <ModalRow>
              <FieldBlock><label>{t("insurance")}</label>
                <Select name="insurance" value={form.insurance} onChange={handleChange}>
                  <option value="">{t("select")}</option>
                  <option value="Yes">{t("yes")}</option>
                  <option value="No">{t("no")}</option>
                </Select></FieldBlock>

              <FieldBlock><label>{t("payment")}</label>
                <Select name="payment" value={form.payment} onChange={handleChange}>
                  <option value="">{t("select")}</option>
                  <option value="Cash">{t("cash")}</option>
                  <option value="Card">{t("card")}</option>
                  <option value="Bank">{t("bankTransfer")}</option>
                </Select></FieldBlock>

              <FieldBlock><label>{t("frame")}</label>
                <Select name="frame" value={form.frame} onChange={handleChange}>
                  <option value="">{t("select")}</option>
                  <option value="With Frame">{t("withFrame")}</option>
                  <option value="No Frame">{t("noFrame")}</option>
                </Select></FieldBlock>

              <FieldBlock><label>{t("location")}</label>
                <Select name="location" value={form.location} onChange={handleChange}>
                  <option value="">{t("select")}</option>
                  <option value="Gallery">{t("gallery")}</option>
                  <option value="Storage">{t("storage")}</option>
                  <option value="Sold">{t("sold")}</option>
                </Select></FieldBlock>
            </ModalRow>
          </InfoSection>

          <ClientSection>
            <ModalRow>
              <FieldBlock><label>{t("clientName")}</label>
                <Input name="clientName" value={form.clientName} onChange={handleChange} /></FieldBlock>
              <FieldBlock><label>{t("email")}</label>
                <Input type="email" name="email" value={form.email} onChange={handleChange} /></FieldBlock>
            </ModalRow>

            <ModalRow>
              <FieldBlock><label>{t("contact")}</label>
                <Input type="tel" name="contact" value={form.contact} onChange={handleContactChange} /></FieldBlock>
              <FieldBlock><label>{t("country")}</label>
                <Input name="country" value={form.country} onChange={handleChange} /></FieldBlock>
            </ModalRow>

            <ModalRow>
              <FieldBlock style={{ flex: 1 }}>
                <label>{t("clientComment")}</label>
                <CommentInput name="comment" value={form.comment} onChange={handleChange} />
              </FieldBlock>
            </ModalRow>
          </ClientSection>

          <ModalActions>
            <ModalBtn type="button" onClick={handleCancel}>{t("cancel")}</ModalBtn>
            <ModalBtn primary type="submit">{editingMode ? t("update") : t("save")}</ModalBtn>
          </ModalActions>
        </ModalBlock>
      </form>
    </PageContainer>
  );
}

export default IncomeModal;