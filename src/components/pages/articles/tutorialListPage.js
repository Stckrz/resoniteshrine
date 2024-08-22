import { jsx as _jsx } from "react/jsx-runtime";
import ArticleList from '../../articles/articleList';
const TutorialListPage = () => {
    return (_jsx("div", { className: "flex flex-col", children: _jsx(ArticleList, { articleListType: 'tutorial' }) }));
};
export default TutorialListPage;
