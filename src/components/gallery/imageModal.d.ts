import React, { SetStateAction } from "react";
interface ImageModalProps {
    setImageModalShown: React.Dispatch<SetStateAction<boolean>>;
    currentImageUrl: string;
}
declare const ImageModal: React.FC<ImageModalProps>;
export default ImageModal;
