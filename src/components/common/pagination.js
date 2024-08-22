import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
const Pagination = ({ pageInformation, page, pageType }) => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "flex w-full justify-between", children: [_jsxs("div", { children: [pageInformation.previous &&
                        _jsx("div", { className: "cursor-pointer", onClick: () => { navigate(`/${pageType}/${page - 1}`); }, children: "prev" }), pageInformation.next &&
                        _jsx("div", { className: "cursor-pointer", onClick: () => { navigate(`/${pageType}/${page + 1}`); }, children: "next" })] }), _jsxs("div", { children: ["results: ", pageInformation.count] })] }));
};
export default Pagination;
