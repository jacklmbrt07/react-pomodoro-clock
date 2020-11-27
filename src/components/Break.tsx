import moment from "moment";
import React from "react";
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionTime,
  PlusMinusButton,
  PlusMinusButtonContainer,
} from "../ui/BreakSessionUi";

const Break: React.FC<Props> = ({
  breakLength,
  decBreakLength,
  incBreakLength,
}) => {
  const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
  return (
    <BreakSessionContainer>
      <BreakSessionLabel id="break-label">Break</BreakSessionLabel>
      <BreakSessionTime id="break-length">
        {breakLengthInMinutes}
      </BreakSessionTime>
      <PlusMinusButtonContainer>
        <PlusMinusButton id="break-decrement" onClick={decBreakLength}>
          -
        </PlusMinusButton>
        <PlusMinusButton id="break-increment" onClick={incBreakLength}>
          +
        </PlusMinusButton>
      </PlusMinusButtonContainer>
    </BreakSessionContainer>
  );
};

type Props = {
  breakLength: number;
  decBreakLength: () => void;
  incBreakLength: () => void;
};

export default Break;
