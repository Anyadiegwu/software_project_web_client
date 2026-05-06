import { useState, useEffect } from "react";

export default function useDateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const timeofDay = ["Night", "Morning", "Afternoon", "Evening"];

  const dayName = days[dateTime.getDay()];
  const date = dateTime.getDate();
  const month = months[dateTime.getMonth()];
  const year = dateTime.getFullYear();

  const hours = dateTime.getHours();
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");
  const seconds = String(dateTime.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  const currentTimeOfDay = timeofDay[Math.floor(hours / 6)];
  return {
    full: `${dayName}, ${date} ${month} ${year}`,   // "TUESDAY, 5 MAY 2026"
    time24: `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`,  // "14:32:01"
    time12: `${hours12}:${minutes}:${seconds} ${ampm}`,                 // "2:32:01 PM"
    timeShort: `${String(hours).padStart(2, "0")}:${minutes}`,          // "14:32"
    dayName,
    date,
    month,
    year,
    currentTimeOfDay
  };
}