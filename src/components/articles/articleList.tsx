import React, { useEffect, useState } from 'react';
import { getArticles } from '../../library/api/articleapi/articleApi';
import { ArticleModel, PageInformationModel } from '../../models/articleModels';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../common/pagination';


const ArticleList: React.FC = () => {
	const [articles, setArticles] = useState<ArticleModel[]>([])
	const [pageInformation, setPageInformation] = useState<PageInformationModel>()
	const { page: pageParam } = useParams()
	const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1)

	const articleFetch = async () => {
		try {
			const fetchedArticles = await getArticles(page, "article")
			const pageInformationObject = {
				count: fetchedArticles.count,
				next: fetchedArticles.next,
				previous: fetchedArticles.previous
			}
			setArticles(fetchedArticles.results)
			setPageInformation(pageInformationObject)
		}
		catch (error) {
			console.log("An error has occurred", error)
		}
	}

	useEffect(() => {
		articleFetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page])

	useEffect(() => {
		setPage(pageParam ? parseInt(pageParam) : 1)
	}, [pageParam])

	return (
		<div className="p-2">
			{
				pageInformation &&
				<Pagination pageInformation={pageInformation} page={page} />
			}
			{articles.map((article: ArticleModel) => {
				return (
					<div className="border m-4 p-2" key={article.id}>
						<div className="flex w-full justify-between">
							<Link to={`/articles/${article.id}`} key={article.id}>
								<h1>{article.title}</h1>
							</Link>
							<p>{
								article.created_at &&
								new Date(article.created_at).toLocaleDateString()
							}</p>
						</div>
						<div className="mx-4">{article.summary}</div>
					</div>
				)
			})}
		</div>
	)
}
export default ArticleList
