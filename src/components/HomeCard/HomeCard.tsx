import styles from "./HomeCard.module.scss";

interface Props {
  title: string;
  image: string;
  color: string;
}

const HomeCard = (props: Props) => {
  return (
    <div className={styles.card}>
      <span
        className={styles.imgContainer}
        style={{ backgroundColor: props.color }}
      >
        <img src={props.image} className={styles.card__img} />
      </span>
      <h3 className={styles.card__title}>{props.title}</h3>
    </div>
  );
};

export default HomeCard;
