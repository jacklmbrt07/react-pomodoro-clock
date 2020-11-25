import { useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

const TimeLeft = ({ sessionLength }) => {
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss')
  return <div>{formattedTimeLeft}</div>;
};

export default TimeLeft;
