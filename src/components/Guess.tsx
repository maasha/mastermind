import { useDrop } from "react-dnd";

export default function Guess() {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "color",
      canDrop: () => true,
      drop: () => alert("Dropped one"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    []
  );

  return (
    <span
      ref={drop}
      className={`h-8 w-8 p-1 inline-block border-2 border-black rounded-full ${
        isOver ? "bg-red-100" : "bg-yellow-900"
      }`}
    ></span>
  );
}
