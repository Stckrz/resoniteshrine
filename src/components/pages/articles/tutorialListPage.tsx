import React from 'react';
import ArticleList from '../../articles/articleList';

const TutorialListPage: React.FC = () => {
	return (
		<div className="flex flex-col">
			<ArticleList articleListType='tutorial'/>
		</div>
	)
}
export default TutorialListPage;
