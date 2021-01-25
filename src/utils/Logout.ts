import { LoginContext } from 'contexts/Login';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
const Logout = () => {
	const history = useHistory();
	const { setIsLoggedIn } = useContext(LoginContext);
	setIsLoggedIn(false);
	const cookies = new Cookies();
	cookies.remove('loggedInUser');

	history.replace('/login');
};

export default Logout;
