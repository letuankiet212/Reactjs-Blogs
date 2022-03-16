import { Route, Switch } from "react-router-dom";
import Blog from "./views/Blog";
import Home from "./views/Home";
function App() {
	return (
		<div className="container">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/blog" component={Blog} />
			</Switch>
		</div>
	);
}

export default App;
