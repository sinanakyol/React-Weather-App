import React from "react";

function Time() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  let year = today.getFullYear();
  let hour = today.getHours();
  let min = today.getMinutes();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let curday = weekday[today.getDay()];

  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  min = checkTime(min);

  const date = day + "." + (month + 1) + "." + year + " " + hour + ":" + min;

  return (
    <div className="date">
      <p>{date}</p>
      <p>{curday}</p>
    </div>
  );
}

export default Time;
