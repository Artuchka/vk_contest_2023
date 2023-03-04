import { useState } from "react"

import "./styles/index.scss"
import { Board } from "./components/Board"
import { Digit } from "./components/Digit"

function App() {
	return (
		<div className="App">
			<Board />
			<div id="preload">
				<Digit number={0} />
				<Digit number={1} />
				<Digit number={2} />
				<Digit number={3} />
				<Digit number={4} />
				<Digit number={5} />
				<Digit number={6} />
				<Digit number={7} />
				<Digit number={8} />
				<Digit number={9} />
			</div>
		</div>
	)
}

export default App
