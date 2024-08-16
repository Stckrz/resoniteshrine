import React, { useState } from 'react';
import '../../App.css'
import { useViewport } from '../../hooks/useViewport';
import { Outlet } from 'react-router-dom';
import hamburger from '../../assets/images/hamburger.svg';
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';

const Layout: React.FC = () => {
	const [hamburgerShown, setHamburgerShown] = useState(false)
	const width = useViewport().width;

	return (
		<div className={"flex flex-col justify-between items-center h-dvh w-dvw gap-1 overflow-x-hidden"}>
			<div className="flex items-center w-full">
				{width < 800 &&
					<div className="h-full flex items-center justify-center border-b border-black" onClick={() => { setHamburgerShown(!hamburgerShown) }}>
						<img className="h-8 aspect-square" src={hamburger} />
					</div>
				}
				<Header />
			</div>
			<div className="flex w-full flex-grow">
				{(width > 800 || hamburgerShown) &&
					<div className="flex">
						<SideBar setHamburgerShown={setHamburgerShown} />
					</div>
				}
				<div className="flex-grow flex-1">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	)
}
export default Layout;
