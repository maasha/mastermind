import { useDrag } from "react-dnd";

type ColorProps = {
  color: string;
};

export default function Color({ color }: ColorProps) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "color",
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <span
      ref={drag}
      className={`h-8 w-8 p-1 inline-block border-2 border-black rounded-full ${color} ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    ></span>
  );
}
