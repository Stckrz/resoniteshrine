import { jsx as _jsx } from "react/jsx-runtime";
import GalleryBrowser from "../../gallery/galleryBrowser";
const GalleryPage = () => {
    return (_jsx("div", { className: "p-2 h-full relative", children: _jsx(GalleryBrowser, {}) }));
};
export default GalleryPage;
