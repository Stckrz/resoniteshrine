import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import resShrineLogo from '../../assets/images/resoniteShrineLogo.png';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const Header = () => {
    const [cookie] = useCookies(["userInfo"]);
    return (_jsxs("div", { className: "flex w-full h-14 items-center justify-between p-1 border-b border-black", children: [_jsx("div", { className: "flex h-full w-1/3 md:w-1/6 items-center", children: _jsx(Link, { to: "/", children: _jsx("img", { className: "object-contain max-w-34 min-w-34", src: resShrineLogo }) }) }), _jsx("div", { children: cookie.userInfo?.user ?
                    _jsx("div", { className: "flex justify-center items-center h-full px-2", children: cookie.userInfo.user })
                    :
                        _jsx(Link, { to: "login", children: _jsx("div", { className: "flex justify-center items-center h-full px-2 cursor-pointer", children: "login" }) }) })] }));
};
export default Header;
