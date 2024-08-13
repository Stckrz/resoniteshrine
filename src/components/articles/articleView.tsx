import React, { useState, useEffect } from 'react';
import { ArticleModel, ArticleSectionModel } from '../../models/articleModels';

interface ArticleProps {
	article: ArticleModel,
}
const Article: React.FC<ArticleProps> = ({ article }) => {
	const [sections, setSections] = useState<ArticleSectionModel[]>([])

	useEffect(() => {
		setSections(article.sections)
	}, [article])

	return (
		<div className="p-2">
			<h1>{article.title}</h1>
			{
				sections.map((section: ArticleSectionModel) => {
					return (
						<div key={section.id}>
							<h2>
								{section.section_title}
							</h2>
							<p>
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
