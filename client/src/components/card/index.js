import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import CardPlaceholder from "../card-placeholder";
import styles from "./card.module.scss";

const Card = ({ item }) => {
  const [loading, setLoading] = useState(true);
  const sneaker = item.type === "Sneaker";

  const CardContent = () => (
    <div className={styles.container}>
      {loading && <CardPlaceholder />}
      <img
        src={item.images[0]}
        alt={`${item.name} ${item.model}`}
        onLoad={() => setLoading(false)}
      />
      {!loading && (
        <div className={styles.details}>
          {sneaker && (
            <div className={styles.text}>
              <h6>{item.model}</h6>
              <h3>{item.name}</h3>
            </div>
          )}
          <div className={sneaker ? styles.cta : undefined}>
            <Button type={item.type} status={item.availability} />
          </div>
        </div>
      )}
    </div>
  );

  return item.type === "Sneaker" ? (
    <Link to={`/product/${item._id}`}>
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
};

export default Card;
