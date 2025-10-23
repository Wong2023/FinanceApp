import React from "react";
import {
  Container,
  Title,
  AddButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  ScrollContainer,
} from "../styles/providersStyles";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext"; // подключаем контекст

export default function ProvidersPage() {
  const navigate = useNavigate();
  const { t } = useLanguage(); // получаем функцию t
  const [providers, setProviders] = React.useState([]);

  React.useEffect(() => {
    const storedProviders = JSON.parse(localStorage.getItem("providers")) || [];
    setProviders(storedProviders);
  }, []);

  return (
    <Container>
      <Title>
        {t("providers")} <span>({t("title")})</span>
        <AddButton onClick={() => navigate("/providers/add")}>
          {t("addNew") + " " + t("providers")}
        </AddButton>
      </Title>

      <ScrollContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>{t("name")}</Th>
              <Th>{t("address")}</Th>
              <Th>{t("contact")}</Th>
              <Th>{t("email")}</Th>
              <Th>{t("cif")}</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <tbody>
            {providers.map((provider, index) => (
              <Tr key={index}>
                <Td>{provider.name}</Td>
                <Td>{provider.address}</Td>
                <Td>{provider.number}</Td>
                <Td>{provider.email}</Td>
                <Td>{provider.cif}</Td>
                <Td>{t("overview")}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </ScrollContainer>
    </Container>
  );
}
