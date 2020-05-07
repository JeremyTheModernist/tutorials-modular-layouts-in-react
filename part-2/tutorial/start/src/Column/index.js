import React from "react";
import styled from "styled-components";
import { mqs } from "../utils/breakpoints";
import { desktopColumns, tabletColumns } from "../utils/columnSizes";

const Column = styled.div`
	grid-column-end: -1;
	${mqs[0]} {
		${tabletColumns()};
	}
	${mqs[1]} {
		${desktopColumns()};
	}
	margin: 0;
`;

const Index = (props) => {
	return <Column {...props}>{props.children}</Column>;
};

export default Index;
