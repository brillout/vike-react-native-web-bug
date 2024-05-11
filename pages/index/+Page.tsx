import React from "react";
import { Counter } from "./Counter.js";
import { Text } from "react-native";

export default function Page() {
	return (
		<>
			<h1>My Vike app</h1>
			This page is:
			<ul>
				<li>
					<Text>Rendered to HTML.</Text>
				</li>
				<li>
					Interactive. <Counter />
				</li>
			</ul>
		</>
	);
}
