export const getColor = (i) => {
	const colors = [
		["#ff0000", "#990000",],
		["#00ff00", "#009900",],
		["#ffff00", "#999900",],
		["#ff00ff", "#990099",],
		["#0000ff", "#000099",],
		["#00ffff", "#009999",],
	];

	return colors[i % 6];
}
