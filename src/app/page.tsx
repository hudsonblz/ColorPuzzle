import Item from "@/components/Item";
import { Slot } from "@/components/Slot";
import { Colors } from "@/styles/colors";

export default function Home() {
	const items = [
		{ color: Colors.Green },
		{ color: Colors.Red },
		{ color: Colors.Blue },
		{ color: Colors.Yellow },
	];

	//TODO: deal with empty slots
	return (
		<main className="flex min-h-screen items-center justify-between p-24">
			<Slot items={items} />
			<Slot items={items} />
			<Slot items={items} />
			<Slot items={items} />
			<Slot items={items} />
			<Slot items={items} />
			<Slot items={[]} />
		</main>
	);
}
