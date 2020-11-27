import moment from "moment";
import React from "react";
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionTime,
  PlusMinusButton,
  PlusMinusButtonContainer,
} from "../ui/BreakSessionUi";

const Session: React.FC<Props> = ({
  sessionLength,
  decSessionLength,
  incSessionLength,
}) => {
  const sessionLengthInMinutes = moment.duration(sessionLength, "s").minutes();
  return (
    <BreakSessionContainer>
      <BreakSessionLabel id="session-label">Session</BreakSessionLabel>
      <BreakSessionTime id="session-length">
        {sessionLengthInMinutes}
      </BreakSessionTime>
      <PlusMinusButtonContainer>
        <PlusMinusButton id="session-decrement" onClick={decSessionLength}>
          -
        </PlusMinusButton>
        <PlusMinusButton id="session-increment" onClick={incSessionLength}>
          +
        </PlusMinusButton>
      </PlusMinusButtonContainer>
    </BreakSessionContainer>
  );
};

type Props = {
  sessionLength: number;
  decSessionLength: () => void;
  incSessionLength: () => void;
};

export default Session;
