import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useViewport } from '../../hooks/useViewport';
const SideBar = ({ setHamburgerShown }) => {
    const width = useViewport().width;
    if (width > 800) {
        return (_jsx("div", { className: "flex w-48 border-r border-black", children: _jsxs("div", { className: "flex flex-col w-full", children: [_jsx(Link, { to: "articleList/1", children: _jsx("div", { className: "flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer", children: "Articles" }) }), _jsx(Link, { to: "tutorialList/1", children: _jsx("div", { className: "flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer", children: "Tutorials" }) }), _jsx(Link, { to: "gallery/1", children: _jsx("div", { className: "flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer", children: "Gallery" }) })] }) }));
    }
    else {
        return (_jsx("div", { className: "absolute top-14 bottom-0 right-0 left-0 h-full w-full bg-gray-900", children: _jsxs("div", { className: "flex flex-col w-full", children: [_jsx(Link, { onClick: () => { setHamburgerShown(false); }, to: "articleList/1", children: _jsx("div", { className: "flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer", children: "Articles" }) }), _jsx(Link, { onClick: () => { setHamburgerShown(false); }, to: "tutorialList/1", children: _jsx("div", { className: "flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer", children: "Tutorials" }) }), _jsx(Link, { to: "gallery", children: _jsx("div", { className: "flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer", children: "Gallery" }) })] }) }));
    }
};
export default SideBar;
