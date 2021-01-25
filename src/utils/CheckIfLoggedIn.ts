import { LoginContext } from 'contexts/Login';
import { useContext } from 'react';
import Cookies from 'universal-cookie';

const CheckIfLoggedIn = (): boolean => {
	const { isLoggedIn } = useContext(LoginContext);
	const cookies = new Cookies();
	const username = cookies.get('loggedInUser');
	if (username && username !== '') {
		console.log('cookies exist!');
		return true;
	}

	console.log('Logged in?', isLoggedIn);
	return isLoggedIn;
};

export default CheckIfLoggedIn;
