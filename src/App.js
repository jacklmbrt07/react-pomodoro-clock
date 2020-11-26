import { useState, useEffect, useRef } from "react";

import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

import "./App.css";

function App() {
  const audioElement = useRef(null);
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [currentSessionType, setCurrentSessionType] = useState("Session");
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

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

  const decSessionLength = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incSessionLength = () => {
    setSessionLength(sessionLength + 60);
  };

  const isStarted = intervalId != null;
  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          audioElement.current.play();
          if (currentSessionType === "Session") {
            setCurrentSessionType("Break");
            setTimeLeft(breakLength);
          } else if (currentSessionType === "Break") {
            setCurrentSessionType("Session");
            setTimeLeft(sessionLength);
          }
        });
      }, 100); // TODO: TURN BACK INTO 1000
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    audioElement.current.load();
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType("Session");
    setSessionLength(60 * 25);
    setBreakLength(60 * 5);
    setTimeLeft(60 * 25);
  };

  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        decBreakLength={decBreakLength}
        incBreakLength={incBreakLength}
      />
      <TimeLeft
        startStopButtonLabel={isStarted ? "Stop" : "Start"}
        handleStartStopClick={handleStartStopClick}
        timerLabel={currentSessionType}
        timeLeft={timeLeft}
      />
      <Session
        sessionLength={sessionLength}
        decSessionLength={decSessionLength}
        incSessionLength={incSessionLength}
      />
      <button id="reset" onClick={handleResetButtonClick}>
        Reset
      </button>
      <audio id="beep" ref={audioElement}>
        <source
          src="https://onlineclock.net/audio/options/default.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default App;
