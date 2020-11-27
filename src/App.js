import { useState, useEffect, useRef } from "react";

import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

import "./App.css";
import "./assets/main.css";

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
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength);
    }
  };

  const incBreakLength = () => {
    const newBreakLength = breakLength + 60;
    if (newBreakLength <= 60 * 60) {
      setBreakLength(newBreakLength);
    }
  };

  const decSessionLength = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength > 0) {
      setSessionLength(newSessionLength);
    }
  };

  const incSessionLength = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength <= 60 * 60) {
      setSessionLength(sessionLength + 60);
    }
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
            return newTimeLeft;
          }
          audioElement.current.play();
          if (currentSessionType === "Session") {
            setCurrentSessionType("Break");
            return breakLength;
          } else if (currentSessionType === "Break") {
            setCurrentSessionType("Session");
            return sessionLength;
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
    <div className="App flex flex-col h-screen items-center justify-center bg-gradient-to-t from-red-600 to-yellow-300">
      <div className="flex w-full justify-around">
        <Break
          breakLength={breakLength}
          decBreakLength={decBreakLength}
          incBreakLength={incBreakLength}
        />
        <TimeLeft
          handleResetButtonClick={handleResetButtonClick}
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
      </div>

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
