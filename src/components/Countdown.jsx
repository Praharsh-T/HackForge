// import React from "react";
import { useState, useEffect } from "react";
import TimerCard from "./TimerCard";
import RotatingBorderBox from "./RotatingBorderBox";
function Countdown() {
  const endTime = new Date("2025-03-27T10:00:00.000+05:30").getTime();

  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(new Date().getTime());
    }, 1);
  }, [currentTime]);

  if (gap <= 0) {
    return (
      <RotatingBorderBox/>
    );
  } else {
    return (
      <div className="TimerCardDiv">
        <TimerCard
          days={remainingDays}
          hours={remainingHours}
          minutes={remainingMinutes}
          seconds={remainingSeconds}
        />
      </div>
    );
  }
}
export default Countdown;
