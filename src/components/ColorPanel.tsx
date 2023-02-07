import Color from "./Color";

const COLORS = [
  "bg-white",
  "bg-black",
  "bg-red-600",
  "bg-yellow-600",
  "bg-blue-600",
  "bg-green-600",
];

export default function ColorPanel() {
  return (
    <div className="flex w-80 justify-between mx-auto pb-4">
      {COLORS.map((color) => {
        return <Color key={color} color={color} />;
      })}
    </div>
  );
}
