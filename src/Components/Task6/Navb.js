import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsCart} from "react-icons/bs";
import { SiArlo } from "react-icons/si";
import {useSelector} from 'react-redux'
function Navb() {
  //Now here in selector we will give and subscriber to get what get changes frequently
  //Redux is a subscriber model , we can subscribe any data 

  const items = useSelector(state=>state.cart);
  return (
    <div>
      <Navbar variant="light" >
        <Container style={{ marginTop: "20px" }}>
        <Nav.Link
          as={Link}
          to='/'>
           <h1>
           {<SiArlo></SiArlo>}
            </h1> 
          </Nav.Link>

          <Nav className="navbar-nav justify-content-between w-50">
            <Nav.Link as={Link} to="/" style={{ color: "black" ,paddingLeft:"70px" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store" style={{ color: "black" }}>
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ color: "black" }}>
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "black" }}>
              Contact
            </Nav.Link>
            
          </Nav>
        <Nav.Link as={Link} to="/cart" style={{ color: "black" }}>
          
           <BsCart  style={{color:"#9999ff", fontSize:"30px"}}/>
           
          <span style={{color:"#9999ff", fontSize:"20px"}} >{items.length}</span>
          
        </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;
