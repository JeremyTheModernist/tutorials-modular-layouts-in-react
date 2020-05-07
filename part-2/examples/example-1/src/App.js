import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";
import Column from "./Column";
import Card from "./Card";
import Navigation from "./Nav";

import Top from "./Home/Top";
import Middle from "./Home/Middle/index";
import Bottom from "./Home/Bottom/index";
import SectionHeader from "./Section/Header";

import { GlobalStyle } from "./GlobalStyles";

var { useEffect, useState } = React;

function App() {
	var [state, setState] = useState([]);
	return (
		<>
			<GlobalStyle />
			<div className="App">
				<Grid>
					<Navigation />
					<Top />
					<Middle />
					<SectionHeader />
					<Bottom />
				</Grid>
			</div>
		</>
	);
}

export default App;
