import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import styles from "./NewItem.module.scss";
import MainTitle from "../../components/MainTitle/MainTitle";
import { AddCircleOutline } from "@mui/icons-material";
import categories from "../../data/categories";
import MyModal from "../../components/Modal/Modal";
import { useState } from "react";

function NewItem() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section>
      <MainTitle>Cadastro de Peças</MainTitle>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
              id="itemName"
              label="Nomenclatura Interna"
              variant="outlined"
            />
            <TextField
              className={`input ${styles.inputContent}`}
              id="itemCode"
              label="Nomenclatura Fornecedor"
              variant="outlined"
            />

            <TextField
              className={`input ${styles.inputContent}`}
              id="itemCategory"
              label="Categoria"
              variant="outlined"
              select
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
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
              id="itemLength"
              label="Comprimento da Peça"
              variant="outlined"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">cm</InputAdornment>
                )
              }}
            />
            <TextField
              className={`input ${styles.inputContent}`}
              id="itemWidth"
              label="Largura da Peça"
              variant="outlined"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">cm</InputAdornment>
                )
              }}
            />
            <TextField
              className={`input ${styles.inputContent}`}
              id="itemThickness"
              label="Espessura do Peça"
              variant="outlined"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">cm</InputAdornment>
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
            Cadastrar Item
          </Button>
        </form>
      </div>
      <MyModal isOpen={isModalOpen} closeModal={closeModal}>
        Item Cadastrado com Sucesso
      </MyModal>
    </section>
  );
}

export default NewItem;
