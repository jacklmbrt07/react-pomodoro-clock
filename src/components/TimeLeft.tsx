import moment from "moment";
import React from "react";
import momentDurationFormatSetup from "moment-duration-format";

// @ts-ignore
momentDurationFormatSetup(moment);

const TimeLeft: React.FC<Props> = ({
  handleResetButtonClick,
  handleStartStopClick,
  timerLabel,
  startStopButtonLabel,
  timeLeft,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-white rounded-full text-black">
      <p id="timer-label text-2xl text-gray-100">{timerLabel}</p>
      <p id="time-left" className="font-clock text-4xl font-bold">
        {" "}
        {formattedTimeLeft}{" "}
      </p>
      <button
        id="start_stop"
        className="text-white font-semibold bg-red-500 px-4 py-2 rounded-lg"
        onClick={handleStartStopClick}
      >
        {startStopButtonLabel}
      </button>
      <button
        id="reset"
        className="border-2 px-3 py-1 border-solid border-black rounded-lg"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
    </div>
  );
};

type Props = {
  handleResetButtonClick: () => void;
  handleStartStopClick: () => void;
  timerLabel: string;
  startStopButtonLabel: string;
  timeLeft: number;
};

export default TimeLeft;
