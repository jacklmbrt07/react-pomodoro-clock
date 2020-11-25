import moment from "moment";

const Session = ({ sessionLength, decSessionLength, incSessionLength }) => {
  const sessionLengthInMinutes = moment.duration(sessionLength, "s").minutes();
  return (
    <div>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthInMinutes}</p>
      <button id="session-decrement" onClick={decSessionLength}>
        -
      </button>
      <button id="session-increment" onClick={incSessionLength}>
        +
      </button>
    </div>
  );
};

export default Session;
