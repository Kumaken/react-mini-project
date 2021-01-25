import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JobList from 'pages/JobList';
import JobDescription from 'pages/JobDescription';
import Login from 'pages/Login';
import { LoginContext } from 'contexts/Login';
import AuthenticatedRoute from 'route/AuthenticatedRoute';
import { AlertContext } from 'contexts/Alert';
import Alerts from 'components/alert';
import NavbarComponent from 'components/navbar/NavbarComponent';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';

function App() {
	const [username, setUsername] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loginFailAlert, setLoginFailAlert] = useState(false);

	useEffect(() => {
		const cookies = new Cookies();
		const username = cookies.get('loggedInUser');
		if (username && username !== '') {
			console.log('cookies exist setting credentials!');
			setUsername(username);
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<AlertContext.Provider value={{ loginFailAlert, setLoginFailAlert }}>
					<LoginContext.Provider
						value={{ username, setUsername, imageUrl, setImageUrl, isLoggedIn, setIsLoggedIn }}
					>
						<Alerts></Alerts>
						<BrowserRouter>
							<NavbarComponent></NavbarComponent>
							<Switch>
								<AuthenticatedRoute path="/" component={JobList} exact></AuthenticatedRoute>
								<Route path="/login">
									<Login />
								</Route>
								<AuthenticatedRoute path="/job-list" component={JobList} exact></AuthenticatedRoute>
								<AuthenticatedRoute
									path="/job-desc/:id"
									component={JobDescription}
									exact
								></AuthenticatedRoute>
								{/* <Route path="/job-list">
								<JobList></JobList>
							</Route> */}
								{/* <Route path="/job-desc/:id">
								<JobDescription />
							</Route> */}
							</Switch>
						</BrowserRouter>
					</LoginContext.Provider>
				</AlertContext.Provider>
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
