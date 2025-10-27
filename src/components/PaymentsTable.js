import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  Table,
  Tr,
  Title,
  Td,
  Container
} from "../styles/tables";

const PaymentsTable = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <Title>{t("paymentsTitle")}</Title>
      <Table>
        <tbody>
          <Tr>
            <Td>{t("netflix")}</Td>
            <Td>€15</Td>
          </Tr>
          <Tr>
            <Td>{t("spotify")}</Td>
            <Td>€10</Td>
          </Tr>
          <Tr>
            <Td>{t("phone")}</Td>
            <Td>€30</Td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default PaymentsTable;