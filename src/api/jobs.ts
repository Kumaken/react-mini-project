import axios from 'axios';

const GITHUB_JOB_PREFIX = 'https://jobs.github.com/positions';
const { CancelToken } = axios;

export const fetchJobList = () => {
	let cancel;
	return {
		request: axios({
			url: `${GITHUB_JOB_PREFIX}.json`,
			method: 'get',
			cancelToken: new CancelToken((c) => {
				cancel = c;
			})
		}).then((response) => {
			return response.data;
		}),
		cancel
	};
};

export const fetchJobDesc = (id: string) => {
	let cancel;
	return {
		request: axios({
			url: `${GITHUB_JOB_PREFIX}/${id}.json`,
			method: 'get',
			cancelToken: new CancelToken((c) => {
				cancel = c;
			})
		}).then((response) => {
			return response.data;
		}),
		cancel
	};
};
