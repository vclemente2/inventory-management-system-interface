import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import secondLogo from "../../assets/images/logo-only.png";
import styles from "./DefaultPage.module.scss";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

interface DefaultPageProps {
  children?: JSX.Element;
}

interface SubmenuStatus {
  inventory: boolean;
  form: boolean;
  reports: boolean;
}

interface SubmenuStatus {
  [key: string]: boolean;
}

const DefaultPage = ({ children }: DefaultPageProps) => {
  const [submenuActivated, setSubmenuActivated] = useState<SubmenuStatus>({
    inventory: false,
    form: false,
    reports: false
  });

  function changeSubmenu(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void {
    const newMenuStatus: SubmenuStatus = {} as SubmenuStatus;

    const targetElement = event.target as HTMLElement;
    for (const key in submenuActivated) {
      if (key === event.currentTarget.id) {
        if (targetElement.classList.contains("itemSubmenu")) {
          newMenuStatus[key] = true;
        } else {
          newMenuStatus[key] = !submenuActivated[key];
        }
      } else {
        newMenuStatus[key] = false;
      }
    }
    setSubmenuActivated(newMenuStatus);
  }

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

              <li
                className={styles.submenu}
                id="inventory"
                onClick={(event) => {
                  changeSubmenu(event);
                }}
              >
                <span className={styles.menuLink}>
                  <img className={styles.add} src="/icons/fi-rs-apps-add.svg" />
                  <span className={styles.menuLink__text}>Gestão de Peças</span>
                  {submenuActivated.inventory ? (
                    <ArrowDropUpIcon
                      className={styles.menuLink__arrow}
                      sx={{ fill: "#fff" }}
                    />
                  ) : (
                    <ArrowDropDownIcon
                      className={styles.menuLink__arrow}
                      sx={{ fill: "#fff" }}
                    />
                  )}
                </span>

                <ul
                  className={`${styles.submenu__list} ${
                    submenuActivated.inventory ? styles.active : ""
                  }`}
                >
                  <li className="itemSubmenu">
                    <Link
                      to={"/new-item"}
                      className={`${styles.menuLink} ${"itemSubmenu"}`}
                    >
                      <img
                        className={styles.add}
                        src="/icons/fi-rs-apps-add.svg"
                      />
                      Cadastrar Item
                    </Link>
                  </li>
                  <li className="itemSubmenu">
                    <Link
                      to={"/inventory-management"}
                      className={`${styles.menuLink} ${"itemSubmenu"}`}
                    >
                      <img
                        className={styles.add}
                        src="/icons/fi-rs-arrows-repeat.svg"
                      />
                      Entrada / Saída
                    </Link>
                  </li>
                  <li className="itemSubmenu">
                    <Link
                      to={"/new-hub"}
                      className={`${styles.menuLink} ${"itemSubmenu"}`}
                    >
                      <img
                        className={styles.add}
                        src="/icons/fi-rs-boxes.svg"
                      />
                      Cadastrar Hub
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={styles.submenu}
                id="form"
                onClick={(event) => {
                  changeSubmenu(event);
                }}
              >
                <span className={styles.menuLink}>
                  <img className={styles.add} src="/icons/fi-rs-boxes.svg" />
                  <span className={styles.menuLink__text}>
                    Gestão de Formas
                  </span>
                  {submenuActivated.form ? (
                    <ArrowDropUpIcon
                      className={styles.menuLink__arrow}
                      sx={{ fill: "#fff" }}
                    />
                  ) : (
                    <ArrowDropDownIcon
                      className={styles.menuLink__arrow}
                      sx={{ fill: "#fff" }}
                    />
                  )}
                </span>

                <ul
                  className={`${styles.submenu__list} ${
                    submenuActivated.form ? styles.active : ""
                  }`}
                >
                  <li>
                    <Link
                      to="/"
                      className={`${styles.menuLink} ${"itemSubmenu"}`}
                    ></Link>
                  </li>
                </ul>
              </li>

              <li
                className={styles.submenu}
                id="reports"
                onClick={(event) => {
                  changeSubmenu(event);
                }}
              >
                <span className={styles.menuLink}>
                  <img
                    className={styles.add}
                    src="/icons/fi-rs-chat-arrow-grow.svg"
                  />
                  <span className={styles.menuLink__text}>Relatórios</span>
                  {submenuActivated.reports ? (
                    <ArrowDropUpIcon
                      className={styles.menuLink__arrow}
                      sx={{ fill: "#fff" }}
                    />
                  ) : (
                    <ArrowDropDownIcon
                      className={styles.menuLink__arrow}
                      sx={{ fill: "#fff" }}
                    />
                  )}
                </span>
                <ul
                  className={`${styles.submenu__list} ${
                    submenuActivated.reports ? styles.active : ""
                  }`}
                >
                  <li>
                    <Link
                      to={"/reports"}
                      className={`${styles.menuLink} ${"itemSubmenu"}`}
                    >
                      Estoque de Peças
                    </Link>
                  </li>
                </ul>
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
