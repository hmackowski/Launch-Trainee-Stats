import React from "react";
import { ProgressBar } from "react-bootstrap";

function TraineePhases({ traineeData }) {
  function determineVariant(value) {
    if (value <= 60) {
      return "danger";
    } else if (value <= 79) {
      return "warning";
    } else {
      return "success";
    }
  }
  return (
    <div>
      <ProgressBar
        className="trainee-phase-progressbar"
        label={`Underground - ${traineeData.trainee.underground}`}
        variant={determineVariant(traineeData.trainee.underground)}
        now={traineeData.trainee.underground}
      />
      <ProgressBar
        className="trainee-phase-progressbar"
        label={`Tubset - ${traineeData.trainee.tubset}`}
        variant={determineVariant(traineeData.trainee.tubset)}
        now={traineeData.trainee.tubset}
      />
      <ProgressBar
        className="trainee-phase-progressbar"
        label={`Trim - ${traineeData.trainee.trim}`}
        variant={determineVariant(traineeData.trainee.trim)}
        now={traineeData.trainee.trim}
      />
      <ProgressBar
        className="trainee-phase-progressbar"
        label={`Gas - ${traineeData.trainee.gas}`}
        variant={determineVariant(traineeData.trainee.gas)}
        now={traineeData.trainee.gas}
      />
    </div>
  );
}

export default TraineePhases;
