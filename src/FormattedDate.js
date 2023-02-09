import React from "react";

export default function FormattedDate(props) {
    let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let weekDay = weekDays[props.date.getDay()];
      let day = props.date.getDate();
      let months = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let month = months[props.date.getMonth()];
      let hours = props.date.getHours();
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = props.date.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
        <div>
            {weekDay} {month} {day} ⏱ {hours}:{minutes}
        </div>
    );
}