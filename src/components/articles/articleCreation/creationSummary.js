import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CreationSummary = ({ articleInfo, sections, sectionImages }) => {
    console.log(sectionImages);
    return (_jsxs("div", { className: "flex flex-col gap-2 p-2 w-1/6 border h-full", children: [_jsxs("div", { children: ["Article Info:", _jsx("div", { children: articleInfo.title }), _jsx("div", { children: articleInfo.articleType }), _jsx("div", { children: articleInfo.summary })] }), _jsxs("div", { className: "flex flex-col gap-1", children: ["Section Info:", sections.map((section) => {
                        return (_jsxs("div", { children: [_jsxs("div", { children: ["title:", section.section_title] }), _jsxs("div", { children: ["order:", section.order] }), _jsxs("div", { children: ["images:", sectionImages?.length > 0 ? sectionImages.length : 0] })] }, section.id));
                    })] })] }));
};
export default CreationSummary;
