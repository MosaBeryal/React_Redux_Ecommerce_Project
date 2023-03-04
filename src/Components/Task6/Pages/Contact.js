import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import styles from "./Contact.module.css";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";

function Contact() {
  return (
    <div>
    <div className={styles.title}>
    <h1>
      Send us some feedback
    </h1>

    </div>
      <div className={styles.form}>
        <div className={styles.item1}>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className={styles.input}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label></Form.Label>
              <Form.Control
                type="password"
                placeholder="Phone"
                className={styles.input}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupMessage">
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="message"
                as="textarea"
                rows={3}
                className={styles.input}
              />
            </Form.Group>
            <Button
              type="submit"
              style={{ width: "100%", backgroundColor: "#6666ff" }}
            >
              Send Message
            </Button>
          </Form>
        </div>

        <div className={styles.item2}>
          <div className={styles.contactDetail}>
            <h5>
              <HiLocationMarker color="#6666ff" />
            </h5>
            <h5>
              <BiPhoneCall color="#6666ff" />
            </h5>

            <h5>
              <HiOutlineMail color="#6666ff" />
            </h5>
          </div>

          <div className={styles.contactDetail}>
            <h5>Address</h5>

            <h5>Phone</h5>
            <h5>E-Mail</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
