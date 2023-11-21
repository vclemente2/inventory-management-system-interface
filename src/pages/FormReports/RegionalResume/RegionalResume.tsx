import MainTitle from "../../../components/MainTitle/MainTitle.tsx";
import styles from "./RegionalResume.module.scss";
import { useEffect, useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { FilterAltOffOutlined, FilterAltOutlined } from "@mui/icons-material";
import RegionalDataTable from "../../../components/RegionalDataTable/RegionalDataTable.tsx";
import formRegisters from "../../../data/formRegisters.ts";
import Form from "../../../types/Form.ts";
import exportToExcel from "../../../utils/exportToExcel.ts";
import formAndRegionalList from "../../../data/formAndRegionalList.ts";

function RegionalResume() {
  const [filteredData, setFilteredData] = useState(formRegisters);
  const [regionalFilter, setRegionalFilter] = useState("");

  useEffect(() => {
    const data = formRegisters.filter((element) => {
      return element.regional
        .toLowerCase()
        .includes(regionalFilter.toLowerCase());
    });
    setFilteredData(data);
  }, [regionalFilter]);

  return (
    <section className={styles.reportContainer}>
      <MainTitle noMargin={true}>Relatórios - Ativos Por Regional</MainTitle>
      <div className={styles.filterContainer}>
        <div className={styles.filterContainer__title}>
          <FilterAltOutlined />
          <span>Filtros</span>
        </div>
        <div className={styles.filterContainer__inputs}>
          <TextField
            className={`input ${styles.filterContainer__input}`}
            id="regionalFilter"
            label="Regional"
            variant="outlined"
            select
            onChange={(event) => setRegionalFilter(event.target.value)}
            value={regionalFilter}
          >
            <MenuItem key="clear" value="" style={{ color: "#aaa" }}>
              Limpar Filtro
            </MenuItem>
            {formAndRegionalList.map((item) => (
              <MenuItem key={item.regional} value={item.regional}>
                {item.regional}
              </MenuItem>
            ))}
          </TextField>

          <Button
            type="button"
            variant="outlined"
            onClick={() => {
              setRegionalFilter("");
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
        onClick={() => exportToExcel<Form>(filteredData, "report")}
      >
        Exportar Para Excel
      </Button>
      <div className={styles.tableContainer}>
        <RegionalDataTable data={filteredData}></RegionalDataTable>
      </div>
    </section>
  );
}

export default RegionalResume;
