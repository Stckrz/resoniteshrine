import React, { useState } from 'react';
import { userLogin } from '../../../library/api/userapi/userApi';
import { useCookies } from 'react-cookie';

const LoginPage: React.FC = () => {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [, setCookie] = useCookies(['userInfo']);
	const [errorMessage, setErrorMessage] = useState("");

	async function fetchUserLogin() {
		const data = await userLogin(usernameInput, passwordInput)
		if (data.user) {
			setCookie('userInfo', data, { path: '/', maxAge: 1800 })
		} else {
			setErrorMessage(`Login failed: ${data.error}`)
		}
	}

	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<div className="w-1/3 flex flex-col gap-2">
				<div>
					Username:
				</div>
				<input className="p-1 rounded" onChange={e => setUsernameInput(e.target.value)} />
				<div>
					Password:
				</div>
				<input type={passwordInput} className="p-1 rounded" onChange={e => setPasswordInput(e.target.value)} />
				<button onClick={() => { fetchUserLogin() }} className="w-1/3 py-1 px-2 self-end">Login</button>
			</div>
			<div>
				{errorMessage}
			</div>
		</div>
	)
}

export default LoginPage;
