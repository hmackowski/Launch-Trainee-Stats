import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Table } from "react-bootstrap";
import profileImg from "../images/empty-profile.png";
import Ratings from "./Ratings";
import TraineeNotes from "./TraineeNotes";
import TraineePhases from "./TraineePhases";

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

  console.log(data);
  return (
    <div>
      <h1>
        {data.trainee?.firstName} {data.trainee?.lastName}'s Profile
      </h1>
      <h4>{data.trainee?.traineeTitle}</h4>

      <Container fluid className="profile-container">
        <Row>
          {/* Left Sidebar */}
          <Col md={3} className="profile-sidebar">
            <Container>
              <Row>
                <img className="profilePic" src={profileImg} />
                <p>Hire Date: {data.trainee?.hireDate}</p>
              </Row>
              <br />
              <Row>
                <div className="profile-links bg-light">
                  <ul className="no-bullets">
                    <li>
                      <a href="">
                        {data.trainee?.firstName} {data.trainee?.lastName}'s
                        Stats
                      </a>
                    </li>
                    <li>
                      <a href="">Attendance</a>
                    </li>
                  </ul>
                </div>
                <TraineePhases traineeData={data} />
              </Row>
            </Container>
          </Col>

          {/* Center Content: Ratings */}
          <Col md={6}>
            <Ratings traineeData={data} />
            <TraineeNotes traineeId={data.trainee.traineeId} />
          </Col>

          <Col md={2}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="">Rating</th>
                  <th className="">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CK</td>
                  <td>Classroom Knowledge</td>
                </tr>
                <tr>
                  <td>WPS</td>
                  <td>Water Piping Skill</td>
                </tr>
                <tr>
                  <td>DIS</td>
                  <td>DWV Installation Skill</td>
                </tr>
                <tr>
                  <td>PCT</td>
                  <td>Punctuality</td>
                </tr>
                <tr>
                  <td>TMW</td>
                  <td>Teamwork</td>
                </tr>
                <tr>
                  <td>PSL</td>
                  <td>Problem-solving</td>
                </tr>
                <tr>
                  <td>COM</td>
                  <td>Communication</td>
                </tr>
                <tr>
                  <td>PA</td>
                  <td>Progress & Adaptability</td>
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
