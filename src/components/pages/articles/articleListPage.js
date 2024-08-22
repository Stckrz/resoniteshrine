import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ArticleList from '../../articles/articleList';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
const ArticleListPage = () => {
    const [cookie] = useCookies(['userInfo']);
    return (_jsxs("div", { className: "flex flex-col", children: [cookie.userInfo?.is_admin &&
                _jsx(Link, { to: "/articleCreate", children: _jsx("div", { className: "flex self-end p-2", children: "Create" }) }), _jsx(ArticleList, { articleListType: 'article' })] }));
};
export default ArticleListPage;
