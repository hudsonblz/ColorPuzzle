import { ThemeColors } from "@/styles/colors";
import { ItemType } from "@/types/item";

const Item = ({ color }: ItemType) => {
	return <div className={`w-20 h-20 ${ThemeColors[color]}`}> </div>;
};

export default Item;
