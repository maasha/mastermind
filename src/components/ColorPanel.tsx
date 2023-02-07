export default function ColorPanel() {
  const panel = [];
  const colors = [
    "bg-white",
    "bg-black",
    "bg-red-600",
    "bg-yellow-600",
    "bg-blue-600",
    "bg-green-600",
  ];

  for (const color of colors) {
    panel.push(
      <span
        className={`h-8 w-8 p-1 inline-block border-2 border-black rounded-full ${color}`}
      ></span>
    );
  }

  return <div className="flex w-80 justify-between mx-auto pb-4">{panel}</div>;
}
