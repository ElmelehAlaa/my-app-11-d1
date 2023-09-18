import { useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobs, getQuery } from "../redux/actions";

const MainSearch = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   ;
  // }, []);
  // const [query, setQuery] = useState("");

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // const query = useSelector((state)=>state.)
  // try {
  //   const response = await fetch(baseEndpoint + query + "&limit=20");
  //   if (response.ok) {
  //     const { data } = await response.json();
  //     setJobs(data);
  //   } else {
  //     alert("Error fetching results");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  const jobs = useSelector((state) => state.jobs.content);
  console.log(jobs);

  const handleChange = (e) => {
    dispatch(getQuery(e.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(getJobs());
  };
  const query = useSelector((state) => state.queryJob);

  return (
    <Container>
      <Link to={"/favoritesCompany"}>
        <button className="button">Vedi Preferiti</button>
      </Link>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.length > 0 && jobs.data.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
