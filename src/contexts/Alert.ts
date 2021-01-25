import React from 'react';

// Context:
export const AlertContext = React.createContext({
	loginFailAlert: false,
	setLoginFailAlert: (key: boolean) => {}
});
