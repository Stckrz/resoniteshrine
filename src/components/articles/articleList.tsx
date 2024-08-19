import React, { useEffect, useState } from 'react';
import { getArticles } from '../../library/api/articleapi/articleApi';
import { ArticleModel, PageInformationModel } from '../../models/articleModels';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../common/pagination';

interface ArticleListParams {
	articleListType: string
}
const ArticleList: React.FC<ArticleListParams> = ({ articleListType }) => {
	const [articles, setArticles] = useState<ArticleModel[]>([])
	const [pageInformation, setPageInformation] = useState<PageInformationModel>()
	const { page: pageParam } = useParams()
	const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1)

	const articleFetch = async () => {
		try {
			const fetchedArticles = await getArticles(page, articleListType)
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
	console.log(articles)
	return (
		<div className="p-2">
			<div className="text-2xl">{articleListType === 'article' ? "Articles" : "Tutorials"}</div>
			{
				pageInformation &&
				<Pagination pageInformation={pageInformation} page={page} />
			}
			{articles.map((article: ArticleModel) => {
				return (
					<div className="flex border border-gray-500 rounded md:m-4 md:p-2 min-h-24" key={article.id}>
						<div className='self-center h-1/2 w-1/2'>
							<img className="object-contain" src={article.mainImage} />
						</div>
						<div className="flex flex-col w-full h-full m-2">
							<div className="flex w-full justify-between border-b border-b-gray-400">
								<Link to={`/articles/${article.id}`} key={article.id}>
									<h1 className="md:text-xl text-sm">{article.title}</h1>
								</Link>
								<p className="text-xs m-0 p-0">{
									article.created_at &&
									new Date(article.created_at).toLocaleDateString()
								}</p>
							</div>
							<div className="md:mx-4 md:p-2 text-sm md:text-lg">{article.summary}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
export default ArticleList
