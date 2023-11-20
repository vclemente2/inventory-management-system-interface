import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import styles from "./NewForm.module.scss";
import MainTitle from "../../components/MainTitle/MainTitle";
import { AddCircleOutline } from "@mui/icons-material";
import MyModal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";

function NewForm() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [formArea, setFormArea] = useState(0);
  const [formPrice, setFormPrice] = useState("");

  const currencyFormat = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  useEffect(() => {
    setFormPrice(currencyFormat.format(formArea * 1458.0));
  }, [formArea]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section>
      <MainTitle>Cadastro de Forma</MainTitle>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
              id="formName"
              label="Nomenclatura Interna"
              variant="outlined"
            />
            <TextField
              className={`input ${styles.inputContent}`}
              id="formArea"
              label="Área Total"
              variant="outlined"
              type="number"
              value={formArea}
              onChange={(e) => {
                setFormArea(Number(e.target.value));
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">m²</InputAdornment>
                )
              }}
            />
            <TextField
              className={`input ${styles.inputContent}`}
              id="itemLength"
              label="Custo da Forma"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                )
              }}
              value={formPrice}
              onChange={(e) => setFormPrice(e.target.value)}
            />
          </div>

          {/* <TextField
            className={`input ${styles.inputContent}`}
            id="itemDescription"
            label="Descrição"
            variant="outlined"
            multiline
            minRows={2}
          /> */}

          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
              id="formSecuritySystem"
              label="Sistema de Segurança"
              variant="outlined"
              select
            >
              <MenuItem key="00001" value={"Sistema de Segurança - Tipo I"}>
                Sistema de Segurança - Tipo I
              </MenuItem>
            </TextField>
            <TextField
              className={`input ${styles.inputContent}`}
              id="securitySystemPrice"
              label="Custo do Sistema de Segurança"
              variant="outlined"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                )
              }}
            />
          </div>

          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
              id="formAccessories"
              label="Kit Acessórios"
              variant="outlined"
              select
            >
              <MenuItem key="00002" value={"Kit acessórios - Tipo I"}>
                Acessórios - Tipo I
              </MenuItem>
            </TextField>
            <TextField
              className={`input ${styles.inputContent}`}
              id="AccessoriesPrice"
              label="Custo Kit Acessórios"
              variant="outlined"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                )
              }}
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
            Cadastrar Forma
          </Button>
        </form>
      </div>
      <MyModal isOpen={isModalOpen} closeModal={closeModal}>
        Item Cadastrado com Sucesso
      </MyModal>
    </section>
  );
}

export default NewForm;
