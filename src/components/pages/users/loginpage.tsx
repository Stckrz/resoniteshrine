import React, { useState } from 'react';
import { userLogin } from '../../../library/api/userapi/userApi';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [, setCookie] = useCookies(['userInfo']);
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	async function fetchUserLogin() {
		const data = await userLogin(usernameInput, passwordInput);
		if (data.user) {
			setCookie('userInfo', data, { path: '/', maxAge: 1800 });
			navigate('/');
		} else {
			setErrorMessage(`Login failed: ${data.error}`);
		}
	}

	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<div className="w-3/4 md:w-1/3 flex flex-col gap-2">
				<div>
					Username:
				</div>
				<input className="ez-input" onChange={e => setUsernameInput(e.target.value)} />
				<div>
					Password:
				</div>
				<input type={passwordInput} className="p-1 rounded" onChange={e => setPasswordInput(e.target.value)} />
				<button onClick={() => { fetchUserLogin() }} className="ez-button">Login</button>
			</div>
			<div>
				{errorMessage}
			</div>
		</div>
	)
}

export default LoginPage;
