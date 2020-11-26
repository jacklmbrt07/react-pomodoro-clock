import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({
  handleStartStopClick,
  timerLabel,
  startStopButtonLabel,
  timeLeft,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <div>
      {formattedTimeLeft} <p id="timer-label">{timerLabel}</p>
      <button onClick={handleStartStopClick}>{startStopButtonLabel}</button>
    </div>
  );
};

export default TimeLeft;
