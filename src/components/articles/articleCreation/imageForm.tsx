import { SetStateAction, useState } from "react"

interface ImageFormProps {
	images: string[],
	setImages: React.Dispatch<SetStateAction<string[]>>
}
const ImageForm: React.FC<ImageFormProps> = ({images, setImages}) => {
	const [imageUrl, setImageUrl] = useState("")

	const imageAddHandler = () => {
		console.log("images", images)
		console.log("imageurl", imageUrl)
		setImages([...images, imageUrl])
		// setImageUrl("")
	}
	const imageRemoveHandler = (image: string) => {
		setImages(images.filter(img => img !== image))
	}
	return (
		<div className="flex flex-col justify-center">
			<div className="flex flex-col">
				<div>Image: </div>
				<input
					value={imageUrl}
					onChange={e => setImageUrl(e.target.value)}
					className={"ez-input"}
				/>
			<button className="ez-button" onClick={imageAddHandler}>addImage</button>
			</div>
			<div className="flex">
				{images.map((image)=>{
						return(
							<img onClick={()=>{imageRemoveHandler(image)}} className="h-14" src={image} />
						)
					})
				}
			</div>
		</div>
	)
}
export default ImageForm
