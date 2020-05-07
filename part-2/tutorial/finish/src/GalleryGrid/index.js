import React from "react";
import styled from "styled-components";
import { mqs } from "../utils/breakpoints";

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	${mqs[0]} {
		grid-template-columns: repeat(12, 1fr);
	}
	grid-column-gap: 40px;
`;

const Index = (props) => {
	return <Grid {...props}>{props.children}</Grid>;
};

export default Index;
