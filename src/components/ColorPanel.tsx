import { Colors } from "../static/colors.enum";
import Color from "./Color";

export default function ColorPanel() {
  return (
    <div className="flex justify-between mx-auto pb-4">
      {Object.entries(Colors).map(([colorName, colorClass]) => {
        return (
          <Color
            key={colorName}
            colorName={colorName}
            colorClass={colorClass}
          />
        );
      })}
    </div>
  );
}
