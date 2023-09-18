import { Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavoritesAction } from "../redux/actions";

const CompaniesFav = () => {
  const companiesFavorites = useSelector((state) => state.favorites.content);
  const dispatch = useDispatch();
  return (
    <Col xs={"10"}>
      <h2>Favorites Company</h2>
      {companiesFavorites.length !== 0 ? (
        <ListGroup>
          {companiesFavorites.map((company, i) => (
            <ListGroup.Item key={i}>
              <div className="d-flex justify-content-between">
                <p>{company} </p>
                <button
                  onClick={() => {
                    dispatch(removeFromFavoritesAction(company));
                  }}
                >
                  delete
                </button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <h4>Non ci preferiti salvati!</h4>
      )}
    </Col>
  );
};
export default CompaniesFav;
