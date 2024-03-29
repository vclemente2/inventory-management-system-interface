import { Link } from "react-router-dom";
import HomeCard from "../../components/HomeCard/HomeCard";
import MainTitle from "../../components/MainTitle/MainTitle";
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <MainTitle>Bem Vindo ao Sistema de Controle de Estoque</MainTitle>
      <ul className={styles.cardList}>
        <li className={styles.cardList__item}>
          <Link to="/profile">
            <HomeCard
              image="/icons/fi-rs-user.svg"
              title="Perfil"
              color="#20ca98"
            />
          </Link>
        </li>
        <li className={styles.cardList__item}>
          <Link to="/new-item">
            <HomeCard
              image="/icons/fi-rs-apps-add.svg"
              title="Cadastrar Peça"
              color="#4d4dc8"
            />
          </Link>
        </li>
        <li className={styles.cardList__item}>
          <Link to="/new-hub">
            <HomeCard
              image="/icons/fi-rs-boxes.svg"
              title="Novo Hub"
              color="#3fa33d"
            />
          </Link>
        </li>
        <li className={styles.cardList__item}>
          <Link to="/inventory-management">
            <HomeCard
              image="/icons/fi-rs-arrows-repeat.svg"
              title="Gerenciar Estoque"
              color="#e94b35"
            />
          </Link>
        </li>
        <li className={styles.cardList__item}>
          <Link to="/reports">
            <HomeCard
              image="/icons/fi-rs-chat-arrow-grow.svg"
              title="Relatório Estoque"
              color="#7a7a7a"
            />
          </Link>
        </li>

        <li className={styles.cardList__item}>
          <Link to="/new-form">
            <HomeCard
              image="/icons/fi-rs-apps-add.svg"
              title="Cadastrar Forma"
              color="yellow"
            />
          </Link>
        </li>
        <li className={styles.cardList__item}>
          <Link to="/form-status">
            <HomeCard
              image="/icons/fi-rs-settings-sliders.svg"
              title="Atualizar Status Forma"
              color="#4d4dc8"
            />
          </Link>
        </li>
        <li className={styles.cardList__item}>
          <Link to="/form-transfer-management">
            <HomeCard
              image="/icons/fi-rs-arrows-repeat.svg"
              title="Gerenciar Formas"
              color="#20ca98"
            />
          </Link>
        </li>
        <li className={styles.cardList__item}>
          <Link to="/regional-resume">
            <HomeCard
              image="/icons/fi-rs-chat-arrow-grow.svg"
              title="Relatório Forma"
              color="#e94b35"
            />
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
