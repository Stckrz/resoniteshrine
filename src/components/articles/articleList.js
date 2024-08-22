import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getArticles } from '../../library/api/articleapi/articleApi';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../common/pagination';
const ArticleList = ({ articleListType }) => {
    const [articles, setArticles] = useState([]);
    const [pageInformation, setPageInformation] = useState();
    const { page: pageParam } = useParams();
    const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);
    const articleFetch = async () => {
        try {
            const fetchedArticles = await getArticles(page, articleListType);
            const pageInformationObject = {
                count: fetchedArticles.count,
                next: fetchedArticles.next,
                previous: fetchedArticles.previous
            };
            setArticles(fetchedArticles.results);
            setPageInformation(pageInformationObject);
        }
        catch (error) {
            console.log("An error has occurred", error);
        }
    };
    useEffect(() => {
        articleFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    useEffect(() => {
        setPage(pageParam ? parseInt(pageParam) : 1);
    }, [pageParam]);
    return (_jsxs("div", { className: "p-2", children: [_jsx("div", { className: "text-2xl", children: articleListType === 'article' ? "Articles" : "Tutorials" }), pageInformation &&
                _jsx(Pagination, { pageInformation: pageInformation, page: page, pageType: articleListType === 'article' ? 'articleList' : 'tutorialList' }), articles.map((article) => {
                return (_jsxs("div", { className: "flex border border-gray-500 rounded md:m-4 md:p-2 min-h-24", children: [article.mainImage &&
                            _jsx("div", { className: 'self-center h-1/2 w-1/2', children: _jsx("img", { className: "object-contain", src: article.mainImage }) }), _jsxs("div", { className: "flex flex-col w-full h-full m-2", children: [_jsxs("div", { className: "flex w-full justify-between border-b border-b-gray-400", children: [_jsx(Link, { to: `/articles/${article.id}`, children: _jsx("h1", { className: "md:text-xl text-sm", children: article.title }) }, article.id), _jsx("p", { className: "text-xs m-0 p-0", children: article.created_at &&
                                                new Date(article.created_at).toLocaleDateString() })] }), _jsx("div", { className: "md:mx-4 md:p-2 text-sm md:text-lg", children: article.summary })] })] }, article.id));
            })] }));
};
export default ArticleList;
