import { fetchJobList } from 'api/jobs';
import JobListComponent from 'components/JobListComponent';
import JobSearch from 'components/JobSearch';
import { JobSearchContext } from 'contexts/JobSearch';
import React, { useEffect, useState } from 'react';

import './JobList.scss';

const JobList = () => {
	const [jobList, setJobList] = useState<any[]>([]);
	const [jobdesc, setJobdesc] = useState<string>('');
	const [location, setLocation] = useState<string>('');
	const [fulltime, setFulltime] = useState<boolean>(false);
	const [searchNow, setSearchNow] = useState<boolean>(false);

	useEffect(() => {
		const { cancel, request } = fetchJobList();
		request
			.then((data) => {
				setJobList(data);
			})
			.catch((err) => {
				console.log(err);
			});

		return () => {
			cancel();
		};
	}, []);

	return (
		<JobSearchContext.Provider
			value={{ jobdesc, setJobdesc, location, searchNow, setLocation, fulltime, setFulltime, setSearchNow }}
		>
			<div className="joblist-container">
				<JobSearch jobList={jobList}></JobSearch>
				<JobListComponent jobList={jobList} />
			</div>
		</JobSearchContext.Provider>
	);
};

export default JobList;
