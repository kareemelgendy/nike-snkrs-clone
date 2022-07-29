import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "components/preloader";
import Card from "components/card";
import styles from "./feed.module.scss";

const Catalog = () => {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = location.search.split("=")[1];

  useEffect(() => {
    const fetchData = () => {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/snkrs`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setCards(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((card) => card.availability === query);
    setCards(filtered.length ? filtered : data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return loading ? (
    <Preloader />
  ) : (
    <main>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <Card key={`${card.name} ${card.model} ${index}`} item={card} />
        ))}
      </div>
    </main>
  );
};

export default Catalog;
