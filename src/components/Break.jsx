import moment from "moment";
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionTime,
  PlusMinusButton,
  PlusMinusButtonContainer,
} from "../ui/BreakSessionUi";

const Break = ({ breakLength, decBreakLength, incBreakLength }) => {
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

export default Break;
