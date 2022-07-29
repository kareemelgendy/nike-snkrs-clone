import styles from "./button.module.scss";

const Button = ({ type, status }) => {
  const getText = (status) => {
    switch (status) {
      case "in-stock":
        return "Purchase";
      case "upcoming":
        return "Notify Me";
      case "sold-out":
        return "Sold Out";
      default:
        return "Unavailable";
    }
  };

  const text = type === "Post" ? "Learn more" : getText(status);
  const unavailable = text === "Sold Out";

  return (
    <button
      type="button"
      className={unavailable ? styles.button__unavailable : styles.button}
    >
      {text}
    </button>
  );
};

export default Button;
