import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import Article from '../../articles/articleView';
import { useParams } from 'react-router-dom';
import { ArticleModelDefault } from '../../../models/articleModels';
import { getArticleById } from '../../../library/api/articleapi/articleApi';
const ArticleViewPage = () => {
    const { id } = useParams();
    const [fetchedArticle, setFetchedArticle] = useState(ArticleModelDefault);
    const fetchArticle = useCallback(async () => {
        if (id) {
            const data = await getArticleById(parseInt(id));
            setFetchedArticle(data);
        }
    }, [id]);
    useEffect(() => {
        fetchArticle();
    }, [fetchArticle]);
    return (_jsx(Article, { article: fetchedArticle }));
};
export default ArticleViewPage;
