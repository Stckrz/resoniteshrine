import React from 'react';
import reslogo from '../../assets/images/resonitelogo.png'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header: React.FC = () => {
	const [cookie] = useCookies(["userInfo"])

	return (
		<div className="flex w-full h-14 items-center justify-between p-1 border-b border-black">
			<div className="flex h-full w-1/6">
				<Link to="/">
					<img className={"object-contain"} src={reslogo} />
				</Link>
			</div>
			<div>
				{cookie.userInfo?.user ?
					<div className="flex justify-center items-center h-full px-2">{cookie.userInfo.user}</div>
					:
					<Link to="login">
						<div className="flex justify-center items-center h-full px-2 cursor-pointer">login</div>
					</Link>
				}

			</div>
		</div>
	)
}
export default Header;
