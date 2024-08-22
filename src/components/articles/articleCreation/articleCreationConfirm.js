import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Article from '../articleView';
import { postArticle, postArticleSection, postSectionImage } from '../../../library/api/articleapi/articleApi';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const ArticleCreationConfirm = ({ setConfirmModalShown, articleInfo, sections, sectionImages }) => {
    const [cookie] = useCookies(['userInfo']);
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState([""]);
    const [articleObject] = useState({
        id: 0,
        title: articleInfo.title,
        articleType: articleInfo.articleType,
        summary: articleInfo.summary,
        mainImage: articleInfo.mainImage,
        sections: sections
    });
    const errorMessageHandler = (errorObject) => {
        setErrorMessages([]);
        const temp = [];
        for (const [key, value] of Object.entries(errorObject)) {
            temp.push(`${key}: ${value}`);
        }
        setErrorMessages(temp);
    };
    const fetchSectionImagePost = (articleId, section) => {
        for (let i = 0; i < sectionImages.length; i++)
            if (sectionImages[i].sectionTitle === section.section_title) {
                const imageObject = {
                    article: articleId,
                    section: section.id,
                    image_url: sectionImages[i].image_url
                };
                const a = postSectionImage(cookie.userInfo?.token, imageObject);
                console.log(a);
            }
    };
    async function fetchPostArticle() {
        console.log("sentRequest", articleInfo);
        const data = await postArticle(cookie.userInfo?.token, articleInfo);
        if (data.id) {
            for (let i = 0; i < sections.length; i++) {
                const sectionData = await postArticleSection(cookie.userInfo?.token, sections[i], data.id);
                if (sectionData) {
                    fetchSectionImagePost(data.id, sectionData);
                }
            }
            navigate('/');
        }
        else {
            errorMessageHandler(data);
        }
    }
    console.log("sectionImages", sectionImages);
    return (_jsxs("div", { className: "border h-full w-full", children: [_jsx("button", { className: "w-1/6 py-1 px-2 self-end border border-gray-700", onClick: () => { setConfirmModalShown(false); }, children: "cancel" }), _jsx(Article, { article: articleObject, sectionImages: sectionImages }), _jsx("button", { className: "md:w-1/6 m-2 p-2 flex items-center justify-center md:py-1 md:px-2 self-end border border-gray-700", onClick: () => { fetchPostArticle(); }, children: "Confirm" }), errorMessages.length > 0 &&
                errorMessages.map((error, index) => {
                    return (_jsx("div", { children: error }, index));
                })] }));
};
export default ArticleCreationConfirm;
