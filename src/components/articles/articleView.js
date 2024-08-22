import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const Article = ({ article, sectionImages }) => {
    const [sections, setSections] = useState([]);
    useEffect(() => {
        setSections(article.sections);
    }, [article]);
    return (_jsxs("div", { className: "md:p-4 md:mx-4 flex flex-col", children: [_jsxs("div", { className: "flex justify-between my-6 p-4", children: [_jsx("h1", { className: "text-4xl", children: article.title }), _jsx("div", { className: "m-0 p-0", children: article.created_at &&
                            new Date(article.created_at).toLocaleDateString() })] }), _jsx("div", { className: "md:w-3/4 w-dvw md:my-4 self-center", children: _jsx("img", { className: "object-fit", src: article.mainImage }) }), sections.map((section) => {
                return (_jsxs("div", { className: "md:my-4", children: [section.images?.length > 0 &&
                            section.images.map((image) => {
                                return (_jsx("div", { className: "md:w-1/2 w-dvw md:my-2", children: _jsx("img", { className: "object-fit", src: image.image_url }) }, image.id));
                            }), sectionImages && sectionImages?.length > 0 &&
                            sectionImages.map((image, index) => {
                                return (image.sectionTitle === section.section_title &&
                                    _jsx("div", { className: "md:w-1/2 w-dvw md:my-2", children: _jsx("img", { className: "object-fit", src: image.image_url }) }, index));
                            }), _jsx("h2", { className: "text-2xl my-2 p-2", children: section.section_title }), _jsx("p", { className: "my-2 p-2", children: section.section_content })] }, section.id));
            })] }));
};
export default Article;
