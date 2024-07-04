import React, { useState } from "react";
import "../css/timer.css";

const TimerBlack = (props) => {
  const [time, setTime] = useState(props.time.current);
  const timer = `${Math.floor(time / 60)}:${
    time % 60 < 10 ? "0" + (time % 60) : time % 60
  }`;

  if (time === 0) {
    props.setMate(true);
    props.setColorMate(`Белые выиграли`);
  }

  if (props.checkColor === "black") {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }

  return <div className="timer">{timer}</div>;
};

export default TimerBlack;
