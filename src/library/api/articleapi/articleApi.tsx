const apiUrl = 'http://localhost:8000'

export async function getArticles(){
	try{
		const result = await fetch(`${apiUrl}/api/articles/`)
		const data = await result.json()
		console.log("articles", data)
		return data
	}
	catch (error){
		console.log("an error occurred", error)
	}
}

export async function getArticleById(id: number){
	try{
		const result = await fetch(`${apiUrl}/api/articles/${id}`)
		const data = await result.json()
		return data
	}
	catch (error){
		console.log("an error occurred", error)
	}
}
