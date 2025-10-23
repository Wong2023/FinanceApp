import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  Container,
  Title,
  List,
  Item,
} from "../styles/tables";

export default function RemindersTable() {
  const { t } = useLanguage();

  return (
    <Container>
      <Title>{t("remindersTitle")}</Title>
      <List>
        <Item>{t("payRent")}</Item>
        <Item>{t("meeting")}</Item>
        <Item>{t("callMom")}</Item>
      </List>
    </Container>
  );
}
