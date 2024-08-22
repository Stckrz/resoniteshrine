import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ImageForm from './imageForm';
const SectionForm = ({ section, sections, setSections, sectionImages, setSectionImages }) => {
    const [title, setTitle] = useState(section.section_title);
    const [content, setContent] = useState(section.section_content);
    const [images, setImages] = useState([]);
    const [formShown, setFormShown] = useState(true);
    const [errorMessages, setErrorMessages] = useState([]);
    const imageObjectCreationHandler = () => {
        const objectArray = [];
        for (let i = 0; i < images.length; i++) {
            objectArray.push({
                sectionTitle: title,
                image_url: images[i]
            });
        }
        return (objectArray);
    };
    const validSectionCheck = () => {
        const errorMessages = [];
        if (title === "") {
            errorMessages.push("Field must not be empty: 'Title'");
        }
        if (content === "") {
            errorMessages.push("Field must not be empty: 'Content'");
        }
        if (errorMessages.length === 0) {
            submitSectionChangeHandler();
        }
        else {
            setErrorMessages(errorMessages);
        }
    };
    const submitSectionChangeHandler = () => {
        const sectionOrder = sections.findIndex((sec) => section.id === sec.id);
        const newSectionObject = {
            ...section,
            section_title: title,
            order: sectionOrder,
            section_content: content,
        };
        setSections(sections.map((sec) => sec.id === section.id ? newSectionObject : sec));
        const newImages = imageObjectCreationHandler();
        newImages.map((newImage) => {
            setSectionImages([...sectionImages, newImage]);
        });
        setFormShown(false);
    };
    const sectionRemove = () => {
        setSections(sections.filter((sec) => {
            return sec.id !== section.id;
        }));
    };
    return (formShown
        ? _jsxs("div", { className: "flex gap-2 flex-col justify-between w-11/12 md:w-2/3 border p-2", children: ["Section Info:", _jsx("div", { children: "Title: " }), _jsx("input", { value: title, onChange: e => setTitle(e.target.value), className: "ez-input" }), _jsx("div", { children: "Content: " }), _jsx("textarea", { value: content, onChange: e => setContent(e.target.value), className: "ez-input resize-none h-32" }), _jsx(ImageForm, { images: images, setImages: setImages }), _jsxs("div", { className: "flex justify-between", children: [_jsx("div", { children: errorMessages.length > 0 &&
                                errorMessages.map((error, index) => {
                                    return (_jsx("div", { className: "text-red-700", children: error }, index));
                                }) }), _jsx("button", { className: "ez-button", onClick: () => { validSectionCheck(); }, children: "Update" })] }), _jsx("button", { className: "ez-button", onClick: () => { sectionRemove(); }, children: "Delete" })] })
        : _jsxs("div", { className: "flex gap-2 flex-col justify-between w-2/3 border p-2", children: ["Section Info:", _jsx("button", { className: "ez-button", onClick: () => { setFormShown(true); }, children: "Edit" })] }));
};
export default SectionForm;
