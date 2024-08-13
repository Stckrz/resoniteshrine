import React, { useEffect, useState } from 'react';
import { getArticles } from '../../library/api/articleapi/articleApi';
import { ArticleModel } from '../../models/articleModels';
import { Link } from 'react-router-dom';

const ArticleList: React.FC = () => {
	const [articles, setArticles] = useState<ArticleModel[]>([])
	const articleFetch = async () => {
		try {
			const fetchedArticles = await getArticles()
			setArticles(fetchedArticles)
		}
		catch (error) {
			console.log("An error has occurred", error)
		}
	}
	useEffect(() => {
		articleFetch()
	}, [])

	return (
		<div className="p-2">
			{articles.map((article: ArticleModel) => {
				return (
					<Link to={`/articles/${article.id}`}>
						<div key={article.id}>{article.title}</div>
					</Link>
				)
			})}
		</div>
	)
}
export default ArticleList
