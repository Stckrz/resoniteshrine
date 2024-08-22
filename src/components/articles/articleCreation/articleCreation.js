import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import CreationSummary from './creationSummary';
import ArticleForm from './articleForm';
import SectionForm from './sectionForm';
import ArticleCreationConfirm from './articleCreationConfirm';
import { ArticleModelDefault, SectionModelDefault } from '../../../models/articleModels';
import { useViewport } from '../../../hooks/useViewport';
const ArticleCreation = () => {
    const [cookie] = useCookies(['userInfo']);
    const [articleInfo, setArticleInfo] = useState(ArticleModelDefault);
    const [sections, setSections] = useState([SectionModelDefault]);
    const [sectionImages, setSectionImages] = useState([]);
    const [confirmModalShown, setConfirmModalShown] = useState(false);
    const [sectionIdCounter, setSectionIdCounter] = useState(1);
    const width = useViewport().width;
    const addSectionHandler = () => {
        setSectionIdCounter(sectionIdCounter + 1);
        const newSection = { ...SectionModelDefault, id: sectionIdCounter };
        setSections([...sections, newSection]);
    };
    console.log('creationSentToConfirm', articleInfo);
    return (cookie.userInfo?.is_admin
        ? _jsx("div", { className: "flex justify-between h-full relative", children: confirmModalShown
                ? _jsx("div", { className: "abolute top-0 bottom-0 left-0 right-0 h-full w-full border", children: _jsx(ArticleCreationConfirm, { setConfirmModalShown: setConfirmModalShown, articleInfo: articleInfo, sections: sections, sectionImages: sectionImages }) })
                : _jsxs("div", { className: "h-full w-full flex justify-between", children: [_jsxs("div", { className: "flex flex-grow flex-col items-center gap-4 overflow-auto", children: [_jsx(ArticleForm, { setArticleInfo: setArticleInfo, articleInfo: articleInfo }), sections.map((section) => {
                                    return (_jsx(SectionForm, { section: section, sections: sections, setSections: setSections, sectionImages: sectionImages, setSectionImages: setSectionImages }, section.id));
                                }), _jsx("button", { className: "ez-button m-2", onClick: () => { addSectionHandler(); }, children: "Add section" }), _jsx("button", { onClick: () => { setConfirmModalShown(true); }, className: "w-1/4 py-1 px-2 border border-gray-700 self-center", children: "Finalize" })] }), width > 800 &&
                            _jsx(CreationSummary, { articleInfo: articleInfo, sections: sections, sectionImages: sectionImages })] }) })
        : _jsx("div", { children: "you are not allowed here" }));
};
export default ArticleCreation;
