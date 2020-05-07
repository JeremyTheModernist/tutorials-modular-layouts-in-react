var breakpoints = [520, 620, 1020];

export const mqs = breakpoints.map((bp) => {
	return `@media (min-width: ${bp}px)`;
});
