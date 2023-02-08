import GuessPanel from "./GuessPanel";
import ResponsePanel from "./ResponsePanel";

type RowProps = {
  rowIndex: number;
};

export default function Row({ rowIndex }: RowProps) {
  return (
    <div className="flex justify-between">
      <GuessPanel rowIndex={rowIndex} />
      <ResponsePanel rowIndex={rowIndex} />
    </div>
  );
}
