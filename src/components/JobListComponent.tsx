import { JobSearchContext } from 'contexts/JobSearch';
import React, { useContext, useEffect, useState } from 'react';
import Box from 'react-bulma-components/lib/components/box';
import List from 'react-bulma-components/lib/components/list';
import Columns from 'react-bulma-components/lib/components/columns';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';

import './JobListComponent.scss';
import DateUtil from 'utils/DateUtil';

const JobListComponent = (props: any) => {
	const [queryResult, setQueryResult] = useState<any>();
	const { jobdesc, location, fulltime, searchNow, setSearchNow } = useContext(JobSearchContext);

	useEffect(() => {
		console.log('use effect called');
		setQueryResult(props.jobList);
	}, [props.jobList]);

	useEffect(() => {
		const filterQuery = () => {
			let jobdesc_filtered;
			if (jobdesc !== '')
				jobdesc_filtered = props.jobList.filter((job) => job.description.toLocaleLowerCase().includes(jobdesc));
			else jobdesc_filtered = props.jobList;

			let loc_filtered;
			if (location !== '')
				loc_filtered = jobdesc_filtered.filter((job) => job.location.toLocaleLowerCase().includes(location));
			else loc_filtered = jobdesc_filtered;

			let ft_filtered;
			console.log('fulltime?', fulltime);
			if (fulltime)
				ft_filtered = loc_filtered.filter((job) => job.type.toLocaleLowerCase().includes('full time'));
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
		// console.log(queryResult);
		if (!queryResult) return;
		const jobElements: JSX.Element[] = [];
		queryResult.forEach((job) => {
			jobElements.push(
				<Link key={job.id} to={`/job-desc/${job.id}`}>
					<List.Item className="job-entry">
						<Columns className="job-upper-row">
							<Columns.Column className="job-column-left">
								<p className="job-title job-entry-left">{job.title}</p>
							</Columns.Column>
							<Columns.Column className="job-column-right">
								<p className="job-location job-entry-right">{job.location}</p>
							</Columns.Column>
						</Columns>
						<Columns className="job-lower-row">
							<Columns.Column className="job-column-left">
								<p className="job-subtitle job-entry-left">
									{job.company} - <b>{job.type}</b>
								</p>
							</Columns.Column>
							<Columns.Column className="job-column-right">
								<p className=" job-subtitle job-entry-right">
									{DateUtil.getDatesDiffInDays(new Date(), new Date(job.created_at))} days ago
								</p>
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
			<h1 className="job-list-title">Job List</h1>
			<List hoverable>{iterateJobs()}</List>
		</Box>
	);
};

export default JobListComponent;
