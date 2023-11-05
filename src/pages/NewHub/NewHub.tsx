import { Button, MenuItem, TextField } from "@mui/material";
import MainTitle from "../../components/MainTitle/MainTitle";
import styles from "./NewHub.module.scss";
import { AddCircleOutline } from "@mui/icons-material";

function NewHub() {
  const brazilStates = [
    "AC", // Acre
    "AL", // Alagoas
    "AP", // Amapá
    "AM", // Amazonas
    "BA", // Bahia
    "CE", // Ceará
    "DF", // Distrito Federal
    "ES", // Espírito Santo
    "GO", // Goiás
    "MA", // Maranhão
    "MT", // Mato Grosso
    "MS", // Mato Grosso do Sul
    "MG", // Minas Gerais
    "PA", // Pará
    "PB", // Paraíba
    "PR", // Paraná
    "PE", // Pernambuco
    "PI", // Piauí
    "RJ", // Rio de Janeiro
    "RN", // Rio Grande do Norte
    "RS", // Rio Grande do Sul
    "RO", // Rondônia
    "RR", // Roraima
    "SC", // Santa Catarina
    "SP", // São Paulo
    "SE", // Sergipe
    "TO" // Tocantins
  ];

  return (
    <>
      <MainTitle>Cadastro de Hubs</MainTitle>
      <div className={styles.formContainer}>
        <form>
          <TextField
            className="input"
            id="inputHubName"
            label="Nome da Empresa (Hub)"
            variant="outlined"
          />
          <TextField
            className="input"
            id="inputHubCnpj"
            label="CNPJ"
            variant="outlined"
          />
          <TextField
            className="input"
            id="inputHubCep"
            label="CEP"
            variant="outlined"
          />
          <TextField
            className="input"
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
          <TextField
            className="input"
            id="inputHubCity"
            label="Município"
            variant="outlined"
          />
          <TextField
            className="input"
            id="inputHubDistrict"
            label="Bairro"
            variant="outlined"
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
            Cadastrar Hub
          </Button>
        </form>
      </div>
    </>
  );
}

export default NewHub;
