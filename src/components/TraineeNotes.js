import React from 'react'

function TraineeNotes({traineeId}) {
  return (
    <div className='trainee-notes'>
      <h4>Notes</h4>
      <p> Trainee has spent 1 month on Underground, and 1 month on Trim. id = {traineeId}</p>
    </div>
  )
}

export default TraineeNotes
