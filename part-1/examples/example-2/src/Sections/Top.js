import React from "react";
import Column from "../Column";
import Card from "../Card";
import Header from "./Header";
import { mqs } from "../utils/breakpoints";

import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-flow: column wrap;
	min-height: 400px;
	img {
		max-width: 100%;
		height: 200px;
		object-fit: cover;
	}
	&.feature--image {
		/* display: flex;
		flex-flow: row wrap;
		div {
			width: calc(50% - 20px);
			&:nth-child(2) {
				margin-left: 40px;
			}
		} */

		img {
			height: 400px;
			width: 100%;
		}
	}
	&.feature--content {
		min-height: auto;
		h1 {
			font-size: 3.4rem;
			margin-bottom: 0px;
			padding: 0;
			${mqs[1]} {
				font-size: 4.8rem;
			}
		}
		p {
			font-size: 1.8rem;
			line-height: 1.6em;
			margin-bottom: 50px;
		}
		h4 {
			padding: 0;
		}
	}
	font-size: 1.3rem;
	h3 {
		font-size: 2.1rem;
		margin-bottom: 0px;
		padding-left: 15px;
		padding-right: 15px;
	}
	h4 {
		font-size: 1.6rem;
		margin-bottom: 0px;
		padding-left: 15px;
		padding-right: 15px;
	}
`;

const Index = () => {
	return (
		<>
			<Column className="xl">
				<Header>
					<h1>Modernist Architecture</h1>
				</Header>
			</Column>
			<Column className="xl">
				<Header>Best Minimalist Architecture</Header>
			</Column>
			<Column className="m">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?cs=srgb&dl=lotus-temple-1098460.jpg&fm=jpg" />
						<h3>Lotus temple</h3>
						<p>by Swapnil Deshpandey</p>
					</Container>
				</Card>
			</Column>
			<Column className="m">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/802970/pexels-photo-802970.jpeg?cs=srgb&dl=white-room-surrounded-by-body-of-water-802970.jpg&fm=jpg" />
						<h3>White Building Surrounded With Water</h3>
						<p>by Ruark Jewel</p>
					</Container>
				</Card>
			</Column>
			<Column className="xl">
				<Header>Views that last for Days</Header>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/1959065/pexels-photo-1959065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<h4>White Concrete Building Beside Body of Water</h4>
						<p>by Pixabay</p>
					</Container>
				</Card>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/1143416/pexels-photo-1143416.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
						<h4>Brown Metal Building</h4>
						<p>by Javier Gonzalez</p>
					</Container>
				</Card>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<h4>Brown Wooden Stairs</h4>
						<p>by Jimmy Chan</p>
					</Container>
				</Card>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/2523644/pexels-photo-2523644.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
						<h3>Water Falling From Glass Ceiling</h3>
						<p>by Phyo Hein Kyaw</p>
					</Container>
				</Card>
			</Column>
			<Column className="xl">
				<Header></Header>
			</Column>
			<Column className="m">
				<Container className="feature--image">
					<img src="https://images.pexels.com/photos/1959065/pexels-photo-1959065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				</Container>
			</Column>
			<Column className="m">
				<Container className="feature--content">
					<h1>White Concrete Building Beside Body of Water</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Ut faucibus libero non varius dapibus. Praesent tempor
						aliquet metus, nec cursus nisi vehicula eget.
					</p>
					<h4>Read More</h4>
				</Container>
			</Column>
			<Column className="xl">
				<Header>Best Minimalist Architecture</Header>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/2523644/pexels-photo-2523644.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
						<h3>Water Falling From Glass Ceiling</h3>
						<p>by Phyo Hein Kyaw</p>
					</Container>
				</Card>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/1143416/pexels-photo-1143416.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
						<h4>Brown Metal Building</h4>
						<p>by Javier Gonzalez</p>
					</Container>
				</Card>
			</Column>
			<Column className="m">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?cs=srgb&dl=lotus-temple-1098460.jpg&fm=jpg" />
						<h3>Lotus temple</h3>
						<p>by Swapnil Deshpandey</p>
					</Container>
				</Card>
			</Column>
		</>
	);
};

export default Index;

{
	/* <Column className="xl">
<Container className="feature--image">
    <div>
        <img src="https://images.pexels.com/photos/1959065/pexels-photo-1959065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </div>
    <div>
        <h1>White Concrete Building Beside Body of Water</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut faucibus libero non varius dapibus.
            Praesent tempor aliquet metus, nec cursus nisi
            vehicula eget.
        </p>
        <h4>Read More</h4>
    </div>
</Container>
</Column> */
}
