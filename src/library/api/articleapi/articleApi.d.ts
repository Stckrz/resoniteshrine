import { ArticleModel, ArticleSectionModel, PostImageModel } from "../../../models/articleModels";
export declare function getArticles(page: number, articleType: string): Promise<any>;
export declare function getArticleById(id: number): Promise<any>;
export declare function postArticle(token: string, articleObject: ArticleModel): Promise<any>;
export declare function postArticleSection(token: string, sectionObject: ArticleSectionModel, articleId: number): Promise<any>;
export declare function postSectionImage(token: string, imageObject: PostImageModel): Promise<any>;
export declare function getGalleryImages(page: number): Promise<any>;
export declare function postGalleryImage(token: string, url: string): Promise<any>;
