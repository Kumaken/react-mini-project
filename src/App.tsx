import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JobList from 'pages/JobList';
import JobDescription from 'pages/JobDescription';
import Login from 'pages/Login';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<Switch>
						<Route path="/" exact>
							<JobList></JobList>
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/job-list">
							<JobList></JobList>
						</Route>
						<Route path="/job-desc/:id">
							<JobDescription />
						</Route>
					</Switch>
				</BrowserRouter>
				{/* <img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a> */}
			</header>
		</div>
	);
}

export default App;
