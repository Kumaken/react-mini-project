import React from 'react';
import './Login.scss';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bulma-components/lib/components/button';

const Login = () => {
	const history = useHistory();

	// hardcode user credentials:
	const user_cred = {
		username: 'abcdef@gmail.com',
		password: '123456'
	};

	const [filledCreds, setFilledCreds] = useState<any>({
		username: '',
		password: ''
	});

	const checkCreds = () => {
		console.log(filledCreds.username, filledCreds.password, user_cred.username, user_cred.password);
		if (filledCreds.username === user_cred.username && filledCreds.password === user_cred.password) {
			console.log('redirecting...');
			history.replace('/job-list');
		}
	};

	return (
		<section className="login-form hero is-primary is-fullheight">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-5-tablet is-4-desktop is-3-widescreen">
							<form action="" className="box">
								<div className="field">
									<label className="label">Email</label>
									<div className="control has-icons-left">
										<input
											type="email"
											placeholder="e.g. bobsmith@gmail.com"
											className="input"
											required
											value={filledCreds.jobdesc}
											onInput={(e) => {
												let event = e.target as HTMLInputElement;
												setFilledCreds({ ...filledCreds, username: event.value });
											}}
										/>
										<span className="icon is-small is-left">
											<i className="fa fa-envelope"></i>
										</span>
									</div>
								</div>
								<div className="field">
									<label className="label">Password</label>
									<div className="control has-icons-left">
										<input
											type="password"
											placeholder="*******"
											className="input"
											value={filledCreds.password}
											onInput={(e) => {
												let event = e.target as HTMLInputElement;
												setFilledCreds({ ...filledCreds, password: event.value });
											}}
											required
										/>
										<span className="icon is-small is-left">
											<i className="fa fa-lock"></i>
										</span>
									</div>
								</div>
								<div className="field">
									<label className="checkbox">
										<input type="checkbox" />
										<p className="login-text">Remember me</p>
									</label>
								</div>
								<div className="field">
									<Button
										className="is-success"
										type="button"
										onClick={() => {
											checkCreds();
										}}
									>
										Login
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
