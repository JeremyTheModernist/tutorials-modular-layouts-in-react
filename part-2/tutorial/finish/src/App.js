import React from "react";
import "./App.css";

import Grid from "./Grid";
import Card from "./Card";
import Column from "./Column";

import Top from "./Sections/Top";
import Lookbook from "./Sections/Lookbook";
import GalleryGrid from "./GalleryGrid/index";

function App() {
	return (
		<div className="App">
			<GalleryGrid>
				<Lookbook />
			</GalleryGrid>
		</div>
	);
}

export default App;
