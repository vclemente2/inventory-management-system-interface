import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import secondLogo from "../../assets/images/logo-only.png";
import styles from "./DefaultPage.module.scss";

interface DefaultPageProps {
  children?: JSX.Element;
}

const DefaultPage = ({ children }: DefaultPageProps) => {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.imageContainer}>
          <img src={logo} />
        </span>
        <h1>Gestão de Estoque | Hubs</h1>
        <span className={styles.userContainer}>
          <Link to={"/profile"} className={styles.userLink}>
            <img src="/icons/fi-rs-user.svg" className={styles.userIcon} />
          </Link>
        </span>
        <div className={styles.navContainer}>
          <nav>
            <ul className={styles.menuList}>
              <li>
                <Link to={"/"} className={styles.menuLink}>
                  <img
                    className={styles.menuImg}
                    src="/icons/fi-rs-building.svg/"
                  />
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/new-item"} className={styles.menuLink}>
                  <img className={styles.add} src="/icons/fi-rs-apps-add.svg" />
                  Cadastrar Item
                </Link>
              </li>
              <li>
                <Link to={"/inventory-management"} className={styles.menuLink}>
                  <img
                    className={styles.add}
                    src="/icons/fi-rs-arrows-repeat.svg"
                  />
                  Entrada / Saída
                </Link>
              </li>
              <li>
                <Link to={"/new-hub"} className={styles.menuLink}>
                  <img className={styles.add} src="/icons/fi-rs-boxes.svg" />
                  Cadastrar Hub
                </Link>
              </li>
              <li>
                <Link to={"/reports"} className={styles.menuLink}>
                  <img
                    className={styles.add}
                    src="/icons/fi-rs-chat-arrow-grow.svg"
                  />
                  Relatórios
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
        {children}
      </main>
      <footer className={styles.footer}>
        <small>
          © 2023 MJL Consultoria e Engenharia. Todos os direitos reservados.
        </small>
        <img className={styles.logo} src={secondLogo} />
      </footer>
    </>
  );
};

export default DefaultPage;
