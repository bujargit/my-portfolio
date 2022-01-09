import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../data/content";

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div
          className="loader__text"
          style={{ display: isLoading ? "flex" : "none" }}
        >
          Loading....
        </div>
        <div
          className="mb-5 po_items_ho"
          style={{ display: isLoading ? "none" : "block" }}
        >
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link} target="_blank" rel="noreferrer">
                    view project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
}

export default Portfolio;
