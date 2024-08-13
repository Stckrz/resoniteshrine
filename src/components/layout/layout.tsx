import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';

const Layout: React.FC = () => {

	return (
		<div className={"flex flex-col justify-between items-center h-dvh w-dvw gap-1"}>
			<Header />
			<div className="flex w-full flex-grow">
				<SideBar />
				<div className="flex-grow flex-1 w-full">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	)
}
export default Layout;
