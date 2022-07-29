import styles from "./footer.module.scss";

const Footer = () => {
  // const socials = ["twitter", "facebook", "youtube", "instagram"];
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
        {/* <ul className={styles.socials}>
        {socials.map((social) => (
          <li key={social}>
          <img src={`/assets/icons/${social}.svg`} alt={social} />
          </li>
          ))}
        </ul> */}
        <div className={styles.credits}>
          <a
            href="https://linkedin.com/in/elgendyk"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/assets/icons/user.svg" alt="user" />
            <span>Developed by Kareem E.</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
