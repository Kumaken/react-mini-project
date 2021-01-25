import { LoginContext } from 'contexts/Login';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const CheckIfLoggedIn = (): boolean => {
	const { isLoggedIn } = useContext(LoginContext);

	// return isLoggedIn;
	return true;
};

export default CheckIfLoggedIn;
