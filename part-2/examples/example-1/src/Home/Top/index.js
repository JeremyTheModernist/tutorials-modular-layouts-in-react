import React from "react";
import styled from "styled-components";
import Column from "../../Column/index";
import Card from "../../Card/index";
import imageOne from "../../images/01_image.jpg";
import imageTwo from "../../images/02_image.jpg";
import imageThree from "../../images/03_image.jpg";
import imageFour from "../../images/04_image.jpg";
import imageFive from "../../images/05_image.jpg";

var Container = styled.div`
	position: relative;
	display: flex;
	flex-flow: column wrap;
	justify-content: start;
	align-items: center;
	text-align: center;
	min-height: 400px;
	h1,
	h3 {
		text-transform: capitalize;
	}
	&.largeImage {
		justify-content: center;
		img {
			height: 400px;
		}
	}
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
	.overlayTitle {
		z-index: 10;
		position: absolute;
		color: white;
		padding: 80px;
	}
	.title {
		z-index: 10;
		margin: 30px;
		margin-bottom: 0;
	}
`;

var { useEffect, useState } = React;

const Index = () => {
	var [state, setState] = useState([]);
	useEffect(() => {
		fetch(`https://my-api-thing.herokuapp.com/api`)
			.then((res) => res.json())
			.then((data) => {
				console.log("YOUR DATA", data);
				setState(data);
			});
	}, []);
	return (
		<>
			<Column className="m">
				<Card>
					<Container className="largeImage">
						<img src={imageTwo} />
						<div className="overlayTitle">
							<h1>Misty Mountain Adventures</h1>
							<h4>/</h4>
							<h4>Travel, Trips</h4>
						</div>
					</Container>
				</Card>
			</Column>
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
						<img src={imageFour} className="smallImage" />
						<div className="title">
							<h3>Minimalist Ceramics for every situation</h3>
							<h4>/</h4>
							<h4>Ceramics, Crafts</h4>
						</div>
					</Container>
				</Card>
			</Column>
		</>
	);
};

export default Index;
