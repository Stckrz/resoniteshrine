import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const ImageForm = ({ images, setImages }) => {
    const [imageUrl, setImageUrl] = useState("");
    const imageAddHandler = () => {
        setImages([...images, imageUrl]);
    };
    const imageRemoveHandler = (image) => {
        setImages(images.filter(img => img !== image));
    };
    return (_jsxs("div", { className: "flex flex-col justify-center", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx("div", { children: "Image: " }), _jsx("input", { value: imageUrl, onChange: e => setImageUrl(e.target.value), className: "ez-input" }), _jsx("button", { className: "ez-button", onClick: imageAddHandler, children: "addImage" })] }), _jsx("div", { className: "flex", children: images.map((image) => {
                    return (_jsx("img", { onClick: () => { imageRemoveHandler(image); }, className: "h-14", src: image }));
                }) })] }));
};
export default ImageForm;
