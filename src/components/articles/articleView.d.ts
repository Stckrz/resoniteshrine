import React from 'react';
import { ArticleModel, SectionImageModel } from '../../models/articleModels';
interface ArticleProps {
    article: ArticleModel;
    sectionImages?: SectionImageModel[];
}
declare const Article: React.FC<ArticleProps>;
export default Article;
