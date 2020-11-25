import { useState } from "react";
import moment from 'moment'

const Break = () => {
  const [breakLength, setBreakLength] = useState(300);

  const decBreakLength = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incBreakLength = () => {
    setBreakLength(breakLength + 60);
  };

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
