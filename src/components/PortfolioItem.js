import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const PortfolioItem = (props) => {
  return (
    <Card text="secondary">
      <Card.Img variitemsant="top" src={props.items.image} />
      <Card.Body>
        <Card.Title>{props.items.webName}</Card.Title>
        <Card.Text>{props.items.description}</Card.Text>
        <Link
          variant="primary"
          to={{ pathname: `${props.items.url}` }}
          target="_blank"
        >
          {props.items.url}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PortfolioItem;
