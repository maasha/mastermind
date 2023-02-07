import Guess from "./Guess";
import Response from "./Response";

export default function Row() {
  return (
    <div className="mastermind-row">
      <Guess />
      <Response />
    </div>
  );
}
