import { useState } from "react";
import bird from "./svg//bird.svg";
import cat from "./svg//cat.svg";
import cow from "./svg//cow.svg";
import dog from "./svg//dog.svg";
import gator from "./svg//gator.svg";
import heart from "./svg//heart.svg";
import horse from "./svg//horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow(props) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  const { type } = props;
  return (
    <div onClick={handleClick}>
      <img src={svgMap[type]} alt="animals" />
      <img src={heart} alt="heart" style={{ width: 10 + 10 * click + "px" }} />
    </div>
  );
}

export default AnimalShow;
