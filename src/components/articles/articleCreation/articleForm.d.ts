import React, { SetStateAction } from 'react';
import { ArticleModel } from '../../../models/articleModels';
interface ArticleFormProps {
    articleInfo: ArticleModel;
    setArticleInfo: React.Dispatch<SetStateAction<ArticleModel>>;
}
declare const ArticleForm: React.FC<ArticleFormProps>;
export default ArticleForm;
