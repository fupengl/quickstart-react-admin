// import lib
import * as React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom"

// import styles
import 'antd/dist/antd.css'
import './App.scss';

// import assets
import logo from '@/assets/logo.svg';

// import components
import { Radio } from 'antd';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{process.env.REACT_APP_API_HOST}</p>

        <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>

        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/users/">Users</Link>
            <Route path="/" exact={true} component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
