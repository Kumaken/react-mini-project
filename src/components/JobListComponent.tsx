import { JobSearchContext } from 'contexts/JobSearch';
import React, { useContext, useEffect, useState } from 'react';
import Box from 'react-bulma-components/lib/components/box';
import List from 'react-bulma-components/lib/components/list';
import Columns from 'react-bulma-components/lib/components/columns';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';

const JobListComponent = (props: any) => {
	const [queryResult, setQueryResult] = useState<any>();
	const { jobdesc, location, fulltime, searchNow, setSearchNow } = useContext(JobSearchContext);

	useEffect(() => {
		console.log('use effect called');
		setQueryResult(props.jobList);
	}, [props.jobList]);

	useEffect(() => {
		const filterQuery = () => {
			console.log('filter query called');
			console.log(jobdesc, location, fulltime);

			let jobdesc_filtered;
			if (jobdesc !== '')
				jobdesc_filtered = props.jobList.filter((job) => job.description.toLocaleLowerCase().includes(jobdesc));
			else jobdesc_filtered = props.jobList;

			console.log('jobdesc filtered', jobdesc_filtered);

			let loc_filtered;
			if (location !== '')
				loc_filtered = jobdesc_filtered.filter((job) => job.location.toLocaleLowerCase().includes(location));
			else loc_filtered = jobdesc_filtered;

			console.log('loc_filtered filtered', loc_filtered);

			let ft_filtered;
			if (fulltime)
				ft_filtered = loc_filtered.filter((job) => job.type.toLocaleLowerCase().includes('Full Time'));
			else ft_filtered = loc_filtered;

			console.log('filter result', ft_filtered);
			setQueryResult(ft_filtered);
		};

		if (searchNow) {
			filterQuery();
			setSearchNow(false);
		}
	}, [fulltime, jobdesc, location, props.jobList, searchNow, setSearchNow]);

	const iterateJobs = useCallback(() => {
		console.log(queryResult);
		if (!queryResult) return;
		const jobElements: JSX.Element[] = [];
		queryResult.forEach((job) => {
			jobElements.push(
				<Link key={job.id} to={`/job-desc/${job.id}`}>
					<List.Item>
						<Columns>
							<Columns.Column>
								<p className="job-entry-left">{job.title}</p>
							</Columns.Column>
							<Columns.Column>
								<p className="job-entry-right">{job.location}</p>
							</Columns.Column>
						</Columns>
						<Columns>
							<Columns.Column>
								<p className="job-entry-left">
									{job.company} - {job.type}
								</p>
							</Columns.Column>
							<Columns.Column>
								<p className="job-entry-right">{job.created_at}</p>
							</Columns.Column>
						</Columns>
					</List.Item>
				</Link>
			);
		});

		return jobElements;
	}, [queryResult]);

	return (
		<Box>
			{console.log(props)}
			<h1 className="title">Job List</h1>
			<List hoverable>{iterateJobs()}</List>
		</Box>
	);
};

export default JobListComponent;
