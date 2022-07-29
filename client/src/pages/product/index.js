import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "components/button";
import Preloader from "components/preloader";
import styles from "./product.module.scss";

const Product = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = () => {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/snkrs/product/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data[0]);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [params]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.mainGallery}>
              {product.images.slice(0, 6).map((image, index) => (
                <img
                  key={`${product.model} ${index}`}
                  src={image}
                  alt={`${product.model} ${index}`}
                />
              ))}
            </div>
            <div>
              <div className={styles.description}>
                <h3>{product.model}</h3>
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
                <Button status={product.availability} />
              </div>
            </div>
          </div>
          <div className={styles.wideGallery}>
            {product.images.slice(6, 10).map((image, index) => (
              <img
                key={`${product.model} img${index}`}
                src={image}
                alt={`${product.model} img${index}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
