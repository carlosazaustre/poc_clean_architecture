import { Link } from "react-router-dom";
import { Heading } from "components";

export const HomePage = () => {
  return (
    <div>
      <Heading text="Space X Launches" />
      <Link to={"/page/1"}>See Launches</Link>
    </div>
  );
};
