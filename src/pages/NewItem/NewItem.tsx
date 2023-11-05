import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import styles from "./NewItem.module.scss";
import MainTitle from "../../components/MainTitle/MainTitle";
import { AddCircleOutline } from "@mui/icons-material";

function NewItem() {
  const categories = ["Parede", "Laje", "Canto", "Ciclo"];

  return (
    <>
      <MainTitle>Cadastro de Peças</MainTitle>
      <div className={styles.formContainer}>
        <form>
          <TextField
            className="input"
            id="itemName"
            label="Nome do Item"
            variant="outlined"
          />
          <TextField
            className="input"
            id="itemDescription"
            label="Descrição"
            variant="outlined"
            multiline
            minRows={2}
          />
          <TextField
            className="input"
            id="itemCode"
            label="Código do Item"
            variant="outlined"
          />

          <TextField
            className="input"
            id="itemCategory"
            label="Categoria"
            variant="outlined"
            select
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className="input"
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
            className="input"
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
            className="input"
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

          <Button
            className={styles.submitButton}
            size="large"
            type="submit"
            variant="contained"
            endIcon={<AddCircleOutline style={{ fill: "#fff" }} />}
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Cadastrar Item
          </Button>
        </form>
      </div>
    </>
  );
}

export default NewItem;
