import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper, Container, Header, AddButton, CategoriesWrapper,
  CategoryButton, IconButton, Table, TableHeader, TableRow,
  EditButton, TableScrollWrapper
} from "../styles/CatalogPageStyles";
import { useLanguage } from "./LanguageContext";

const CatalogPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [items, setItems] = useState([]);
  const loadItems = () => {
    const stored = localStorage.getItem("catalog_items");
    if (stored) setItems(JSON.parse(stored));
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <PageWrapper>
      <Container>
        <Header>
          <h1>
            {t("catalog")}{" "}
            <span style={{ fontWeight: "normal" }}>(Murkhasya)</span>
          </h1>
          <AddButton onClick={() => navigate("/catalog/addcategory")}>
            {t("addCategory")}
          </AddButton>
        </Header>

        <CategoriesWrapper>
          <CategoryButton $active>{t("category")}</CategoryButton>
          <CategoryButton>{t("category")}</CategoryButton>
          <CategoryButton>{t("category")}</CategoryButton>
          <CategoryButton>{t("category")}</CategoryButton>
          <CategoryButton>{t("category")}</CategoryButton>
          <IconButton>✏️</IconButton>
        </CategoriesWrapper>

        <TableScrollWrapper>
          <Table>
            <TableHeader>
              <tr>
                <th>{t("seriesName")}</th>
                <th>{t("paintingName")}</th>
                <th>{t("size")}</th>
                <th>{t("price")}</th>
                <th>
                  <AddButton onClick={() => navigate("/catalog/additem")}>
                    {t("addItem")}
                  </AddButton>
                </th>
              </tr>
            </TableHeader>
            <tbody>
              {items.length > 0 ? (
                items.map((item, i) => (
                  <TableRow key={i}>
                    <td>{item.series}</td>
                    <td>{item.name}</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                    <td>
                      <EditButton onClick={() => navigate(`/catalog/edititem/${i}`)}>
                        {t("edit")}
                      </EditButton>
                    </td>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    {t("noItemsYet")}
                  </td>
                </TableRow>
              )}
            </tbody>
          </Table>
        </TableScrollWrapper>
      </Container>
    </PageWrapper>
  );
};

export default CatalogPage;
