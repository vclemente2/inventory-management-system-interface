import { Button, MenuItem, TextField } from "@mui/material";
import MainTitle from "../../components/MainTitle/MainTitle";
import styles from "./NewHub.module.scss";
import { AddCircleOutline } from "@mui/icons-material";
import brazilStates from "../../data/brazilStates";
import MyModal from "../../components/Modal/Modal";
import { useState } from "react";

function NewHub() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section>
      <MainTitle>Cadastro de Hubs</MainTitle>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
              id="inputHubName"
              label="Nome da Empresa (Hub)"
              variant="outlined"
            />
            <TextField
              className={`input ${styles.inputContent}`}
              id="inputHubCnpj"
              label="CNPJ"
              variant="outlined"
            />
          </div>
          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
              id="inputHubCep"
              label="CEP"
              variant="outlined"
            />
            <TextField
              className={`input ${styles.inputContent}`}
              id="inputHubUf"
              label="UF"
              variant="outlined"
              select
            >
              {brazilStates.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
              id="inputHubCity"
              label="Município"
              variant="outlined"
            />
            <TextField
              className={`input ${styles.inputContent}`}
              id="inputHubDistrict"
              label="Bairro"
              variant="outlined"
            />
          </div>
          <Button
            className={styles.submitButton}
            size="large"
            type="submit"
            variant="contained"
            endIcon={<AddCircleOutline style={{ fill: "#fff" }} />}
            onClick={(event) => {
              event.preventDefault();
              openModal();
            }}
          >
            Cadastrar Hub
          </Button>
        </form>
      </div>
      <MyModal isOpen={isModalOpen} closeModal={closeModal}>
        Novo Hub Cadastrado com Sucesso
      </MyModal>
    </section>
  );
}

export default NewHub;
