import styles from "./MainTitle.module.scss";

interface Props {
  children: string;
}

const MainTitle = ({ children }: Props) => {
  return (
    <div className={styles.mainTitleContainer}>
      <h2>{children}</h2>
    </div>
  );
};

export default MainTitle;
