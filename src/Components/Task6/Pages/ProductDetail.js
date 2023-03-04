import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = (props) => {
  const { id } = useParams();

  const [detail, setProductDetail] = useState([]);
  console.log(detail);

  useEffect(() => {
    const fetchProductData = async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setProductDetail([data]);
      
    };
    fetchProductData();
  }, []);

  return (
    <div>
    {detail.map((products)=>(
    
      <div className={styles.container}>
        <div className={styles.item1}>
          <h5 className={styles.category}>{products.category}</h5>

          <h4 className={styles.title}>{products.title}</h4>

          <p className={styles.description}>{products.description}</p>

          <div className={styles.display}>
            <div className={styles.displayprice}>
              <h5 className={styles.price}>
                Rs:
                {products.price}
              </h5>
            </div>

            <div className={styles.displayquantity}>
              <p> 
          Qty{
            products.rating.count
          }
              </p>
            </div>
          </div>
          <div>
            <h3>rating{products.rating.rate}</h3>
          </div>
          <Button
            style={{
              backgroundColor: "#6666ff",
              fontWeight: "700",
              width: "300px",
            }}
            size="lg"
            onClick={() => {
              props.addToCart(products);
            }}
          >
            Add to Cart
          </Button>
        </div>

        <div className={styles.item2}>
          <img
            src={products.image}
            width="300px"
            height="300px"
            alt="product"
          ></img>
        </div>
      </div>
    ))}
    </div>

  );
};

export default ProductDetail;
