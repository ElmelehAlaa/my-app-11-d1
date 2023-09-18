import { FiHeart } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addToFavoritesAction } from "../redux/actions";

const Job = (companyData) => {
  const dispatch = useDispatch();

  console.log(companyData);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>{companyData.companyData.company_name}</Col>
      <Col xs={8}>
        <a href={companyData.companyData.url} target="_blank" rel="noreferrer">
          {companyData.companyData.title}
        </a>
      </Col>
      <Col xs={1}>
        <button
          onClick={() => {
            dispatch(addToFavoritesAction(companyData.companyData.company_name));
          }}
        >
          <div> {FiHeart}</div>
        </button>
      </Col>
    </Row>
  );
};

export default Job;
