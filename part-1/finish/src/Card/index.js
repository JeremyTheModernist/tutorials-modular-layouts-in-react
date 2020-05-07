import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background-color: white;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex;
	flex-flow: column wrap;
	text-align: center;
	transition: 0.25s ease-in-out;
	box-sizing: border-box;
	width: 100%;
	cursor: pointer;
	:hover {
		transition: 0.25s ease-in-out;
		box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
	}
`;

const Index = (props) => {
	return <Card>{props.children}</Card>;
};

export default Index;
