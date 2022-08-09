import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Pagination = ({ totalPages, totalResults }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  const handleIncrease = () => {
    setIsDisabled(false);
    navigate(`/page/${+pageNumber + 1}`, { replace: true });
  };

  const handleDecrease = () => {
    pageNumber >= 1
      ? navigate(`/page/${+pageNumber - 1}`, { replace: true })
      : setIsDisabled(true);
  };

  return (
    <section>
      <ul>
        <li>Total Pages: {totalPages}</li>
        <li>Total Results: {totalResults}</li>
      </ul>
      <ul>
        <li>
          <button disabled={isDisabled} onClick={handleDecrease}>
            ◄
          </button>
        </li>
        <li>Current Page: {pageNumber}</li>
        <li>
          <button onClick={handleIncrease}>►</button>
        </li>
      </ul>
    </section>
  );
};
