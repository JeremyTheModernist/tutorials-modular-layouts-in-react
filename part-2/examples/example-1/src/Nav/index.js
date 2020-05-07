import React from "react";
import styled from "styled-components";
import Column from "../Column/index";
import Card from "../Card/index";
import { mqs } from "../utils/breakpoints";

var { useEffect } = React;

var Navigation = styled.ul`
	display: flex;
	flex-flow: row wrap;
	list-style-type: none;
	align-items: baseline;
	h2 {
		margin-left: auto;
		margin-right: auto;
		font-family: Georgia, "Times New Roman", Times, serif;
		font-weight: normal;
		font-size: 3.4rem;
	}
	margin: 0;
	padding: 0;
	margin-bottom: 80px;

	padding-bottom: 30px;
	li {
		font-size: 1.6rem;
		margin-left: 20px;
		display: none;
		${mqs[1]} {
			display: block;
		}
	}
	li:first-child {
		margin-left: 0;
	}
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Index = () => {
	return (
		<Column className="xl">
			<Navigation>
				<li>Home</li>
				<li>About</li>
				<h2>The Wanderer</h2>
				<li>Articles</li>
				<li>Contact</li>
			</Navigation>
		</Column>
	);
};

export default Index;
