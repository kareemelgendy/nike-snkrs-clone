import { useState } from "react";
import { Link } from "react-router-dom";
import { formatAvailability } from "../../util";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [active, setActive] = useState("Feed");
  const pages = ["Feed", "In Stock", "Upcoming"];

  const getPath = (page) =>
    page === "Feed" ? "/launch" : `/launch?s=${formatAvailability(page)}`;

  return (
    <nav>
      <div className={styles.wrapper}>
        <header className={styles.topNav}>
          <div className={styles.return}>
            <img src="/assets/icons/arrow.svg" alt="left arrow" />
            <span>Visit Nike.com</span>
          </div>
          <ul className={styles.rightNav}>
            <li>Join / Log In</li>
            <li>Help</li>
            <li>
              <img src="/assets/icons/cart.svg" alt="cart" />
            </li>
            <li>
              <img src="/assets/icons/location.svg" alt="cart" />
              <span>United States</span>
            </li>
          </ul>
        </header>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link to="/launch">
            <img src="/assets/images/logo.svg" alt="logo" />
          </Link>
          <ul className={styles.pages}>
            {pages.map((page) => (
              <li
                key={page}
                className={active === page ? styles.page__active : styles.page}
                onClick={() => setActive(page)}
              >
                <Link to={getPath(page)}>{page}</Link>
              </li>
            ))}
          </ul>
          <div>
            <img src="/assets/icons/grid.svg" alt="grid" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
