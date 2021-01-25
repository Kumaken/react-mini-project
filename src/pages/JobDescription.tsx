import { fetchJobDesc } from 'api/jobs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Columns from 'react-bulma-components/lib/components/columns';
import Image from 'react-bulma-components/lib/components/image';
import DOMPurify from 'dompurify';

const JobDescription = (props: any) => {
	// retrieve params into a variable
	const params = useParams();

	// print params to console
	console.log(params);

	const [jobDesc, setJobDesc] = useState<any>();

	useEffect(() => {
		const { cancel, request } = fetchJobDesc(params.id);
		request
			.then((data) => {
				console.log(data);
				setJobDesc(data);
			})
			.catch((err) => {
				console.log(err);
			});

		return () => {
			cancel();
		};
	}, []);

	const JobHeader = () => {
		if (!jobDesc) return;
		return (
			<div>
				<h3>
					{jobDesc.type} / {jobDesc.location}
				</h3>
				<h1>{jobDesc.title}</h1>
				<hr></hr>
			</div>
		);
	};

	const JobContent = () => {
		if (!jobDesc) return;
		return (
			<Columns>
				<Columns.Column>
					<div
						className="job-desc-content"
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(jobDesc.description, {})
						}}
					/>
				</Columns.Column>
				<Columns.Column>
					<Image rounded className="company-logo" src={jobDesc.company_logo}></Image>
				</Columns.Column>
			</Columns>
		);
	};

	return (
		<div>
			{JobHeader()}
			{JobContent()}
		</div>
	);
};

export default JobDescription;
