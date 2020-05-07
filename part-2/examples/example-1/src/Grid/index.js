import React from "react";
import styled from "styled-components";
import { mqs } from "../utils/breakpoints";

var Grid = styled.div`
	max-width: 1380px;
	margin: auto;
	display: grid;
	padding: 20px;
	box-sizing: border-box;
	/* auto-fit, fits as much content within the available column space */
	/* grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); */
	grid-template-columns: repeat(1, 1fr);

	${mqs[1]} {
		grid-template-columns: repeat(6, 1fr);
		/* background-color: blue; */
	}
	${mqs[2]} {
		grid-template-columns: repeat(12, 1fr);
		/* background-color: green; */
	}

	grid-column-gap: 40px;
	/* auto-fill, fills the available space with as many columns */
	/* grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); */
`;

const Index = (props) => {
	return <Grid>{props.children}</Grid>;
};

export default Index;
