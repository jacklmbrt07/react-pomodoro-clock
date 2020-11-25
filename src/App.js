import { useState } from "react";

import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(60 * 25);

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
  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        decBreakLength={decBreakLength}
        incBreakLength={incBreakLength}
      />
      <TimeLeft sessionLength={sessionLength} breakLength={breakLength} />
      <Session
        sessionLength={sessionLength}
        decSessionLength={decSessionLength}
        incSessionLength={incSessionLength}
      />
    </div>
  );
}

export default App;
