import React from 'react';
import { PageInformationModel } from '../../models/articleModels';
import { useNavigate } from 'react-router-dom';


interface PaginationProps {
	pageInformation: PageInformationModel
	page: number,
	pageType: string
}
const Pagination: React.FC<PaginationProps> = ({ pageInformation, page, pageType }) => {
	const navigate = useNavigate();
	return (
		<div className="flex w-full justify-between">
			<div>
				{pageInformation.previous &&
					<div className="cursor-pointer" onClick={() => { navigate(`/${pageType}/${page - 1}`) }}>prev</div>
				}
				{pageInformation.next &&
					<div className="cursor-pointer" onClick={() => { navigate(`/${pageType}/${page + 1}`) }}>next</div>
				}
			</div>
			<div>
				results: {pageInformation.count}
			</div>
		</div>
	)
}
export default Pagination
