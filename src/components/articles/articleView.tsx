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
		<div className="p-4 mx-4">
			<h1 className="text-4xl my-6">{article.title}</h1>
			{
				sections.map((section: ArticleSectionModel) => {
					return (
						<div className="my-4" key={section.id}>
							{section.images?.length > 0 &&
								section.images.map((image) => {
									return (
										<div className="w-1/2 my-4" key={image.id}>
											<img className="object-fit" src={image.image_url} />
										</div>
									)
								})
							}
							{sectionImages?.length > 0 &&
								sectionImages.map((image, index) => {
									return (
										image.sectionTitle === section.section_title &&
										<div className="w-1/2 my-4" key={index}>
											<img className="object-fit" src={image.image_url} />
										</div>
									)
								})
							}
							<h2 className="text-2xl my-4">
								{section.section_title}
							</h2>
							<p className="my-2">
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
