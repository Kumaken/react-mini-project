import React from 'react';

// Context:
export const LoginContext = React.createContext({
	isLoggedIn: false,
	setIsLoggedIn: (key: boolean) => {},
	username: '',
	setUsername: (key: string) => {},
	imageUrl: '',
	setImageUrl: (key: string) => {}
});
