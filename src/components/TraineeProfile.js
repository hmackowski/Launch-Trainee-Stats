import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Table } from "react-bootstrap";
import profileImg from "../images/empty-profile.png";

function TraineeProfile() {
  // Destructure the key directly from useParams
  const { key } = useParams();

  // State to store the fetched data
  const [data, setData] = useState();
  const [error, setError] = useState();

  // Function to make the GET request
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/trainees/${key}/profile`
      );
      setData(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch trainee profile. Please try again later.");
    }
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, [key]); // Added key to the dependency array

  // Render logic
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.trainee?.firstName}  {data.trainee?.lastName}'s Profile</h1>
      <p>Hire Date: {data.trainee?.hireDate}</p>

      <Container fluid>
        <Row>
          {/* Left Sidebar */}
          <Col md={3} className="bg-light">
            <h3>
              <img className="profilePic" src={profileImg} />
            </h3>
            <br />
            <ul className="no-bullets">
              <li>
                <a href="">{data.trainee?.firstName} {data.trainee?.lastName}'s Stats</a>
              </li>
              <li>
                <a href="">Attendance</a>
              </li>
            </ul>
          </Col>

          {/* Main Content */}
          <Col md={8}>
            <h3>Main Content</h3>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Row 1 Data 1</td>
          <td>Row 1 Data 2</td>
          <td>Row 1 Data 3</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Row 2 Data 1</td>
          <td>Row 2 Data 2</td>
          <td>Row 2 Data 3</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Row 3 Data 1</td>
          <td>Row 3 Data 2</td>
          <td>Row 3 Data 3</td>
        </tr>
      </tbody>
    </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TraineeProfile;
