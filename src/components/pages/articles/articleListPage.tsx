import React from 'react';
import ArticleList from '../../articles/articleList';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const ArticleListPage: React.FC = () => {
	const [cookie] = useCookies(['userInfo']);
	return (
		<div className="flex flex-col">
			{cookie.userInfo?.is_admin &&
				<Link to="/articleCreate">
					<div className="flex self-end p-2">Create</div>
				</Link>
			}
			<ArticleList />
		</div>
	)
}
export default ArticleListPage;
