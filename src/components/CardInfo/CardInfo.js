import { Heading } from "components";
import "./CardInfo.scss";

export const CardInfo = ({
  flightNumber,
  missionName,
  launchDateLocal,
  launchSuccess,
}) => {
  const color = launchSuccess ? "green" : "red";

  return (
    <div className="CardInfo">
      <Heading>{flightNumber}</Heading>
      <div>
        <p>
          <strong>Mission Name: </strong>
          {missionName} - Flight {flightNumber}
        </p>
        <p>
          <strong>Launch Date: </strong>
          {launchDateLocal}
        </p>
        <p style={{ color: color }}>
          Mission {launchSuccess ? "Succesfully" : "Failed"}
        </p>
      </div>
    </div>
  );
};
