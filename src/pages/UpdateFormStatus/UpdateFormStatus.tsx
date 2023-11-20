import { Button, MenuItem, TextField } from "@mui/material";
import styles from "./UpdateFormStatus.module.scss";
import MainTitle from "../../components/MainTitle/MainTitle";
import { AddCircleOutline } from "@mui/icons-material";
import MyModal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import formAndRegionalList from "../../data/formAndRegionalList";
import formRegisters from "../../data/formRegisters";

function UpdateFormStatus() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [regional, setRegional] = useState("");
  const [formList, setFormList] = useState<string[]>([]);
  const [form, setForm] = useState<string>("");
  const [currentStatus, setCurrentStatus] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<string>("");

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

    setCurrentStatus(formRegister?.status as string);
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
      <MainTitle>Atualizar Status de Forma</MainTitle>
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
              label="Localização Atual"
              variant="outlined"
              value={currentLocation}
            />
            <TextField
              className={`input ${styles.inputContent}`}
              id="currentFormStatus"
              label="Status Atual"
              variant="outlined"
              value={currentStatus}
            />

            <TextField
              className={`input ${styles.inputContent}`}
              id="newFormStatus"
              label="Novo Status"
              variant="outlined"
              select
            >
              <MenuItem key="0003" value="ANDAMENTO">
                ANDAMENTO
              </MenuItem>
              <MenuItem key="0004" value="ARMAZENADA EM OBRA">
                ARMAZENADA EM OBRA
              </MenuItem>
              <MenuItem key="0005" value="ARMAZENADA EM HUB">
                ARMAZENADA EM HUB
              </MenuItem>
              <MenuItem key="0006" value="DESMONTADA">
                DESMONTADA
              </MenuItem>
            </TextField>
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
            Atualizar Status
          </Button>
        </form>
      </div>
      <MyModal isOpen={isModalOpen} closeModal={closeModal}>
        Status Atualizado com Sucesso
      </MyModal>
    </section>
  );
}

export default UpdateFormStatus;
