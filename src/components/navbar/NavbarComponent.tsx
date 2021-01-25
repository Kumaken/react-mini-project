import { LoginContext } from 'contexts/Login';
import { useContext, useState } from 'react';
// import Navbar from 'react-bulma-components/lib/components/navbar';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { Link } from 'react-router-dom';
import './NavbarComponent.scss';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

const NavbarComponent = () => {
	const { username, setIsLoggedIn } = useContext(LoginContext);
	const [navbarActive, setNavbarActive] = useState(false);
	const history = useHistory();

	const Logout = () => {
		const cookies = new Cookies();
		cookies.remove('loggedInUser');
		setIsLoggedIn(false);
		history.replace('/login');
	};

	// setting brand to active=false somehow fixes title position when in mobile view lol
	return (
		<Navbar color="black" fixed="top" active={navbarActive} transparent={false}>
			<Navbar.Brand className="brand" active={false.toString()}>
				<h1 className="title">
					<b>GITHUB</b> JOBS
				</h1>
				<Navbar.Burger onClick={() => setNavbarActive(!navbarActive)} />
			</Navbar.Brand>
			<Navbar.Menu className="navbar-menu">
				<Navbar.Container position="end">
					<div className="navbar-item">
						<Link to="/job-list">All jobs</Link>
					</div>
					{username !== '' ? (
						<Navbar.Item dropdown hoverable>
							<Navbar.Item arrowless={false} className="navbar-username">
								Hello there, &nbsp;<b>{username}</b>
							</Navbar.Item>
							<Navbar.Dropdown className="is-right">
								<Navbar.Item
									className="navbar-item-drop"
									onClick={() => {
										Logout();
									}}
								>
									Logout
								</Navbar.Item>
							</Navbar.Dropdown>
						</Navbar.Item>
					) : (
						<div className="navbar-item">
							<Link to="/login">Login</Link>
						</div>
					)}
				</Navbar.Container>
			</Navbar.Menu>
		</Navbar>
	);
};

export default NavbarComponent;

// import React from 'react';
// import Button from 'react-bulma-components/lib/components/button';

// export default () => <Button color="primary">My Bulma button</Button>;
