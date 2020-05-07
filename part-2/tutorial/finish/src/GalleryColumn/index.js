import React from "react";
import styled from "styled-components";
import { mqs } from "../utils/breakpoints";
import { galleryColumns } from "../utils/galleryColumns";

const Column = styled.div`
	grid-column-end: -1;
	${mqs[0]} {
        ${galleryColumns()}
		grid-column-start: ${(props) => props.columnStart};
	}
	margin: 0;
`;

const Index = (props) => {
	return <Column {...props}>{props.children}</Column>;
};

export default Index;
