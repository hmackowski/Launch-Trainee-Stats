import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function TraineeNotes({ traineeId }) {
  // State to store the fetched notesData
  const [notesData, setNotesData] = useState([]);
  const [error, setError] = useState();

  // Function to make the GET request
  const fetchNotesData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/trainees/${traineeId}/notes`
      );

      setNotesData(response.data);
    } catch (err) {
      console.error("Error fetching notesData:", err);
      setError("Failed to fetch trainee profile. Please try again later.");
    }
  };

  useEffect(() => {
    fetchNotesData();
  }, [traineeId]); // Added traineeId to the dependency array

  console.log(notesData);

  return (
    <div className="trainee-notes">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Notes</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {notesData.reverse().map((note, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{note.note}</td>
              <td>{note.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TraineeNotes;
