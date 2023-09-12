import React from 'react';

let trainee = { 
  name: "Haskell",
  phase: "Water",
  rating: 99
};

const traineestats = {
  ck: 89,
  wps: 92,
  dis: 78,
  ss: 87,
  psl: 81,
  com: 80
}

const numberOfValues = Object.keys(traineestats).length;
const total = Object.values(traineestats).reduce((acc, value) => acc + value, 0);
const average = total / numberOfValues;


function TraineeProfile() {
  return (
    <div>
      <h1>{trainee.name}'s Profile</h1>
      <p>Current Overall Rating: {average}</p>
    </div>
  )
}

export default TraineeProfile;
