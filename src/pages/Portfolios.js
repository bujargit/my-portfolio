import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import portImage1 from "../assets/images/aa1.de.png";
import portImage2 from "../assets/images/adc-ks.png";
import portImage3 from "../assets/images/amg-lithium.png";
import portImage4 from "../assets/images/bakertillyks.png";
import portImage5 from "../assets/images/besabegu.png";
import portImage6 from "../assets/images/brandgroup.png";
import portImage7 from "../assets/images/illusiumks.png";
import portImage8 from "../assets/images/ruhrhub.png";
import portImage9 from "../assets/images/koellnJacoby.png";

const portfolios = [
  {
    id: 1,
    webName: "AA1",
    description: "WebSite responsive",
    url: "http://www.aa1.de",
    image: portImage1,
  },
  {
    id: 2,
    webName: "ADC",
    description: "WebSite responsive",
    url: "http://www.adc-ks.com",
    image: portImage2,
  },
  {
    id: 3,
    webName: "AMG Lithium",
    description: "WebSite responsive",
    url: "http://amg-lithium.com",
    image: portImage3,
  },
  {
    id: 4,
    webName: "Baker Tilly",
    description: "WebSite responsive",
    url: "http://bakertillyks.com",
    image: portImage4,
  },
  {
    id: 5,
    webName: "Besa Begu",
    description: "WebSite responsive",
    url: "http://www.besabegu.com",
    image: portImage5,
  },
  {
    id: 6,
    webName: "Brand Group",
    description: "WebSite responsive",
    url: "https://www.brand-group.com/",
    image: portImage6,
  },
  {
    id: 7,
    webName: "Illusium Ks",
    description: "WebSite responsive",
    url: "http://www.illusiumks.com",
    image: portImage7,
  },
  {
    id: 8,
    webName: "Ruhr Hub",
    description: "WebSite responsive",
    url: "http://ruhrhub.de",
    image: portImage8,
  },
  {
    id: 9,
    webName: "Koelln Jacoby",
    description: "WebSite responsive",
    url: "http://www.koelln-jacoby.de",
    image: portImage9,
  },
];

const Portfolios = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <section>
      <div
        className="loader__text"
        style={{ display: isLoading ? "flex" : "none" }}
      >
        Loading items,
      </div>
      <div style={{ display: isLoading ? "none" : "block" }}>
        <Container className="py-1">
          <Row>
            {portfolios.map((portfolio) => (
              <Col lg={4} md={2} className="d-flex mb-4">
                <Card key={portfolio.id} text="secondary">
                  <Card.Img variant="top" src={portfolio.image} />
                  <Card.Body>
                    <Card.Title>{portfolio.webName}</Card.Title>
                    <Card.Text>{portfolio.description}</Card.Text>
                    <Link
                      variant="primary"
                      to={{ pathname: `${portfolio.url}` }}
                      target="_blank"
                    >
                      {portfolio.url}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Portfolios;
