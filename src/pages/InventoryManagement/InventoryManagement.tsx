import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import MainTitle from "../../components/MainTitle/MainTitle";
import styles from "./InventoryManagement.module.scss";
import { useState } from "react";
import { SyncAlt } from "@mui/icons-material";
import hubs from "../../data/hubs";
import items from "../../data/items";
import MyModal from "../../components/Modal/Modal";

function InventoryManagement() {
  const [operationType, setOperationType] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section>
      <MainTitle>Gerenciamento de Estoque</MainTitle>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
              id="type"
              label="Tipo de Operação"
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
              className={`input ${styles.inputContent}`}
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
              className={`input ${styles.inputContent}`}
              id="origin-destiny"
              label={operationType === "entrada" ? "Origem" : "Destino"}
              variant="outlined"
            />
          </div>

          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
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
              className={`input ${styles.inputContent}`}
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
          </div>
          <Button
            className={styles.submitButton}
            size="large"
            type="submit"
            variant="contained"
            endIcon={<SyncAlt style={{ fill: "#fff" }} />}
            onClick={(event) => {
              event.preventDefault();
              openModal();
            }}
          >
            Realizar Operação
          </Button>
        </form>
      </div>
      <MyModal isOpen={isModalOpen} closeModal={closeModal}>
        Operação Realizada com Sucesso
      </MyModal>
    </section>
  );
}

export default InventoryManagement;
