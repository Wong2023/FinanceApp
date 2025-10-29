// ProvidersPage.js
import React from "react";
import {
  Container, Title, AddButton, Table, Thead, Tr, Th, Td, ScrollContainer,
} from "../styles/providersStyles";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const ProvidersPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [providers, setProviders] = React.useState([]);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("providers");
      if (!raw || raw.trim() === "") {
        setProviders([]); // если пусто — просто пустой массив
      } else {
        const parsed = JSON.parse(raw);
        setProviders(Array.isArray(parsed) ? parsed : []);
      }
    } catch {
      console.warn("Corrupted providers data in localStorage, clearing...");
      localStorage.removeItem("providers");
      setProviders([]);
    }
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
};

export default ProvidersPage;
