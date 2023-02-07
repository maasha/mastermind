import { COLORS } from "../static/colors.const";
import Color from "./Color";

export default function ColorPanel() {
  return (
    <div className="flex justify-between mx-auto pb-4 px-2">
      {Object.entries(COLORS).map(([colorName, colorClass]) => {
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
