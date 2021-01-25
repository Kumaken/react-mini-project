import { LoginContext } from 'contexts/Login';
import React, { useContext, useState } from 'react';
// import Navbar from 'react-bulma-components/lib/components/navbar';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { Link } from 'react-router-dom';
import './NavbarComponent.scss';

const NavbarComponent = () => {
	const { username } = useContext(LoginContext);
	const [navbarActive, setNavbarActive] = useState(false);

	// setting brand to active=false somehow fixes title position when in mobile view lol
	return (
		<Navbar color="black" fixed="top" active={navbarActive} transparent={false}>
			<Navbar.Brand className="brand" active={false}>
				<h1 className="title">GITHUB JOBS</h1>
				<Navbar.Burger onClick={() => setNavbarActive(!navbarActive)} />
			</Navbar.Brand>
			<Navbar.Menu className="navbar-menu">
				<Navbar.Container>
					<div className="navbar-item">
						<Link to="/news">All jobs</Link>
					</div>
				</Navbar.Container>
				<Navbar.Container position="end">
					{username !== '' ? (
						<Navbar.Item>
							Hello there, &nbsp;<b>{username}</b>
						</Navbar.Item>
					) : null}
				</Navbar.Container>
			</Navbar.Menu>
		</Navbar>
	);
};

export default NavbarComponent;

// import React from 'react';
// import Button from 'react-bulma-components/lib/components/button';

// export default () => <Button color="primary">My Bulma button</Button>;
