import Guess from "./Guess";
import Response from "./Response";

export default function Row() {
  return (
    <div className="flex justify-between">
      <Guess />
      <Response />
    </div>
  );
}
