import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ImageForm from './imageForm';
const ArticleForm = ({ articleInfo, setArticleInfo }) => {
    const [title, setTitle] = useState("");
    const [articleType, setArticleType] = useState("article");
    const [summary, setSummary] = useState("");
    const [mainImage, setMainImage] = useState([]);
    const [formShown, setFormShown] = useState(true);
    const [errorMessages, setErrorMessages] = useState([]);
    const validArticleCheck = () => {
        const errorMessages = [];
        if (title === "") {
            errorMessages.push("Field must not be empty: 'Title'");
        }
        if (articleType === "") {
            errorMessages.push("Field must not be empty: 'ArticleType'");
        }
        if (summary === "") {
            errorMessages.push("Field must not be empty: 'Summary'");
        }
        if (errorMessages.length === 0) {
            articleInfoHandler();
        }
        else {
            setErrorMessages(errorMessages);
        }
    };
    const articleInfoHandler = () => {
        setArticleInfo({
            ...articleInfo,
            title: title,
            articleType: articleType,
            summary: summary,
            mainImage: mainImage[0]
        });
        setFormShown(false);
    };
    return (formShown
        ? _jsxs("div", { className: "flex gap-2 flex-col justify-between w-11/12 md:w-2/3 border p-2", children: ["Article Info:", _jsx("div", { children: "Title:" }), _jsx("input", { className: "ez-input", value: title, onChange: e => setTitle(e.target.value) }), _jsx("div", { children: "Article Type:" }), _jsx("input", { className: "ez-input", value: articleType, onChange: e => setArticleType(e.target.value) }), _jsx("div", { children: "Summary:" }), _jsx("textarea", { className: "ez-input resize-none", value: summary, onChange: e => setSummary(e.target.value) }), _jsx(ImageForm, { images: mainImage, setImages: setMainImage }), _jsxs("div", { className: "flex justify-between", children: [_jsx("div", { children: errorMessages.length > 0 &&
                                errorMessages.map((error, index) => {
                                    return (_jsx("div", { className: "text-red-700", children: error }, index));
                                }) }), _jsx("button", { className: "ez-button", onClick: () => { validArticleCheck(); }, children: "update" })] })] })
        :
            _jsxs("div", { className: "flex gap-2 flex-col justify-between w-2/3 border p-2", children: ["Article Info:", _jsx("button", { className: "ez-button", onClick: () => { setFormShown(true); }, children: "Edit" })] }));
};
export default ArticleForm;
