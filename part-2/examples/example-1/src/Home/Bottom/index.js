import React from "react";
import styled from "styled-components";
import Column from "../../Column/index";
import Card from "../../Card/index";
import imageOne from "../../images/01_image.jpg";
import imageTwo from "../../images/02_image.jpg";
import imageThree from "../../images/03_image.jpg";
import imageFour from "../../images/04_image.jpg";
import imageFive from "../../images/05_image.jpg";
import { mqs } from "../../utils/breakpoints";

var Container = styled.div`
	position: relative;
	display: flex;
	flex-flow: column wrap;
	justify-content: start;
	align-items: center;
	text-align: center;
	height: 400px;
	img {
		width: 100%;
		object-fit: cover;
	}
	.smallImage {
		height: 200px;
	}
	h4 {
		text-transform: uppercase;
		font-size: 1.1rem;
		justify-self: end;
	}

	.title {
		z-index: 10;
		margin: 30px;
		margin-bottom: 0;
	}
	h3 {
		text-transform: capitalize;
	}
`;

const Index = () => {
	return (
		<>
			<Column className="xs">
				<Card>
					<Container>
						<img src={imageFive} className="smallImage" />
						<div className="title">
							<h3>A step back in time</h3>
							<h4>/</h4>
							<h4>Travel, Trips</h4>
						</div>
					</Container>
				</Card>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src={imageThree} className="smallImage" />
						<div className="title">
							<h3>Mystical Forests</h3>
							<h4>/</h4>
							<h4>Travel, Trips</h4>
						</div>
					</Container>
				</Card>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src={imageFour} className="smallImage" />
						<div className="title">
							<h3>Minimalist Ceramics</h3>
							<h4>/</h4>
							<h4>Ceramics, Crafts</h4>
						</div>
					</Container>
				</Card>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src={imageOne} className="smallImage" />
						<div className="title">
							<h3>Dreamy desert days</h3>
							<h4>/</h4>
							<h4>Travel, Trips</h4>
						</div>
					</Container>
				</Card>
			</Column>
		</>
	);
};

export default Index;
