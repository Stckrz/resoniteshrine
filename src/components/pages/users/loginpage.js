import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { userLogin } from '../../../library/api/userapi/userApi';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
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
        }
        else {
            setErrorMessage(`Login failed: ${data.error}`);
        }
    }
    return (_jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center", children: [_jsxs("div", { className: "w-3/4 md:w-1/3 flex flex-col gap-2", children: [_jsx("div", { children: "Username:" }), _jsx("input", { className: "ez-input", onChange: e => setUsernameInput(e.target.value) }), _jsx("div", { children: "Password:" }), _jsx("input", { type: "password", className: "p-1 rounded", onChange: e => setPasswordInput(e.target.value) }), _jsx("button", { onClick: () => { fetchUserLogin(); }, className: "ez-button", children: "Login" })] }), _jsx("div", { children: errorMessage })] }));
};
export default LoginPage;
