import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
	Routes, Route,
} from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Home from './components/pages/home/home'
import Layout from './components/layout/layout.tsx';
import LoginPage from './components/pages/users/loginpage.tsx';
import ArticleListPage from './components/pages/articles/articleListPage.tsx';
import ArticleViewPage from './components/pages/articles/articleViewPage.tsx';
import NewArticlePage from './components/pages/articles/newArticle.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="articleList/:page?" element={<ArticleListPage />} />
					<Route path="articles/:id" element={<ArticleViewPage />} />
					<Route path="articleCreate" element={<NewArticlePage />} />
				</Route>
			</Routes>
		</Router>
	</StrictMode>,
)
