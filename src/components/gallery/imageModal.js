import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ImageModal = ({ setImageModalShown, currentImageUrl }) => {
    return (_jsxs("div", { className: "flex flex-col absolute left-0 right-0 top-0 bottom-0 bg-bgray h-full w-full p-1", children: [_jsx("div", { className: "cursor-pointer", onClick: () => { setImageModalShown(false); }, children: "close" }), _jsx("div", { className: "flex items-center justify-center h-4/6", children: _jsx("img", { className: "h-full object-cover", src: currentImageUrl }) })] }));
};
export default ImageModal;
