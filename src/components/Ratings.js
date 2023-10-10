import React from "react";
import { Table, Button, ProgressBar } from "react-bootstrap";

function Ratings({ data }) {
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
      <h3>Overall Rating: {data.trainee.overallRating}</h3>
      <ProgressBar
        variant={determineVariant(data.trainee.overallRating)}
        now={data.trainee.overallRating}
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
                animated={data.trainee.ckScore >= 90}
                variant={determineVariant(data.trainee.ckScore)}
                now={data.trainee.ckScore}
              />{" "}
            </td>
            <td>
              <p>{data.trainee.ckScore}</p>
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
                animated={data.trainee.wpsScore >= 90}
                variant={determineVariant(data.trainee.wpsScore)}
                now={data.trainee.wpsScore}
              />
            </td>
            <td>
              <p>{data.trainee.wpsScore}</p>
            </td>
            <td>Row 3 Data 2</td>
          </tr>
          <tr>
            <td>DIS</td>
            <td>
              <ProgressBar
                max={99}
                animated={data.trainee.disScore >= 90}
                variant={determineVariant(data.trainee.disScore)}
                now={data.trainee.disScore}
              />
            </td>
            <td>
              <p>{data.trainee.disScore}</p>
            </td>
            <td>Row 3 Data 2</td>
          </tr>
          <tr>
            <td>PCT</td>
            <td>
              <ProgressBar
                max={99}
                animated={data.trainee.pctScore >= 90}
                variant={determineVariant(data.trainee.pctScore)}
                now={data.trainee.pctScore}
              />
            </td>
            <td>
              <p>{data.trainee.pctScore}</p>
            </td>
            <td>Row 3 Data 2</td>
          </tr>
          <tr>
            <td>TMW</td>
            <td>
              <ProgressBar
                max={99}
                animated={data.trainee.tmwScore >= 90}
                variant={determineVariant(data.trainee.tmwScore)}
                now={data.trainee.tmwScore}
              />
            </td>
            <td>
              <p>{data.trainee.tmwScore}</p>
            </td>
            <td>Row 3 Data 2</td>
          </tr>
          <tr>
            <td>PSL</td>
            <td>
              <ProgressBar
                max={99}
                animated={data.trainee.pslScore >= 90}
                variant={determineVariant(data.trainee.pslScore)}
                now={data.trainee.pslScore}
              />
            </td>
            <td>
              <p>{data.trainee.pslScore}</p>
            </td>
            <td>Row 3 Data 2</td>
          </tr>
          <tr>
            <td>COM</td>
            <td>
              <ProgressBar
                max={99}
                animated={data.trainee.comScore >= 90}
                variant={determineVariant(data.trainee.comScore)}
                now={data.trainee.comScore}
              />
            </td>
            <td>
              <p>{data.trainee.comScore}</p>
            </td>
            <td>Row 3 Data 2</td>
          </tr>
          <tr>
            <td>PA</td>
            <td>
              <ProgressBar
                max={99}
                animated={data.trainee.paScore >= 90}
                variant={determineVariant(data.trainee.paScore)}
                now={data.trainee.paScore}
              />
            </td>
            <td>
              <p>{data.trainee.paScore}</p>
            </td>
            <td>Row 3 Data 2</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Ratings;
