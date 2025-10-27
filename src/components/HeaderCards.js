import React from "react";
import styled from "styled-components";
import { useLanguage } from "./LanguageContext";

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: ${(props) => props.color || "#f7f7f7"};
  padding: 20px;
  box-shadow: 3px 3px 0 black;
  min-width: 160px;
  flex: 1;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Value = styled.div`
  font-size: 24px;
`;

const HeaderCards = () => {
  const { t } = useLanguage();

  return (
    <CardContainer>
      <Card color="#ffee58">
        <Title>{t("totalIncome")}</Title>
        <Value>€ 32,000</Value>
      </Card>
      <Card color="#ffa726">
        <Title>{t("totalExpenses")}</Title>
        <Value>€ 12,500</Value>
      </Card>
      <Card color="#b05f07a0">
        <Title>{t("financialReserve")}</Title>
        <Value>€ 6,400</Value>
      </Card>
    </CardContainer>
  );
}

export default HeaderCards;
