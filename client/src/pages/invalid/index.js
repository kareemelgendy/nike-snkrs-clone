import styles from "./invalid.module.scss";
import Button from "components/button";

const Invalid = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>The page does not exist.</p>
      <Button text="Go back home" />
    </div>
  );
};

export default Invalid;
