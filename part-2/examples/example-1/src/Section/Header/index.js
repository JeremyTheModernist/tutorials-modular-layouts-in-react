import React from "react";
import styled from "styled-components";
import Column from "../../Column/index";
import { mqs } from "../../utils/breakpoints";

const Header = styled.div`
	margin-top: 40px;
	margin-bottom: 20px;
	h2 {
		font-size: 1.6rem;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}
`;

const Index = () => {
	return (
		<>
			<Column className="xl">
				<Header>
					<h2>Weekly Highlights</h2>
				</Header>
			</Column>
		</>
	);
};

export default Index;
