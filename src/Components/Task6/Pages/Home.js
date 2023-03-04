import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "./Home.module.css";
import fashiongirl from'../Assets/fashiongirl.jpg'
import HomeCarousel from "../HomeCarousel";

function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <div className={styles.Jumbotron}>
        <div className={styles.description}  >
          <p className={styles.name}>Inspired By Ecommerce.</p>
          <br />
          <h1 data-aos="fade-up"
     data-aos-duration="3000">
          Imagine the Fashion  <span style={{ color: "#6666ff" }}>Adventures
          </span>
          </h1>
          <br />
          <p className={styles.intro}>
            
          </p>
          <div className={styles.social}>
            <a
              href="www.google.com"
              className="icons"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BsInstagram   data-aos="fade-up"
     data-aos-duration="1000"/>
            </a>{" "}
            <a
              href="www.google.com"
              className="icons"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BsGithub  data-aos="fade-up"
     data-aos-duration="1000"/>
            </a>{" "}
            <a
              href="www.google.com"
              className="icons"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BsTwitter  data-aos="fade-up"
     data-aos-duration="1000"/>
            </a>{" "}
            <a
              href="www.google.com"
              className="icons"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BsLinkedin data-aos="fade-up"
     data-aos-duration="1000" />
            </a>
          </div>
        </div>
        <div  className={styles.image}>
        
          <HomeCarousel/>
          
  
 
</div>
        </div>
      </div>

    
  );
}

export default Home;
