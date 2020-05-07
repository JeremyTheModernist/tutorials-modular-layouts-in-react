import React from "react";
import Column from "../Column";
import Card from "../Card";

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
			<Column className="m">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<h3>White and Black Mountain Wallpaper</h3>
						<p>by Joyston Judah</p>
					</Container>
				</Card>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/15382/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
						<h3>Mountain Range</h3>
						<p>by Roman Pohorecki</p>
					</Container>
				</Card>
			</Column>
			<Column className="xs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/1352196/pexels-photo-1352196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<h3>Landscape Photography of Brown Field</h3>
						<p>by Emiliano Arano</p>
					</Container>
				</Card>
			</Column>
			<Column className="xxs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/139399/bull-landscape-nature-mammal-139399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<h4>Brown Bull on Green Glass Field</h4>
						<p>by Pixabay</p>
					</Container>
				</Card>
			</Column>
			<Column className="xxs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<h4>Mountain Covered Snow Under Star</h4>
						<p>by Eberhard Grossgasteiger</p>
					</Container>
				</Card>
			</Column>
			<Column className="xxs">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<h4>Scenic View of Lake and Mountains Against Sky</h4>
						<p>by Pixabay</p>
					</Container>
				</Card>
			</Column>
			<Column className="m">
				<Card>
					<Container>
						<img src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<h3>
							Aerial Photography of Pine Trees on the Mountain
						</h3>
						<p>by Creative Vix</p>
					</Container>
				</Card>
			</Column>
		</>
	);
};

export default Index;
