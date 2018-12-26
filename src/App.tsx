// import lib
import * as React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom"

// import styles
import 'antd/dist/antd.css'
import './App.scss';

// import assets

// import components
import Menu from '@/components/BASE/MENU'

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends React.Component {
	public state = {
		size: 'large',
	};

	public handleSizeChange = (e: any) => {
		this.setState({ size: e.target.value });
	};

	public render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Menu />
					<Link to="/">Home</Link>
					<Link to="/about/">About</Link>
					<Link to="/users/">Users</Link>
					<Route path="/" exact={true} component={Index} />
					<Route path="/about/" component={About} />
					<Route path="/users/" component={Users} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
