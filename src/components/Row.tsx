import Guess from "./Guess";
import Response from "./Response";

type RowProps = {
  result?: boolean;
};

export default function Row({ result }: RowProps) {
  return (
    <div className="flex justify-between">
      <Guess />
      {result || <Response />}
    </div>
  );
}
