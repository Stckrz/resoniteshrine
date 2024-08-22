import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../../App.css';
import { useViewport } from '../../hooks/useViewport';
import { Outlet } from 'react-router-dom';
import hamburger from '../../assets/images/hamburger.svg';
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';
const Layout = () => {
    const [hamburgerShown, setHamburgerShown] = useState(false);
    const width = useViewport().width;
    return (_jsxs("div", { className: "flex flex-col justify-between items-center h-dvh w-dvw gap-1 overflow-x-hidden", children: [_jsxs("div", { className: "flex items-center w-full", children: [width < 800 &&
                        _jsx("div", { className: "h-full flex items-center justify-center border-b border-black", onClick: () => { setHamburgerShown(!hamburgerShown); }, children: _jsx("img", { className: "h-8 aspect-square", src: hamburger }) }), _jsx(Header, {})] }), _jsxs("div", { className: "flex w-full flex-grow", children: [(width > 800 || hamburgerShown) &&
                        _jsx("div", { className: "flex", children: _jsx(SideBar, { setHamburgerShown: setHamburgerShown }) }), _jsx("div", { className: "flex-grow flex-1", children: _jsx(Outlet, {}) })] }), _jsx(Footer, {})] }));
};
export default Layout;
