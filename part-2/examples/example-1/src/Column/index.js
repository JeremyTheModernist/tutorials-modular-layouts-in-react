import React from "react";
import styled from "styled-components";
import { mqs } from "../utils/breakpoints";
import { desktopColumns, tabletColumns } from "../utils/columnSizes";
import propTypes from "prop-types";

var Column = styled.div`
	grid-column-end: -1;
	${mqs[1]} {
		${tabletColumns};
	}
	${mqs[2]} {
		grid-column-start: ${(props) => props.columnStart};
		${desktopColumns}
	}
	margin: 0;
`;

const Index = (props) => {
	console.log("props", props);
	return <Column {...props}>{props.children}</Column>;
};

export default Index;

// &.xl {
//     grid-column: ${columnSizes.xl};
// }
// &.l {
//     grid-column: ${columnSizes.xl};
// }

Index.propTypes = {
	className: propTypes.string,
	columnStart: propTypes.string,
	rando: propTypes.string,
};
