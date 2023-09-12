import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';

function Trainees() {

  const trainees = [
    {
      id: 1,
      firstName: "Jason",
      lastName: "Goodnow",
      title: "Trainer",
      startDate: "06/17/2014",
      expectedGraduationDate: "10/20/2024"
    },
    {
      id: 2,
      firstName: "Haskell",
      lastName: "Mackowski",
      title: "Trainer",
      startDate: "10/25/2018",
      expectedGraduationDate: "10/10/2019"
    }
  ];

  return (
    <div>
      <h1>List of trainees and info!</h1>
      <Container>
      {/* Table to display trainees */}
      <Table bordered striped hover>
        <thead>
          <tr>
            <th style={{backgroundColor: "#20496d", color: "white"}}>First Name</th>
            <th style={{backgroundColor: "#20496d", color: "white"}}>Last Name</th>
            <th style={{backgroundColor: "#20496d", color: "white"}}>Title</th>
            <th style={{backgroundColor: "#20496d", color: "white"}}>Start Date</th>
            <th style={{backgroundColor: "#20496d", color: "white"}}>Expected Graduation Date</th>
            <th style={{backgroundColor: "#20496d", color: "white"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((trainee, index) => (
            <tr key={index}>
              <td>{trainee.firstName}</td>
              <td>{trainee.lastName}</td>
              <td>{trainee.title}</td>
              <td>{trainee.startDate}</td>
              <td>{trainee.expectedGraduationDate}</td>
              <td><Button href={"/traineeProfile"}>Profile</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Container>
      <Button href={"/traineeProfile"}>
        Trainee Profile
      </Button>
    </div>
  );
}

export default Trainees;
