const breakpoints = [540, 1080];

export const mqs = breakpoints.map((bp) => {
	return `@media (min-width: ${bp}px)`;
});
