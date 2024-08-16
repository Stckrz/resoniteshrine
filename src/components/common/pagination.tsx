import React from 'react';
import { PageInformationModel } from '../../models/articleModels';
import { useNavigate } from 'react-router-dom';


interface PaginationProps {
	pageInformation: PageInformationModel
	page: number,
}
const Pagination: React.FC<PaginationProps> = ({ pageInformation, page }) => {
	const navigate = useNavigate();
	return (
		<div className="flex w-full justify-between">
			<div>
				{pageInformation.previous &&
					<div onClick={() => { navigate(`/articleList/${page - 1}`) }}>prev</div>
				}
				{pageInformation.next &&
					<div onClick={() => { navigate(`/articleList/${page + 1}`) }}>next</div>
				}
			</div>
			<div>
				{pageInformation.count}
			</div>
		</div>
	)
}
export default Pagination
