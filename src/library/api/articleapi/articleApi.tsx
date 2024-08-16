import { ArticleModel, ArticleSectionModel, PostImageModel } from "../../../models/articleModels"

const apiUrl = 'http://localhost:8000'

export async function getArticles(page: number, articleType: string) {
// export async function getArticles(pageUrl: string, articleType: string="article") {
	try {
		const result = await fetch(`${apiUrl}/api/articles/?page=${page}&articleType=${articleType}`)
		// const result = await fetch(`${pageUrl}&articleType=${articleType}`)
		const data = await result.json()
		return data
	}
	catch (error) {
		console.log("an error occurred", error)
	}
}

export async function getArticleById(id: number) {
	try {
		const result = await fetch(`${apiUrl}/api/articles/${id}`)
		const data = await result.json()
		return data
	}
	catch (error) {
		console.log("an error occurred", error)
	}
}

export async function postArticle(token: string, articleObject: ArticleModel) {
	const articlePostObject = {
		title: articleObject.title,
		articleType: articleObject.articleType,
		summary: articleObject.summary
	}
	try {
		const result = await fetch(`${apiUrl}/api/articles/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${token}`
			},
			body: JSON.stringify(articlePostObject)
		})
		const data = await result.json()
		return data
	}
	catch (error) {
		console.log("an error occurred", error)
	}
}
export async function postArticleSection(token: string, sectionObject: ArticleSectionModel, articleId: number) {

	const sectionPostObject = {
		article: articleId,
		section_title: sectionObject.section_title,
		section_content: sectionObject.section_content,
		order: sectionObject.order
	}
	try {
		const result = await fetch(`${apiUrl}/api/sections/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${token}`
			},
			body: JSON.stringify(sectionPostObject)
		})
		const data = await result.json()
		return data
	}
	catch (error) {
		console.log("an error occurred", error)
	}
}
export async function postSectionImage(token: string, imageObject: PostImageModel) {
	try {
		const result = await fetch(`${apiUrl}/api/images/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${token}`
			},
			body: JSON.stringify(imageObject)
		})
		const data = await result.json()
		return data
	} catch (error) {
		console.log("an error occurred", error)
	}
}
