import React from "react";
import GalleryBrowser from "../../gallery/galleryBrowser"

const GalleryPage: React.FC = () => {
	return (
		<div className="p-2 h-full relative">
			{/* <div className="text-2xl"> */}
			{/* 	Gallery */}
			{/* </div> */}
			<GalleryBrowser />
		</div>
	)
}
export default GalleryPage;
