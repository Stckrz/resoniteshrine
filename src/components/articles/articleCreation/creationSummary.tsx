import React from 'react';
import { ArticleModel, ArticleSectionModel, SectionImageModel } from '../../../models/articleModels';

interface CreationSummaryProps {
	articleInfo: ArticleModel,
	sections: ArticleSectionModel[]
	sectionImages: SectionImageModel[]
}
const CreationSummary: React.FC<CreationSummaryProps> = ({ articleInfo, sections, sectionImages }) => {
	console.log(sectionImages)
	return (
		<div className="flex flex-col gap-2 p-2 w-1/6 border h-full">
			<div>Article Info:
				<div>{articleInfo.title}</div>
				<div>{articleInfo.articleType}</div>
				<div>{articleInfo.summary}</div>
			</div>
			<div className="flex flex-col gap-1">Section Info:
				{sections.map((section) => {
					return (
						<div key={section.id}>
							<div>title:{section.section_title}</div>
							<div>order:{section.order}</div>
							<div>images:{sectionImages?.length > 0 ? sectionImages.length : 0}</div>
						</div>
					)
				})}

			</div>
		</div>
	)
}

export default CreationSummary;
