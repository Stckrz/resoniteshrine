export interface ArticleImageModel{
	id: number,
	image_url: string
}

export interface SectionImageModel{
	sectionTitle: string,
	image_url: string
}

export interface PostImageModel{
	article: number,
	section: number,
	image_url: string
}

export interface PageInformationModel{
	count: number,
	next: number,
	previous: number,
}

export interface ArticleListApiModel extends PageInformationModel{
	results: ArticleModel[]
}

export interface ArticleModel{
	id: number,
	title: string,
	articleType: string, 
	summary: string,
	created_at?: string,
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
	articleType: "",
	summary: "",
	created_at: "",
	sections: []
}
export const SectionModelDefault = {
	id: 0,
	section_title: "Title here",
	section_content: "Content here",
	order: 1,
	images: []

}
