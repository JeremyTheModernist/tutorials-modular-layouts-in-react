const columnSizes = {
	xl: {
		desktop: 12,
	},
	l: {
		desktop: 8,
	},
	m: {
		desktop: 6,
	},
	s: {
		desktop: 4,
	},
	xs: {
		desktop: 3,
	},
	xxs: {
		desktop: 2,
	},
};

export const galleryColumns = () => {
	var classes = "";
	for (let key in columnSizes) {
		classes += `&.${key} { grid-column-end: span ${columnSizes[key].desktop}}`;
	}
	return classes;
};
