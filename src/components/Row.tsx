import GuessPanel from "./GuessPanel";
import Response from "./Response";

type RowProps = {
  rowIndex: number;
  result?: boolean;
};

export default function Row({ rowIndex, result }: RowProps) {
  return (
    <div className="flex justify-between">
      <GuessPanel rowIndex={rowIndex} />
      {result || <Response rowIndex={rowIndex} />}
    </div>
  );
}
