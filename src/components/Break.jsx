import moment from "moment";

const Break = ({ breakLength, decBreakLength, incBreakLength }) => {
  const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();
  return (
    <div>
      <p id="break-label">Break</p>
      <p id="break-length">{breakLengthInMinutes}</p>
      <button id="break-decrement" onClick={decBreakLength}>
        -
      </button>
      <button id="break-increment" onClick={incBreakLength}>
        +
      </button>
    </div>
  );
};

export default Break;
