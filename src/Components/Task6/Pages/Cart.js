import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { Button,Modal } from "react-bootstrap";
import {useSelector} from 'react-redux'


function Cart(props) {
  const [show, showAlert] = useState(false);
  const product = useSelector(state=>state.cart);
  const clean=props.cleanCartData

  return (
    <div>
      {product.map((data) => (
        <div className={styles.container}>
          <div className={styles.item1}>
            <img src={data.image} alt="productimage" width="171px" height="139px" ></img>
          </div>
          <div className={styles.item2}>
            <h3>{data.title}</h3>
          </div>
          <div className={styles.item3}>
            <h1>${data.price}</h1>
          </div>
        </div>
      ))}
      <div>
        <h4 className={styles.amount}>
          Total amount:  $
          {product
            .map((item) => item.price)
            .reduce((total, value) => total + value, 0)}
          
        </h4>
      </div>
      <div className={styles.checkout}>
        
        <Button onClick={() => showAlert(true)}   style={{ width: "300px",  backgroundColor:"#6666ff" }}
        
        >Proceed</Button>
      <Modal
        size="sm"
        show={show}
        onHide={() => showAlert(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className={styles.dashboardbtn}>
          <Modal.Title id="example-modal-sizes-title-lg">
            Total amount:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.dashboardbtn}> 
          <h1>

          $
          {product
          .map((item) => item.price)
            .reduce((total, value) => total + value, 0)}
            
          </h1>
          <Button onClick={()=>{clean.cleanCartData([])}} as={Link} to="/cart">
            Go Back to DashBoard
          </Button>
        </Modal.Body>
      </Modal>
  
      </div>
    </div>
  );
}

export default Cart;

