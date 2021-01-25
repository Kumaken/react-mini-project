import React, { useCallback, useContext, useEffect } from 'react';
import Box from 'react-bulma-components/lib/components/box';
import List from 'react-bulma-components/lib/components/list';
import Columns from 'react-bulma-components/lib/components/columns';
import { Link } from 'react-router-dom';
import './JobSearch.scss';
import { useState } from 'react';
import { JobSearchContext } from 'contexts/JobSearch';

const JobSearch = (props: any) => {
	// const [searchFilter, setSearchFilter] = useState<any>({
	// 	jobdesc: '',
	// 	location: '',
	// 	fulltime: false
	// });
	const { jobdesc, location, fulltime, searchNow, setJobdesc, setLocation, setFulltime, setSearchNow } = useContext(
		JobSearchContext
	);

	const SearchBar = () => {
		/* // <Field>
			// 	<Control>
			// 		<Input type="text" placeholder="Search jobs here..." />
			// 	</Control>
			// </Field> */
		return (
			<Columns>
				<Columns.Column>
					<div className="field has-addons">
						<div className="control">
							<input
								className="input"
								type="text"
								placeholder="Filter by job description"
								value={jobdesc}
								onInput={(e) => {
									let event = e.target as HTMLInputElement;
									setJobdesc(event.value);
								}}
							/>
						</div>
					</div>
				</Columns.Column>
				<Columns.Column>
					<div className="control">
						<input className="input" type="text" placeholder="Filter by location" />
					</div>
				</Columns.Column>
				<Columns.Column>
					<label className="checkbox">
						<input type="checkbox" />
						Full-time only
					</label>
					<div className="control">
						<p
							className="button is-info"
							onClick={() => {
								setSearchNow(true);
							}}
						>
							Search
						</p>
					</div>
				</Columns.Column>
			</Columns>
		);
	};
	return <>{SearchBar()}</>;
};

export default JobSearch;
