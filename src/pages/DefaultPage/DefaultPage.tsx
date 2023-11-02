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
        <div className={styles.navContainer}>
          <nav>
            <ul className={styles.menuList}>
              <li>
                <img
                  className={styles.menuImg}
                  src="/icons/fi-rs-building.svg/"
                />
                <Link to={"/"} className={styles.menuLink}>
                  Home
                </Link>
              </li>
              <li>
                <img className={styles.add} src="/icons/fi-rs-apps-add.svg" />
                <Link to={"/"} className={styles.menuLink}>
                  Cadastrar Item
                </Link>
              </li>
              <li>
                <img
                  className={styles.add}
                  src="/icons/fi-rs-arrows-repeat.svg"
                />
                <Link to={"/"} className={styles.menuLink}>
                  Entrada / Saída
                </Link>
              </li>
              <li>
                <img className={styles.add} src="/icons/fi-rs-boxes.svg" />
                <Link to={"/"} className={styles.menuLink}>
                  Hubs
                </Link>
              </li>
              <li>
                <img
                  className={styles.add}
                  src="/icons/fi-rs-chat-arrow-grow.svg"
                />
                <Link to={"/"} className={styles.menuLink}>
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
