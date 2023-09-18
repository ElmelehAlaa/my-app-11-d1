import { Col, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const CompaniesFav = (props) => {
  const companiesFavorites = useSelector((state) => state.favorites.content);
  return (
    <Col xs={"10"}>
      <h2>Favorites Company</h2>
      {companiesFavorites.length !== 0 ? (
        <ListGroup>
          {companiesFavorites.map((company, i) => (
            <ListGroup.Item key={i}> {company.company_name}</ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <h4>Non ci preferiti salvati!</h4>
      )}
    </Col>
  );
};
export default CompaniesFav;
