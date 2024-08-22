import React, { SetStateAction } from 'react';
import { ArticleModel, ArticleSectionModel, SectionImageModel } from '../../../models/articleModels';
interface ArticleCreationConfirmProps {
    setConfirmModalShown: React.Dispatch<SetStateAction<boolean>>;
    articleInfo: ArticleModel;
    sections: ArticleSectionModel[];
    sectionImages: SectionImageModel[];
}
declare const ArticleCreationConfirm: React.FC<ArticleCreationConfirmProps>;
export default ArticleCreationConfirm;
