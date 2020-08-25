const createPoint = (diffuse, trand) => Math.round((diffuse * Math.random()) + trand + 50);

const createPolygon = () => Array.from({ length: Math.round(95 * Math.random() + 5) }, createPoint.bind(null, Math.random() * 50, Math.random() * 150));

export const fetchData = () => new Promise((resolve) => {
	setTimeout(() => {
		resolve(createPolygon());
	}, 1000);
});
