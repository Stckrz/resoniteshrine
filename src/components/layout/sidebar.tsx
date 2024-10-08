import React, { SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useViewport } from '../../hooks/useViewport';

interface SideBarProps{
	setHamburgerShown: React.Dispatch<SetStateAction<boolean>>
}
const SideBar: React.FC<SideBarProps> = ({setHamburgerShown}) => {
	const width = useViewport().width;
	if (width > 800) {
		return (
			<div className="flex w-48 border-r border-black">
				<div className="flex flex-col w-full">
					<Link to="articleList/1">
						<div className="flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer">Articles</div>
					</Link>
					<Link to="tutorialList/1">
					<div className="flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer">Tutorials</div>
					</Link>
					<Link to="gallery/1">
					<div className="flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer">Gallery</div>
					</Link>
				</div>
			</div>
		)
	} else {
		return (
			<div className="absolute top-14 bottom-0 right-0 left-0 h-full w-full bg-gray-900">
				<div className="flex flex-col w-full">
					<Link onClick={()=>{setHamburgerShown(false)}} to="articleList/1">
						<div className="flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer">Articles</div>
					</Link>
					<Link onClick={()=>{setHamburgerShown(false)}} to="tutorialList/1">
					<div className="flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer">Tutorials</div>
					</Link>
					<Link onClick={()=>{setHamburgerShown(false)}} to="gallery/">
					<div className="flex items-center w-full p-2 hover:bg-gray-700 cursor-pointer">Gallery</div>
					</Link>
				</div>
			</div>
		)
	}
}
export default SideBar;
