var columnSizes = {
	xl: {
		desktop: "span 12",
		tablet: "span 6",
	},
	l: {
		desktop: "span 8",
		tablet: "span 6",
	},
	m: {
		desktop: "span 6",
		tablet: "span 6",
	},
	s: {
		desktop: "span 4",
		tablet: "span 3",
	},
	xs: {
		desktop: "span 3",
		tablet: "span 3",
	},
	xxs: {
		desktop: "span 1",
		tablet: "span 2",
	},
};

export const desktopColumns = () => {
	var classes = "";
	for (let key in columnSizes) {
		classes += `&.${key} { grid-column-end: ${columnSizes[key].desktop}}`;
	}
	return classes;
};

export const tabletColumns = () => {
	var classes = "";
	for (let key in columnSizes) {
		classes += `&.${key} { grid-column-end: ${columnSizes[key].tablet}}`;
	}
	return classes;
};
