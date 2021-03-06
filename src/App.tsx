import React from "react";
import { useState, useEffect, useRef } from "react";

import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

import "./App.css";
import "./assets/main.css";

function App() {
  const audioElement = useRef<HTMLAudioElement>(null);
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [currentSessionType, setCurrentSessionType] = useState("Session");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  useEffect(() => {
    if (timeLeft === 0) {
      audioElement?.current?.play();
      if (currentSessionType === "Session") {
        setCurrentSessionType("Break");
        setTimeLeft(breakLength);
      } else if (currentSessionType === "Break") {
        setCurrentSessionType("Session");
        setTimeLeft(sessionLength);
      }
    }
  }, [breakLength, currentSessionType, sessionLength, timeLeft]);

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
      if (intervalId) clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000); 
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    audioElement?.current?.load();
    if (intervalId) clearInterval(intervalId);
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
