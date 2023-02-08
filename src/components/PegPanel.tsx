import { COLORS } from "../static/colors.const";
import Peg from "./Peg";

export default function PegPanel() {
  return (
    <div className="flex justify-between mx-auto pb-4 px-2">
      {Object.entries(COLORS).map(([colorName, colorClass]) => {
        return (
          <Peg key={colorName} colorName={colorName} colorClass={colorClass} />
        );
      })}
    </div>
  );
}
