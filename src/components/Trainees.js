import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";

function Trainees() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Function to make the GET request
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/trainees/fetchAllTrainees"
      );
      setData(response.data);
      console.log("Data:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>List of trainees and info!</h1>
      <Container fluid>
        <Row className="trainee-row">
          <Col xs={12} lg={8}>
            {/* Wrap the table in a div with "table-responsive" class */}
            <div className="table-responsive responsive-table">
              <Table bordered striped hover>
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#20496d", color: "white" }}>
                      First Name
                    </th>
                    <th style={{ backgroundColor: "#20496d", color: "white" }}>
                      Last Name
                    </th>
                    <th style={{ backgroundColor: "#20496d", color: "white" }}>
                      Title
                    </th>
                    <th style={{ backgroundColor: "#20496d", color: "white" }}>
                      Start Date
                    </th>
                    <th style={{ backgroundColor: "#20496d", color: "white" }}>
                      Expected Graduation Date
                    </th>
                    <th style={{ backgroundColor: "#20496d", color: "white" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((trainee) => (
                    <tr key={trainee.traineeId}>
                      <td>{trainee.firstName}</td>
                      <td>{trainee.lastName}</td>
                      <td>{trainee.traineeTitle}</td>
                      <td>{trainee.hireDate}</td>
                      <td>{trainee.expectedGraduationDate}</td>
                      <td>
                        <Button href={`/traineeProfile/${trainee.traineeId}`}>
                          Profile
                        </Button>
                        <Button className="profile-update-button" variant={'secondary'} href={`/inputTraineeRating/${trainee.traineeId}`}>
                          Update
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Trainees;
