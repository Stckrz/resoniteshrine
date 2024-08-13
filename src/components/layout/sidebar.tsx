import React from 'react';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
	return (
		<div className="flex w-48 border-r border-black">
			<div className="flex flex-col w-full">
				<Link to="articleList">
					<div className="flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer">articles</div>
				</Link>
				<div className="flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer">tutorials</div>
				<div className="flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer">gallery</div>
			</div>
		</div>
	)
}
export default SideBar;
