import React from "react";
import Item from "./Item";
import { ItemType } from "@/types/item";

interface SlotProps {
	items: ItemType[];
}

export const Slot = ({ items }: SlotProps) => {
	return (
		<div className="bg-neutral-700 px-4 pt-2 pb-10 rounded-b-full">
			{items.map((item, index) => (
				<Item key={index} color={item.color} />
			))}
		</div>
	);
};
