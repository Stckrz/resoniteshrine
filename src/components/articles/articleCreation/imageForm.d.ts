import { SetStateAction } from "react";
interface ImageFormProps {
    images: string[];
    setImages: React.Dispatch<SetStateAction<string[]>>;
}
declare const ImageForm: React.FC<ImageFormProps>;
export default ImageForm;
