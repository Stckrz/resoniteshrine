import React, { SetStateAction, useState } from 'react';
import {
	ArticleModel,
	ArticleSectionModel,
	SectionImageModel
} from '../../../models/articleModels';
import Article from '../articleView';
import {
	postArticle,
	postArticleSection,
	postSectionImage
} from '../../../library/api/articleapi/articleApi';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

interface ArticleCreationConfirmProps {
	setConfirmModalShown: React.Dispatch<SetStateAction<boolean>>,
	articleInfo: ArticleModel,
	sections: ArticleSectionModel[],
	sectionImages: SectionImageModel[]
}
const ArticleCreationConfirm: React.FC<ArticleCreationConfirmProps> = ({
		setConfirmModalShown,
		articleInfo,
		sections,
		sectionImages
	}) => {

	const [cookie] = useCookies(['userInfo']);
	const navigate = useNavigate();
	const [errorMessages, setErrorMessages] = useState<string[]>([""]);
	const [articleObject] = useState({
		id: 0,
		title: articleInfo.title,
		articleType: articleInfo.articleType,
		summary: articleInfo.summary,
		mainImage: articleInfo.mainImage,
		sections: sections
	});

	const errorMessageHandler = (errorObject: object) => {
		setErrorMessages([])
		const temp = [];
		for (const [key, value] of Object.entries(errorObject)) {
			temp.push(`${key}: ${value}`)
		}
		setErrorMessages(temp)
	}

	const fetchSectionImagePost = (articleId: number, section: ArticleSectionModel) => {
		for (let i = 0; i < sectionImages.length; i++)
			if (sectionImages[i].sectionTitle === section.section_title) {
				const imageObject = {
					article: articleId,
					section: section.id,
					image_url: sectionImages[i].image_url
				}
				const a = postSectionImage(cookie.userInfo?.token, imageObject)
				console.log(a)
			}
	}

	async function fetchPostArticle() {
		console.log("sentRequest",articleInfo)
		const data = await postArticle(cookie.userInfo?.token, articleInfo)
		if (data.id) {
			for (let i = 0; i < sections.length; i++) {
				const sectionData = await postArticleSection(cookie.userInfo?.token, sections[i], data.id)
				if (sectionData) {
					fetchSectionImagePost(data.id, sectionData)
				}
			}
			navigate('/')
		} else {
			errorMessageHandler(data)
		}
	}
	console.log("sectionImages", sectionImages)
	return (
		<div className="border h-full w-full">
			<button
				className="w-1/6 py-1 px-2 self-end border border-gray-700"
				onClick={() => { setConfirmModalShown(false) }}>
				cancel
			</button>
			<Article article={articleObject} sectionImages={sectionImages} />
			<button
				className="md:w-1/6 m-2 p-2 flex items-center justify-center md:py-1 md:px-2 self-end border border-gray-700"
				onClick={() => { fetchPostArticle() }}>
				Confirm
			</button>
			{errorMessages.length > 0 &&
				errorMessages.map((error, index) => {
					return (
						<div key={index}>{error}</div>
					)
				})
			}
		</div>
	)
}
export default ArticleCreationConfirm;
