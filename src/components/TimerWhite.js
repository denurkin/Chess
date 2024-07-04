import React, { useState } from "react";

const TimerWhite = (props) => {
  const [time, setTime] = useState(props.time.current);
  const timer = `${Math.floor(time / 60)}:${
    time % 60 < 10 ? "0" + (time % 60) : time % 60
  }`;

  if (time === 0) {
    props.setMate(true);
    props.setColorMate(`Черные выиграли`);
  }

  if (props.checkColor === "white") {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }

  return <div className="timer">{timer}</div>;
};

export default TimerWhite;
