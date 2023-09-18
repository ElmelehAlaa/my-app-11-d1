import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.jobs.content);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        <button
          onClick={() => {
            dispatch({ type: "ADD_TO_FAVORITES", payload: data });
          }}
        >
          Aggiungi ai preferiti
        </button>
      </Col>
    </Row>
  );
};

export default Job;
