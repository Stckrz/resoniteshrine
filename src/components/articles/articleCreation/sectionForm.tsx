import React, { SetStateAction, useState } from 'react';
import { ArticleSectionModel, SectionImageModel } from '../../../models/articleModels';
import ImageForm from './imageForm';

interface SectionFormProps {
	section: ArticleSectionModel,
	sections: ArticleSectionModel[],
	setSections: React.Dispatch<SetStateAction<ArticleSectionModel[]>>,
	sectionImages: SectionImageModel[]
	setSectionImages: React.Dispatch<SetStateAction<SectionImageModel[]>>
}
const SectionForm: React.FC<SectionFormProps> = ({ section, sections, setSections, sectionImages, setSectionImages }) => {
	const [title, setTitle] = useState(section.section_title);
	const [content, setContent] = useState(section.section_content);
	const [images, setImages] = useState<string[]>([])
	const [formShown, setFormShown] = useState(true);
	const [errorMessages, setErrorMessages] = useState<string[]>([]);

	const imageObjectCreationHandler = () => {
		const objectArray = [];
		for (let i = 0; i < images.length; i++) {
			objectArray.push({
				sectionTitle: title,
				image_url: images[i]
			})
		}
		return (objectArray);
	}

	const validSectionCheck = () => {
		const errorMessages = [];
		if (title === "") {
			errorMessages.push("Field must not be empty: 'Title'")
		}
		if (content === "") {
			errorMessages.push("Field must not be empty: 'Content'")
		}
		if (errorMessages.length === 0) {
			submitSectionChangeHandler()
		} else {
			setErrorMessages(errorMessages)
		}
	}
	const submitSectionChangeHandler = () => {
		const sectionOrder = sections.findIndex((sec) => section.id === sec.id);
		const newSectionObject: ArticleSectionModel = {
			...section,
			section_title: title,
			order: sectionOrder,
			section_content: content,
		}
		setSections(sections.map((sec) => sec.id === section.id ? newSectionObject : sec));
		const newImages = imageObjectCreationHandler()
		newImages.map((newImage) => {
			setSectionImages([...sectionImages, newImage])
		})
		setFormShown(false);
	}

	const sectionRemove = () => {
		setSections(sections.filter((sec) => {
			return sec.id !== section.id
		}))
	}
	return (
		formShown
			? <div className="flex gap-2 flex-col justify-between w-11/12 md:w-2/3 border p-2">Section Info:
				<div>Title: </div>
				<input
					value={title}
					onChange={e => setTitle(e.target.value)}
					className={"ez-input"}
				/>
				<div>Content: </div>
				<textarea
					value={content}
					onChange={e => setContent(e.target.value)}
					className={"ez-input resize-none h-32"}
				/>
				<ImageForm images={images} setImages={setImages} />
				<div className="flex justify-between">
					<div>
						{errorMessages.length > 0 &&
							errorMessages.map((error, index) => {
								return (
									<div className="text-red-700" key={index}>{error}</div>
								)
							})
						}
					</div>
					<button
						className={"ez-button"}
						onClick={() => { validSectionCheck() }}>
						Update
					</button>
				</div>
				<button
					className={"ez-button"}
					onClick={() => { sectionRemove() }}>
					Delete
				</button>
			</div>
			: <div
				className="flex gap-2 flex-col justify-between w-2/3 border p-2">
				Section Info:
				<button
					className={"ez-button"}
					onClick={() => { setFormShown(true) }}>
					Edit
				</button>
			</div>
	)
}

export default SectionForm;
