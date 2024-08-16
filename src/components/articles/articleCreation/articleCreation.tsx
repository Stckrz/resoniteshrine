import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import CreationSummary from './creationSummary';
import ArticleForm from './articleForm';
import SectionForm from './sectionForm';
import ArticleCreationConfirm from './articleCreationConfirm';
import {
	ArticleModel,
	ArticleModelDefault,
	ArticleSectionModel,
	SectionImageModel,
	SectionModelDefault
} from '../../../models/articleModels';
import { useViewport } from '../../../hooks/useViewport';

const ArticleCreation: React.FC = () => {
	const [cookie] = useCookies(['userInfo']);
	const [articleInfo, setArticleInfo] = useState<ArticleModel>(ArticleModelDefault);
	const [sections, setSections] = useState<ArticleSectionModel[]>([SectionModelDefault]);
	const [sectionImages, setSectionImages] = useState<SectionImageModel[]>([])
	const [confirmModalShown, setConfirmModalShown] = useState(false)
	const [sectionIdCounter, setSectionIdCounter] = useState(1)
	const width = useViewport().width;

	const addSectionHandler = () => {
		setSectionIdCounter(sectionIdCounter + 1);
		const newSection = { ...SectionModelDefault, id: sectionIdCounter }
		setSections([...sections, newSection]);
	}
console.log('creationSentToConfirm', articleInfo)
	return (
		cookie.userInfo?.is_admin
			? <div className="flex justify-between h-full relative">
				{confirmModalShown
					? <div className="abolute top-0 bottom-0 left-0 right-0 h-full w-full border">
						<ArticleCreationConfirm
							setConfirmModalShown={setConfirmModalShown}
							articleInfo={articleInfo}
							sections={sections}
							sectionImages={sectionImages}
						/>
					</div>
					: <div className="h-full w-full flex justify-between">
						<div className="flex flex-grow flex-col items-center gap-4 overflow-auto">
							<ArticleForm setArticleInfo={setArticleInfo} articleInfo={articleInfo} />
							{
								sections.map((section) => {
									return (<SectionForm
										key={section.id}
										section={section}
										sections={sections}
										setSections={setSections}
										sectionImages={sectionImages}
										setSectionImages={setSectionImages}
									/>)
								})
							}
							<button className="ez-button m-2" onClick={() => { addSectionHandler() }}>Add section</button>
							<button
								onClick={() => { setConfirmModalShown(true) }}
								className="w-1/4 py-1 px-2 border border-gray-700 self-center">
								Finalize
							</button>
						</div>
						{width > 800 &&
							<CreationSummary
								articleInfo={articleInfo}
								sections={sections}
								sectionImages={sectionImages}
							/>
						}
					</div>
				}
			</div>
			: <div>you are not allowed here</div>
	)
}

export default ArticleCreation
