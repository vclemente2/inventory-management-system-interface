import { Button, MenuItem, TextField } from "@mui/material";
import styles from "./FormTransfer.module.scss";
import MainTitle from "../../components/MainTitle/MainTitle";
import { AddCircleOutline } from "@mui/icons-material";
import MyModal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import formAndRegionalList from "../../data/formAndRegionalList";
import formRegisters from "../../data/formRegisters";
import hubs from "../../data/hubs";

function FormTransfer() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [regional, setRegional] = useState("");
  const [formList, setFormList] = useState<string[]>([]);
  const [form, setForm] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [operationType, setOperationType] = useState<string>("");
  const [isDisassembly, setIsDisassembly] = useState<boolean>(false);

  useEffect(() => {
    if (operationType === "Desmontagem") setIsDisassembly(true);
    else setIsDisassembly(false);
  }, [operationType]);

  useEffect(() => {
    formAndRegionalList.forEach((element, index) => {
      if (element.regional === regional)
        setFormList(formAndRegionalList[index].formas);
    });
  }, [regional]);

  useEffect(() => {
    const formRegister = formRegisters.find((element) => {
      return element.nomenclaturaInterna === form;
    });

    setCurrentLocation(formRegister?.nomeObra as string);
  }, [form]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section>
      <MainTitle>Gerenciamento de Forma</MainTitle>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
              id="regionName"
              label="Regional"
              variant="outlined"
              select
              value={regional}
              onChange={(e) => setRegional(e.target.value)}
            >
              {formAndRegionalList.map((item) => (
                <MenuItem key={item.regional} value={item.regional}>
                  {item.regional}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={`input ${styles.inputContent}`}
              id="formName"
              label="Forma"
              variant="outlined"
              select
              value={form}
              onChange={(e) => setForm(e.target.value)}
            >
              {formList.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className={styles.formContainer__contentBox}>
            <TextField
              className={`input ${styles.inputContent}`}
              id="currentLocation"
              label="Origem"
              variant="outlined"
              value={currentLocation}
            />

            <TextField
              className={`input ${styles.inputContent}`}
              id="tranferType"
              label="Tipo de Operação"
              variant="outlined"
              select
              value={operationType}
              onChange={(e) => setOperationType(e.target.value)}
            >
              <MenuItem key="0007" value="Desmontagem">
                Desmontagem
              </MenuItem>
              <MenuItem key="0008" value="Transferencia">
                Transferencia
              </MenuItem>
            </TextField>

            {isDisassembly ? (
              <TextField
                className={`input ${styles.inputContent}`}
                id="hubFormDestiny"
                label="Hub Destino"
                variant="outlined"
                select
              >
                {hubs.map((hub) => (
                  <MenuItem key={hub} value={hub}>
                    {hub}
                  </MenuItem>
                ))}
              </TextField>
            ) : (
              <TextField
                className={`input ${styles.inputContent}`}
                id="constructionFormDestiny"
                label="Obra Destino"
                variant="outlined"
              />
            )}
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

export default FormTransfer;
