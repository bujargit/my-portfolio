import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { contactImg, meta } from "../data/content";
// import { contactConfig } from "../data/content";

export default function ContactUs() {
  const history = useHistory();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sn925gq",
        "template_ygnp43a",
        form.current,
        "user_zMqL0aru9hCKEIoiamDi2"
      )
      .then(() => {
        history.replace("/");
      });

    // e.target.reset();
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3">
          <Col lg="6">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col lg="6">
            <Form onSubmit={sendEmail} ref={form}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Subject</Form.Label>
                <Form.Control
                  type="subject"
                  name="subject"
                  placeholder="Enter subject"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Send your message</Form.Label>
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  required
                />
              </Form.Group>
              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
              <Button
                id="button_h"
                className="ac_btn btn bt-primary"
                type="submit"
                variant="outline-dark"
              >
                Contact Me
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </Button>
            </Form>
          </Col>
          <Col lg="6">
            <img className="w-100" src={contactImg.image} alt="contac-img" />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
}
