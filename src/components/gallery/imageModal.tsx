import React, { SetStateAction } from "react";

interface ImageModalProps{
	setImageModalShown: React.Dispatch<SetStateAction<boolean>>
	currentImageUrl: string,
}
const ImageModal: React.FC<ImageModalProps> = ({setImageModalShown, currentImageUrl}) => {
	return (
		<div className="flex flex-col absolute left-0 right-0 top-0 bottom-0 bg-bgray h-full w-full p-1">
			<div className="cursor-pointer" onClick={()=>{setImageModalShown(false)}}>close</div>
			<div className="flex items-center justify-center h-4/6">
				<img className="h-full object-cover" src={currentImageUrl}/>
				</div>
		</div>
	)
}
export default ImageModal;
