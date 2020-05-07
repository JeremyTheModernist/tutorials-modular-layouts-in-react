import React from "react";
import styled from "styled-components";

const Header = styled.div`
	text-align: center;
	font-size: 1.4rem;
	text-transform: uppercase;
	letter-spacing: 0.025em;
	font-weight: 600;
	margin-top: 60px;
	margin-bottom: 30px;
	h1 {
		font-size: 4.8rem;
		text-transform: none;
		margin: -30px;
		padding: 0;
	}
`;

const Index = (props) => {
	return <Header>{props.children}</Header>;
};

export default Index;
