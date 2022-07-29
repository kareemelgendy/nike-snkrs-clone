import styles from "./placeholder.module.scss";

const CardPlaceholder = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.image} ${styles.pulse}`} />
      <div className={`${styles.model} ${styles.pulse}`} />
      <div className={`${styles.name} ${styles.pulse}`} />
    </div>
  );
};

export default CardPlaceholder;
