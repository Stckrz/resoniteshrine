import React from 'react';
import { ArticleModel, ArticleSectionModel, SectionImageModel } from '../../../models/articleModels';
interface CreationSummaryProps {
    articleInfo: ArticleModel;
    sections: ArticleSectionModel[];
    sectionImages: SectionImageModel[];
}
declare const CreationSummary: React.FC<CreationSummaryProps>;
export default CreationSummary;
