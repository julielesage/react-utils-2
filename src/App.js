import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Menu from './components/Menu';
import SWR from "./lessons/SWR";
import './styles/index.scss';

function App() {
	return (
		<Router>
			<Menu />
			<div>
				<div className="wrapper">
					<Switch>
						<Route path="/">
							<SWR />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
