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

const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: start;
	padding-top: 20px;
	padding-bottom: 20px;
	${mqs[1]} {
		display: flex;
		flex-flow: row nowrap;
		h3 {
			margin-top: 0px;
		}
		img {
			height: 150px;
		}
	}
	:first-child {
		font-size: 1.3rem;
		border-bottom: none;
		margin-left: auto;
		margin-right: auto;
		padding-top: 0;
	}
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	h3 {
		font-size: 1.8rem;
		margin-top: 15px;
		margin-bottom: 5px;
		text-transform: capitalize;
	}
	h4 {
		font-size: 1.1rem;
		text-transform: uppercase;
		align-self: center;
		letter-spacing: 0.05em;
		margin: 0;
		margin-bottom: 10px;
		&.gray {
			color: rgba(0, 0, 0, 0.5);
		}
	}
	p {
		font-size: 1.1rem;
		width: 90%;
	}
	img {
		max-width: 100%;
		object-fit: cover;
	}
	> * {
		margin-right: 20px;
	}
`;

const Index = () => {
	return (
		<>
			<Column className="l" columnStart={5}>
				<Card
					style={{
						padding: "20px",
					}}
				>
					<Container>
						<h4> best adventures</h4>
					</Container>
					<Container>
						<img src={imageOne}></img>
						<div>
							<h3>Dreamy days in the desert</h3>
							<h4 className="gray"> Travel | Trips</h4>
							<p>{content[0]}</p>
						</div>
					</Container>
					<Container>
						<img src={imageTwo}></img>
						<div>
							<h3>A walk through the forest</h3>
							<h4 className="gray"> Travel | Trips</h4>
							<p>{content[0]}</p>
						</div>
					</Container>
					<Container>
						<img src={imageThree}></img>
						<div>
							<h3>Misty Mountain Adventures</h3>
							<h4 className="gray"> Travel | Trips</h4>
							<p>{content[0]}</p>
						</div>
					</Container>
					<Container>
						<img src={imageFour}></img>
						<div>
							<h3>Minimalist Ceramics for every occasion</h3>
							<h4 className="gray"> Ceramics | Crafts</h4>
							<p>{content[0]}</p>
						</div>
					</Container>
				</Card>
			</Column>
		</>
	);
};

export default Index;

var content = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at elit sed felis egestas hendrerit. Curabitur vulputate, mauris id efficitur laoreet, erat nulla congue tortor, nec efficitur augue lorem ut risus.",
];
