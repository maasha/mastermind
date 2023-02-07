import GuessPanel from "./GuessPanel";
import Response from "./Response";

type RowProps = {
  result?: boolean;
};

export default function Row({ result }: RowProps) {
  return (
    <div className="flex justify-between">
      <GuessPanel />
      {result || <Response />}
    </div>
  );
}
