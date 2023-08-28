import React from 'react'
import { Button } from 'react-bootstrap'

function Trainees() {
  return (
    <div>
      <h1>List of trainees and info!</h1>
      <Button  href={"/traineeProfile"}>
  Trainee Profile
</Button>
    </div>
  )
}

export default Trainees
