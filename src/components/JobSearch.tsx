import { useContext } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import { Label } from 'react-bulma-components/lib/components/form';
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
		return (
			<Columns className="is-vcentered">
				<Columns.Column size={4}>
					<div className="control searchbar-text">
						<Label className="searchbar-text">Job Description</Label>
						<input
							className="input searchbar-text is-primary"
							type="text"
							placeholder="Filter by title, benefits, companies, expertise"
							value={searchFilter.jobdesc}
							onInput={(e) => {
								let event = e.target as HTMLInputElement;
								setSearchFilter({ ...searchFilter, jobdesc: event.value });
								// setJobdesc(event.value);
							}}
						/>
					</div>
				</Columns.Column>
				<Columns.Column size={4}>
					<div className="control">
						<Label className="searchbar-text">Location</Label>
						<input
							className="input searchbar-text is-primary"
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
				<Columns.Column size={2}>
					<label className="checkbox">
						<input
							className="searchbar-text"
							type="checkbox"
							value={searchFilter.fulltime}
							onChange={() => {
								setSearchFilter({ ...searchFilter, fulltime: !searchFilter.fulltime });
							}}
						/>
						<span className="searchbar-text">&nbsp;Full-time only</span>
					</label>
				</Columns.Column>
				<Columns.Column size={2}>
					<div className="control">
						<div
							className="searchbar-text search-button button is-info"
							onClick={() => {
								setJobdesc(searchFilter.jobdesc.toLocaleLowerCase());
								setLocation(searchFilter.location.toLocaleLowerCase());
								setFulltime(searchFilter.fulltime);
								setSearchNow(true);
							}}
						>
							Search
						</div>
					</div>
				</Columns.Column>
			</Columns>
		);
	};
	return <>{SearchBar()}</>;
};

export default JobSearch;
