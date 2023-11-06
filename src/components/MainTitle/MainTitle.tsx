import styles from "./MainTitle.module.scss";

interface Props {
  children: string;
  noMargin?: boolean;
}

const MainTitle = ({ children, noMargin = false }: Props) => {
  return (
    <div
      className={
        noMargin
          ? `${styles.mainTitleContainer} ${styles.noMargin}`
          : `${styles.mainTitleContainer}`
      }
    >
      <h2>{children}</h2>
    </div>
  );
};

export default MainTitle;
