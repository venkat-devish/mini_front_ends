import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "./StarMaker.scss";

const StarMaker = () => {
  const [hoverStar, setHoverStar] = useState(0);

  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= hoverStar) {
      stars.push(i);
    } else {
      stars.push("*");
    }
  }
  console.log(stars);
  return (
    <div className="star__container">
      {stars.map((el, idx) => (
        <h2
          onMouseLeave={() => setHoverStar(0)}
          onMouseEnter={() => setHoverStar(idx + 1)}
          onClick={() => setHoverStar(idx + 1)}
        >
          {el === "*" ? <StarBorderIcon /> : <StarIcon />}
        </h2>
      ))}
    </div>
  );
};

export default StarMaker;
