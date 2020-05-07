import React from "react";
import styled from "styled-components";
import { mqs } from "../utils/breakpoints";

var Card = styled.div`
	background-color: white;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	margin-top: 20px;
	margin-bottom: 20px;
	/* padding: 10px; */
	display: flex;
	flex-flow: column wrap;
	text-align: left;
	width: 100%;
	transition: 0.25s ease-in-out;
	box-sizing: border-box;
	cursor: pointer;
	:hover {
		transition: 0.25s ease-in-out;
		box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
	}
`;

const Index = (props) => {
	console.log("props", props);
	return <Card {...props}>{props.children}</Card>;
};

export default Index;

// &.xl {
//     grid-column: ${columnSizes.xl};
// }
// &.l {
//     grid-column: ${columnSizes.xl};
// }
