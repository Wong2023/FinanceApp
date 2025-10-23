import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  Container,
  Title,
  List,
  Item,
} from "../styles/tables";

export default function InfoTable() {
  const { t } = useLanguage();

  return (
    <Container>
      <Title>{t("infoTitle")}</Title>
      <List>
        <Item>{t("payRent")}</Item>
        <Item>{t("meeting")}</Item>
        <Item>{t("callMom")}</Item>
      </List>
    </Container>
  );
}
