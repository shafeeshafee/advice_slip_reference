import "./App.css";
import Advice from "./components/Advice";
import Nav from "./components/Nav";

function App() {
	return (
		<div className="App">
			<Nav />

			<div className="content">
				<div className="header">
					<h1>STOP! Get advice first.</h1>
				</div>

				<Advice />
			</div>
		</div>
	);
}

export default App;
