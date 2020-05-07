import React from "react";
import "./App.css";

import Grid from "./Grid";
import Card from "./Card";
import Column from "./Column";

import Top from "./Sections/Top";

function App() {
	return (
		<div className="App">
			<Grid>
				<Top />
			</Grid>
		</div>
	);
}

export default App;
