import React, { useState, useEffect } from 'react';
import {
	ArticleModel,
	ArticleSectionModel,
	SectionImageModel
} from '../../models/articleModels';

interface ArticleProps {
	article: ArticleModel,
	sectionImages: SectionImageModel[]
}
const Article: React.FC<ArticleProps> = ({ article, sectionImages }) => {
	const [sections, setSections] = useState<ArticleSectionModel[]>([])

	useEffect(() => {
		setSections(article.sections)
	}, [article])

	return (
		<div className="md:p-4 md:mx-4 flex flex-col">
			<div className="flex justify-between my-6 p-4">
				<h1 className="text-4xl">{article.title}</h1>
				<div className="m-0 p-0">{
					article.created_at &&
					new Date(article.created_at).toLocaleDateString()
				}
				</div>
			</div>
			<div className="md:w-3/4 w-dvw md:my-4 self-center">
				<img className="object-fit" src={article.mainImage} />
			</div>
			{
				sections.map((section: ArticleSectionModel) => {
					return (
						<div className="md:my-4" key={section.id}>
							{section.images?.length > 0 &&
								section.images.map((image) => {
									return (
										<div className="md:w-1/2 w-dvw md:my-4" key={image.id}>
											<img className="object-fit" src={image.image_url} />
										</div>
									)
								})
							}
							{sectionImages?.length > 0 &&
								sectionImages.map((image, index) => {
									return (
										image.sectionTitle === section.section_title &&
										<div className="md:w-1/2 w-dvw md:my-4" key={index}>
											<img className="object-fit" src={image.image_url} />
										</div>
									)
								})
							}
							<h2 className="text-2xl my-4 p-4">
								{section.section_title}
							</h2>
							<p className="my-2 p-4">
								{section.section_content}
							</p>
						</div>
					)
				})
			}
		</div>
	)
}
export default Article;
