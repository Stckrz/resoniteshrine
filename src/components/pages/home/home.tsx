import React, { useState, useEffect, useCallback } from "react";
import Article from '../../articles/articleView';
import { getArticles } from '../../../library/api/articleapi/articleApi';
import { ArticleModel, ArticleModelDefault } from "../../../models/articleModels";

const Home: React.FC = () => {
	const [homeArticle, setHomeArticle] = useState<ArticleModel>(ArticleModelDefault);

	const fetchArticles = useCallback(async () => {
		const tempArray = await getArticles(1, "article")
		if (tempArray) {
			setHomeArticle(tempArray.results[0])
		}

	}, [])

	useEffect(() => {
		fetchArticles()
	}, [fetchArticles])

	return (
		<div className="p-2">
			{homeArticle.id &&
				<Article article={homeArticle} />
			}
		</div>
	)
}
export default Home;
