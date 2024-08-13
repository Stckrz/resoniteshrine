export interface ArticleImageModel{
	id: number,
	image_url: string
}

export interface ArticleModel{
	id: number,
	title: string,
	sections: ArticleSectionModel[]
}

export interface ArticleSectionModel{
	id: number,
	section_title: string,
	section_content: string,
	order: number,
	images: ArticleImageModel[]
}

export const ArticleModelDefault = {
	id: 0,
	title: "",
	sections: []
}
