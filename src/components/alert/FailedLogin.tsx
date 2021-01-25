import React, { useContext } from 'react';
import Notification from 'react-bulma-components/lib/components/notification';
import Button from 'react-bulma-components/lib/components/button';
import { AlertContext } from 'contexts/Alert';
import { CSSTransition } from 'react-transition-group';
import Algorithm from 'utils/Algorithm';

const FailedLogin = () => {
	const { loginFailAlert, setLoginFailAlert } = useContext(AlertContext);

	return (
		<CSSTransition
			in={loginFailAlert}
			timeout={{ enter: 300, exit: 400 }}
			classNames="alert"
			unmountOnExit
			onEnter={async () => {
				await Algorithm.delay(2000);
				setLoginFailAlert(false);
			}}
		>
			<Notification color="danger">
				Wrong credentials! Please try again.
				<Button
					remove
					onClick={() => {
						setLoginFailAlert(false);
					}}
				/>
			</Notification>
		</CSSTransition>
	);
};

export default FailedLogin;
