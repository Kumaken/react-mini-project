import { fetchJobDesc } from 'api/jobs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Columns from 'react-bulma-components/lib/components/columns';
import Image from 'react-bulma-components/lib/components/image';
import DOMPurify from 'dompurify';
import Box from 'react-bulma-components/lib/components/box';

import './JobDescription.scss';

const JobDescription = (props: any) => {
	// retrieve params into a variable
	const params = useParams();

	const [jobDesc, setJobDesc] = useState<any>();

	useEffect(() => {
		const { cancel, request } = fetchJobDesc(params.id);
		request
			.then((data) => {
				setJobDesc(data);
			})
			.catch((err) => {
				console.log(err);
			});

		return () => {
			cancel();
		};
	}, [params.id]);

	const JobHeader = () => {
		if (!jobDesc) return;
		return (
			<div>
				<h3 className="jobdesc-subtitle">
					{jobDesc.type} / {jobDesc.location}
				</h3>
				<h1 className="jobdesc-title">{jobDesc.title}</h1>
				<hr></hr>
			</div>
		);
	};

	const JobContent = () => {
		if (!jobDesc) return;
		return (
			<Columns className="jobdesc-content">
				<Columns.Column size={8}>
					<div
						className="job-desc-content"
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(jobDesc.description, {})
						}}
					/>
				</Columns.Column>
				<Columns.Column size={4}>
					<Columns className="jobdesc-right-boxes">
						<Box className="jobdesc-logobox">
							<div className="jobdesc-company-name">{jobDesc.company}</div>
							<Box className="jobdesc-company-logo-container">
								<Image className="jobdesc-company-logo" src={jobDesc.company_logo}></Image>
							</Box>
							<div className="jobdesc-company-url">{jobDesc.company_url}</div>
						</Box>
					</Columns>
					<Columns className="jobdesc-right-boxes">
						<Box className="jobdesc-logobox jobdesc-yellow-boxes">
							<div className="jobdesc-company-name">How to apply</div>
							<div
								className="job-desc-content"
								// eslint-disable-next-line react/no-danger
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(jobDesc.how_to_apply, {})
								}}
							/>
						</Box>
					</Columns>
				</Columns.Column>
			</Columns>
		);
	};

	return (
		<div>
			<Box>
				{JobHeader()}
				{JobContent()}
			</Box>
		</div>
	);
};

export default JobDescription;
