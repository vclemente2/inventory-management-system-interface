import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import MainTitle from "../../components/MainTitle/MainTitle";
import styles from "./InventoryManagement.module.scss";
import { useState } from "react";
import { SyncAlt } from "@mui/icons-material";

function InventoryManagement() {
  const hubs = [
    "Hub-Belo Horizonte",
    "Hub-Rio de Janeiro",
    "Hub-Fortaleza",
    "Hub-Bahia"
  ];
  const items = [
    "FM (ALUM)(60 x 240)",
    "FM (ALUM)(30 x 240)",
    "FM (ALUM)(40 x 240)",
    "FM (ALUM)(225 x 240)",
    "FM (ALUM)(52 x 240)",
    "FM (ALUM)(15 x 240)",
    "FM (ALUM)(43 x 240)",
    "FM (ALUM)(65 x 240)",
    "FM (ALUM)(15 x 240)",
    "FM (ALUM)(20 x 240)",
    "FM (ALUM)(56 x 240)",
    "FM (ALUM)(50 x 240)",
    "FM (PLUS)(15 x 240)",
    "FM (PLUS)(20 x 240)",
    "FM (PLUS)(55 x 240)",
    "FM (PLUS)(27,5 x 240)",
    "FM (PLUS)(50 x 240)",
    "FM (PLUS)(32 x 240)",
    "FM (PLUS)(40 x 240)",
    "FM (PLUS)(45 x 240)",
    "FM (PLUS)(22 x 240)",
    "FM (PLUS)(19 x 240)",
    "FM (PLUS)(60 x 240)",
    "FM (PLUS)(41 x 240)",
    "FM (PLUS)(16 x 240)"
  ];

  const [operationType, setOperationType] = useState("");

  return (
    <section>
      <MainTitle>Gerenciamento de Estoque</MainTitle>
      <div className={styles.formContainer}>
        <form>
          <TextField
            className="input"
            id="hubName"
            label="Hub"
            variant="outlined"
            select
          >
            {hubs.map((hub) => (
              <MenuItem key={hub} value={hub}>
                {hub}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="input"
            id="itemName"
            label="Item"
            variant="outlined"
            select
          >
            {items.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="input"
            id="type"
            label="Tipo de Movimentação"
            variant="outlined"
            select
          >
            <MenuItem
              key="entrada"
              value="entrada"
              onClick={() => setOperationType("entrada")}
            >
              Entrada
            </MenuItem>
            <MenuItem
              key="saida"
              value="saida"
              onClick={() => setOperationType("saida")}
            >
              Saída
            </MenuItem>
          </TextField>

          <TextField
            className="input"
            id="quantity"
            label="Quantidade"
            variant="outlined"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Und</InputAdornment>
              )
            }}
          />

          <TextField
            className="input"
            id="origin-destiny"
            label={operationType === "entrada" ? "Origem" : "Destino"}
            variant="outlined"
          />
          <Button
            className={styles.submitButton}
            size="large"
            type="submit"
            variant="contained"
            endIcon={<SyncAlt style={{ fill: "#fff" }} />}
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Realizar Operação
          </Button>
        </form>
      </div>
    </section>
  );
}

export default InventoryManagement;
