import { useDrag } from "react-dnd";

export type ColorProps = {
  colorName: string;
  colorClass: string;
};

export default function Color({ colorName, colorClass }: ColorProps) {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "color",
      item: { colorName },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <span
      ref={dragRef}
      className={`h-8 w-8 p-1 inline-block border-2 border-black rounded-full hover:cursor-move ${colorClass} ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    ></span>
  );
}
