import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TraineeInputForm from "./TraineeInputForm";

function InputRatings() {
  const { traineeId } = useParams();
  const [traineeInfo, setTraineeInfo] = useState([]);

  const fetchTrainee = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/trainees/${traineeId}/profile`
      );
      setTraineeInfo(response.data);
      console.log(traineeInfo);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

useEffect(() =>{
  fetchTrainee();
},[traineeId]);
console.log(traineeInfo.trainee);
  return (
    <div>
      <h1>Update {traineeInfo.trainee?.firstName}'s profile</h1>
      <TraineeInputForm traineeData={traineeInfo.trainee} />
    </div>
  );
}

export default InputRatings;
