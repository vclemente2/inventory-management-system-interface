import MainTitle from "../../../components/MainTitle/MainTitle.tsx";
import styles from "./RegionalResume.module.scss";
import { useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { FilterAltOutlined } from "@mui/icons-material";
import RegionalDataTable from "../../../components/RegionalDataTable/RegionalDataTable.tsx";
import formRegisters from "../../../data/formRegisters.ts";
import Form from "../../../types/Form.ts";
import exportToExcel from "../../../utils/exportToExcel.ts";
import FormDataTable from "../../../components/FormDataTable/FormDataTable.tsx";

function RegionalResume() {
  // const [filteredData, setFilteredData] = useState(formRegisters);
  const [tableType, setTableType] = useState("Obra");

  // useEffect(() => {
  //   if (tableType === "Obra") setTable(<FormDataTable data={formRegisters} />);
  //   else setTable(<RegionalDataTable data={formRegisters} />);
  // }, [tableType]);

  return (
    <section className={styles.reportContainer}>
      <MainTitle noMargin={true}>Relatórios - Ativos Por Regional</MainTitle>
      <div className={styles.filterContainer}>
        <div className={styles.filterContainer__title}>
          <FilterAltOutlined />
          <span>Abertura Relatório</span>
        </div>
        <div className={styles.filterContainer__inputs}>
          <TextField
            className={`input ${styles.filterContainer__input}`}
            id="regionalFilter"
            label="Visão"
            variant="outlined"
            select
            onChange={(event) => setTableType(event.target.value)}
            value={tableType}
          >
            {/* <MenuItem key="clear" value="" style={{ color: "#aaa" }}>
              Limpar Filtro
            </MenuItem> */}
            <MenuItem key={"regional"} value={"Regional"}>
              {"Regional"}
            </MenuItem>
            <MenuItem key={"obra"} value={"Obra"}>
              {"Obra"}
            </MenuItem>
          </TextField>

          {/* <Button
            type="button"
            variant="outlined"
            onClick={() => {
              setTableType("");
            }}
          >
            <FilterAltOffOutlined
              style={{ fill: "#1978D2" }}
            ></FilterAltOffOutlined>
            Limpar Filtro
          </Button> */}
        </div>
      </div>
      <Button
        className={styles.exportButton}
        variant="outlined"
        size="small"
        onClick={() => exportToExcel<Form>(formRegisters, "report")}
      >
        Exportar Para Excel
      </Button>
      <div className={styles.tableContainer}>
        {/* <FormDataTable data={formRegisters} /> */}
        {tableType === "Obra" ? (
          <FormDataTable data={formRegisters} />
        ) : (
          <RegionalDataTable data={formRegisters} />
        )}
      </div>
    </section>
  );
}

export default RegionalResume;
