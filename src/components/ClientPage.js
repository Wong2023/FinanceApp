import React, { useState, useEffect } from "react";
import clients from "./database/clients";
import { useLanguage } from "./LanguageContext";
import {
  AppContainer, PageContainer, PageHeader, SearchBox, SearchInput,
  SearchBtn, TableWrapper, Table, TableHeader, TableRow, TableCell,
} from "../styles/ClientPageStyles";

const ClientPage = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [allClients, setAllClients] = useState([]);

  const loadClients = () => {
    const storedClients = JSON.parse(localStorage.getItem("clientsData")) || [];
    setAllClients([...clients, ...storedClients]);
  };

  const subscribeToStorageChanges = () => {
    const handleStorageChange = () => loadClients();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  };

  useEffect(() => {
    loadClients();
    return subscribeToStorageChanges();
  }, []);

  const filteredClients = allClients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppContainer>
      <PageContainer>
        <PageHeader>
          <h2>
            {t("clientBilling")} <span>({t("title")})</span>
          </h2>
          <SearchBox>
            <SearchInput
              placeholder={t("searchByName")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchBtn onClick={() => setSearch("")}>❌</SearchBtn>
          </SearchBox>
        </PageHeader>

        <TableHeader>
          <div>{t("clientName")}</div>
          <div>{t("contact")}</div>
          <div>{t("email")}</div>
          <div>{t("country")}</div>
        </TableHeader>

        <TableWrapper>
          <Table>
            {filteredClients.length > 0 ? (
              filteredClients.map((client, i) => (
                <TableRow key={i}>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.contact}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.country}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="4" style={{ textAlign: "center" }}>
                  {t("noClientsFound")}
                </TableCell>
              </TableRow>
            )}
          </Table>
        </TableWrapper>
      </PageContainer>
    </AppContainer>
  );
};

export default ClientPage;
