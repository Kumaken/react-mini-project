import React from 'react';

// Context:
export const JobSearchContext = React.createContext({
	jobdesc: '',
	setJobdesc: (key: string) => {},
	location: '',
	setLocation: (key: string) => {},
	fulltime: false,
	setFulltime: (bool: boolean) => {},
	searchNow: false,
	setSearchNow: (bool: boolean) => {}
});
