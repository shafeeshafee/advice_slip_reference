import "./App.css";
import Advice from "./components/Advice";
import Nav from "./components/Nav";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="header">
				<h1>Advice App</h1>
			</div>

			<Advice />
		</div>
	);
}

export default App;
