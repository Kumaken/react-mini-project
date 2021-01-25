import { useContext } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import './JobSearch.scss';
import { useState } from 'react';
import { JobSearchContext } from 'contexts/JobSearch';

const JobSearch = (props: any) => {
	const [searchFilter, setSearchFilter] = useState<any>({
		jobdesc: '',
		location: '',
		fulltime: false
	});
	const { fulltime, setJobdesc, setLocation, setFulltime, setSearchNow } = useContext(JobSearchContext);

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
								value={searchFilter.jobdesc}
								onInput={(e) => {
									let event = e.target as HTMLInputElement;
									setSearchFilter({ ...searchFilter, jobdesc: event.value });
									// setJobdesc(event.value);
								}}
							/>
						</div>
					</div>
				</Columns.Column>
				<Columns.Column>
					<div className="control">
						<input
							className="input"
							type="text"
							value={searchFilter.location}
							placeholder="Filter by location"
							onInput={(e) => {
								let event = e.target as HTMLInputElement;
								setSearchFilter({ ...searchFilter, location: event.value });
								// setJobdesc(event.value);
							}}
						/>
					</div>
				</Columns.Column>
				<Columns.Column>
					<label className="checkbox">
						<input
							type="checkbox"
							value={searchFilter.fulltime}
							onChange={() => {
								setSearchFilter({ ...searchFilter, fulltime: !searchFilter.fulltime });
							}}
						/>
						Full-time only
					</label>
					<div className="control">
						<p
							className="button is-info"
							onClick={() => {
								setJobdesc(searchFilter.jobdesc.toLocaleLowerCase());
								setLocation(searchFilter.location.toLocaleLowerCase());
								setFulltime(fulltime);
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
