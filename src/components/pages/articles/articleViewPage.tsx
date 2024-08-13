import React, { useEffect, useState } from 'react';
import Article from '../../articles/articleView';
import { useParams } from 'react-router-dom';
import { ArticleModel, ArticleModelDefault } from '../../../models/articleModels';
import { getArticleById } from '../../../library/api/articleapi/articleApi';

const ArticleViewPage: React.FC = () => {
	const { id } = useParams();
	const [fetchedArticle, setFetchedArticle] = useState<ArticleModel>(ArticleModelDefault)
	async function fetchArticle() {
		if (id) {
			const data = await getArticleById(parseInt(id))
			setFetchedArticle(data)
		}
	}
	useEffect(()=>{
		fetchArticle()
	}, [fetchArticle])
	return (
	<Article article={fetchedArticle} />
	)

}
export default ArticleViewPage;
