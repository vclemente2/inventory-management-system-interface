import DataTable from "../../components/DataTable/DataTable";
import MainTitle from "../../components/MainTitle/MainTitle";
import styles from "./Reports.module.scss";
import inventoryRegisters from "../../data/inventoryRegisters.ts";
import { useEffect, useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import categories from "../../data/categories.ts";
import { FilterAltOffOutlined, FilterAltOutlined } from "@mui/icons-material";
import hubs from "../../data/hubs.ts";
import * as XLSX from "xlsx";
import Item from "../../types/Item.ts";

function Reports() {
  const [filteredData, setFilteredData] = useState(inventoryRegisters);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [hubFilter, setHubFilter] = useState("");
  const [codeFilter, setCodeFilter] = useState("");

  useEffect(() => {
    const data = inventoryRegisters.filter((element) => {
      return (
        element.category.toLowerCase().includes(categoryFilter.toLowerCase()) &&
        element.code.toLowerCase().includes(codeFilter.toLowerCase()) &&
        element.hub.toLowerCase().includes(hubFilter.toLowerCase())
      );
    });
    setFilteredData(data);
  }, [categoryFilter, codeFilter, hubFilter]);

  return (
    <section className={styles.reportContainer}>
      <MainTitle noMargin={true}>Relatórios</MainTitle>
      <div className={styles.filterContainer}>
        <div className={styles.filterContainer__title}>
          <FilterAltOutlined />
          <span>Filtros</span>
        </div>
        <div className={styles.filterContainer__inputs}>
          <TextField
            className={`input ${styles.filterContainer__input}`}
            id="categoryFilter"
            label="Categoria"
            variant="outlined"
            select
            onChange={(event) => setCategoryFilter(event.target.value)}
            value={categoryFilter}
          >
            <MenuItem key="clear" value="" style={{ color: "#aaa" }}>
              Limpar Filtro
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={`input ${styles.filterContainer__input}`}
            id="hubFilter"
            label="Hub"
            variant="outlined"
            select
            onChange={(event) => setHubFilter(event.target.value)}
            value={hubFilter}
          >
            <MenuItem key="clear" value="" style={{ color: "#aaa" }}>
              Limpar Filtro
            </MenuItem>
            {hubs.map((hub) => (
              <MenuItem key={hub} value={hub}>
                {hub}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={`input ${styles.filterContainer__input}`}
            id="codeFilter"
            label="Código do Item"
            variant="outlined"
            select
            onChange={(event) => setCodeFilter(event.target.value)}
            value={codeFilter}
          >
            <MenuItem key="clear" value="" style={{ color: "#aaa" }}>
              Limpar Filtro
            </MenuItem>
            {inventoryRegisters.map((item) => (
              <MenuItem key={item.code} value={item.code}>
                {item.code}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="button"
            variant="outlined"
            onClick={() => {
              setCategoryFilter("");
              setCodeFilter("");
              setHubFilter("");
            }}
          >
            <FilterAltOffOutlined
              style={{ fill: "#1978D2" }}
            ></FilterAltOffOutlined>
            Limpar Filtro
          </Button>
        </div>
      </div>
      <Button
        className={styles.exportButton}
        variant="outlined"
        size="small"
        onClick={() => exportToExcel(filteredData, "report")}
      >
        Exportar Para Excel
      </Button>
      <div className={styles.tableContainer}>
        <DataTable data={filteredData}></DataTable>
      </div>
    </section>
  );
}

function exportToExcel(data: Item[], fileName: string) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, `${fileName}.xlsx`);
}

export default Reports;
