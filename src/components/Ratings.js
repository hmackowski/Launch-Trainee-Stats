import React from "react";
import { Table, Button, ProgressBar } from "react-bootstrap";

function Ratings({ traineeData }) {
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
    <div className="ratings-component">
      <h3>Overall Rating: {traineeData.trainee.overallRating}</h3>
      <ProgressBar
        variant={determineVariant(traineeData.trainee.overallRating)}
        now={traineeData.trainee.overallRating}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="profile-rating-column">Rating</th>
            <th className="profile-score-column"></th>
            <th>Score</th>
            <th className="profile-actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CK</td>
            <td>
              <ProgressBar
                max={99}
                animated={traineeData.trainee.ckScore >= 90}
                variant={determineVariant(traineeData.trainee.ckScore)}
                now={traineeData.trainee.ckScore}
              />{" "}
            </td>
            <td>
              <p>{traineeData.trainee.ckScore}</p>
            </td>
            <td>
              <Button>Update</Button> <Button variant="danger">Clear</Button>
            </td>
          </tr>
          <tr>
            <td>WPS</td>
            <td>
              <ProgressBar
                max={99}
                animated={traineeData.trainee.wpsScore >= 90}
                variant={determineVariant(traineeData.trainee.wpsScore)}
                now={traineeData.trainee.wpsScore}
              />
            </td>
            <td>
              <p>{traineeData.trainee.wpsScore}</p>
            </td>
            <td>Row 3 traineeData 2</td>
          </tr>
          <tr>
            <td>DIS</td>
            <td>
              <ProgressBar
                max={99}
                animated={traineeData.trainee.disScore >= 90}
                variant={determineVariant(traineeData.trainee.disScore)}
                now={traineeData.trainee.disScore}
              />
            </td>
            <td>
              <p>{traineeData.trainee.disScore}</p>
            </td>
            <td>Row 3 traineeData 2</td>
          </tr>
          <tr>
            <td>PCT</td>
            <td>
              <ProgressBar
                max={99}
                animated={traineeData.trainee.pctScore >= 90}
                variant={determineVariant(traineeData.trainee.pctScore)}
                now={traineeData.trainee.pctScore}
              />
            </td>
            <td>
              <p>{traineeData.trainee.pctScore}</p>
            </td>
            <td>Row 3 traineeData 2</td>
          </tr>
          <tr>
            <td>TMW</td>
            <td>
              <ProgressBar
                max={99}
                animated={traineeData.trainee.tmwScore >= 90}
                variant={determineVariant(traineeData.trainee.tmwScore)}
                now={traineeData.trainee.tmwScore}
              />
            </td>
            <td>
              <p>{traineeData.trainee.tmwScore}</p>
            </td>
            <td>Row 3 traineeData 2</td>
          </tr>
          <tr>
            <td>PSL</td>
            <td>
              <ProgressBar
                max={99}
                animated={traineeData.trainee.pslScore >= 90}
                variant={determineVariant(traineeData.trainee.pslScore)}
                now={traineeData.trainee.pslScore}
              />
            </td>
            <td>
              <p>{traineeData.trainee.pslScore}</p>
            </td>
            <td>Row 3 traineeData 2</td>
          </tr>
          <tr>
            <td>COM</td>
            <td>
              <ProgressBar
                max={99}
                animated={traineeData.trainee.comScore >= 90}
                variant={determineVariant(traineeData.trainee.comScore)}
                now={traineeData.trainee.comScore}
              />
            </td>
            <td>
              <p>{traineeData.trainee.comScore}</p>
            </td>
            <td>Row 3 traineeData 2</td>
          </tr>
          <tr>
            <td>PA</td>
            <td>
              <ProgressBar
                max={99}
                animated={traineeData.trainee.paScore >= 90}
                variant={determineVariant(traineeData.trainee.paScore)}
                now={traineeData.trainee.paScore}
              />
            </td>
            <td>
              <p>{traineeData.trainee.paScore}</p>
            </td>
            <td>Row 3 traineeData 2</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Ratings;
