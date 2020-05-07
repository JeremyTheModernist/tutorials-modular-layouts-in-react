import React from "react";
import styled from "styled-components";
import Column from "../Column";
import GalleryColumn from "../GalleryColumn/index";

const Container = styled.div`
	display: flex;
	flex-flow: column wrap;
	img {
		max-width: 100%;
		object-fit: cover;
	}
	font-size: 1.3rem;
	h3 {
		font-size: 2.1rem;
		margin-bottom: 0px;
	}
	h4 {
		font-size: 1.6rem;
		margin-bottom: 0px;
	}
	margin-bottom: 80px;
`;

const Index = () => {
	return (
		<>
			<GalleryColumn className="m">
				<Container>
					<img src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
					<h3>Landscape Photography of Snowy Mountain</h3>
					<p>by eberhard grossgasteiger</p>
				</Container>
			</GalleryColumn>
			<GalleryColumn className="s" columnStart="9">
				<Container>
					<img src="https://images.pexels.com/photos/2217365/pexels-photo-2217365.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
					<h3>Landscape Photo of Riverand Pine Trees</h3>
					<p>by eberhard grossgasteiger</p>
				</Container>
			</GalleryColumn>
			<GalleryColumn className="l" columnStart="3">
				<Container>
					<img src="https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
					<h3>Brown Wooden Dock Surrounded With Green Grass</h3>
					<p>by Tyler Lastovich</p>
				</Container>
			</GalleryColumn>
			<GalleryColumn className="m">
				<Container>
					<img src="https://images.pexels.com/photos/1308185/pexels-photo-1308185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
					<h3>Hobbit House</h3>
					<p>by Tyler Lastovich</p>
				</Container>
			</GalleryColumn>
			<GalleryColumn className="m">
				<Container>
					<img src="https://images.pexels.com/photos/850672/pexels-photo-850672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
					<h3>Brown Cattle</h3>
					<p>by Tyler Lastovich</p>
				</Container>
			</GalleryColumn>
			<GalleryColumn className="m" columnStart="3">
				<Container>
					<img src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
					<h3>Empty Highway Overlooking Mountain</h3>
					<p>by Sebastian Palomino</p>
				</Container>
			</GalleryColumn>
		</>
	);
};
export default Index;
