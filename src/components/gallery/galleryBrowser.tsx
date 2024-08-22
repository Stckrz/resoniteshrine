import React, { useCallback, useEffect, useState } from "react";
import { getGalleryImages, postGalleryImage } from "../..//library/api/articleapi/articleApi";
import { GalleryImage, PageInformationModel } from "../../models/articleModels";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import Pagination from "../common/pagination";
import ImageModal from "./imageModal";

const GalleryBrowser: React.FC = () => {
	const [imageArray, setImageArray] = useState<GalleryImage[]>([]);
	const [pageInformation, setPageInformation] = useState<PageInformationModel>();
	const { page: pageParam } = useParams();
	const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);
	const [imageModalShown, setImageModalShown] = useState(false);
	const [currentImageUrl, setCurrentImageUrl] = useState("");
	const [cookie] = useCookies(['userInfo']);
	const [newImageInput, setNewImageInput] = useState("");

	const fetchGalleryImages = useCallback(async () => {
		try {
			const imageList = await getGalleryImages(page);
			const pageInformationObject = {
				count: imageList.count,
				next: imageList.next,
				previous: imageList.previous
			}
			setPageInformation(pageInformationObject)
			setImageArray(imageList.results)
		} catch (error) {
			console.log("an error has occurred..", error)
		}
	}, [page]);

	const newGalleryImageHandler = async () => {
		if (cookie.userInfo?.is_admin) {
			const newImage = await postGalleryImage(cookie.userInfo?.token, newImageInput)
			console.log(newImage)
		}
	}

	const imageModalHandler = (url: string) => {
		setImageModalShown(true)
		setCurrentImageUrl(url)
	}

	useEffect(() => {
		fetchGalleryImages()
	}, [fetchGalleryImages])

	useEffect(() => {
		setPage(pageParam ? parseInt(pageParam) : 1)
	}, [pageParam])

	return (
		<div className="w-full h-full border p-2">
			<div className="text-2xl flex justify-between">
				Gallery
				{cookie.userInfo?.is_admin &&
					<div className="flex gap-1 items-center justify-center">
						<input onChange={e=>setNewImageInput(e.target.value)} className="h-2/3 w-1/2 ez-input"></input>
						<button onClick={()=>{newGalleryImageHandler()}}>add</button>
					</div>
				}
			</div>
			{imageModalShown &&
				<ImageModal
					setImageModalShown={setImageModalShown}
					currentImageUrl={currentImageUrl}
				/>
			}
			{pageInformation &&
				<Pagination page={page} pageInformation={pageInformation} pageType={'gallery'}/>
			}
			<div className="flex justify-start items-start gap-3 flex-wrap w-full p-2">
				{imageArray &&
					imageArray.map((image, index) => {
						return (
							<div onClick={() => {
								imageModalHandler(image.image_url)
							}}
								className="flex items-center justify-center w-2/12 hover:border"
								key={index}
							>
								<img className="object-fill" src={image.image_url} />
							</div>
						)
					})
				}
			</div>
		</div>
	)
}
export default GalleryBrowser;
