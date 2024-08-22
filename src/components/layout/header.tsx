import React from 'react';
import resShrineLogo from '../../assets/images/resoniteShrineLogo.png';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header: React.FC = () => {
	const [cookie] = useCookies(["userInfo"])

	return (
		<div className="flex w-full h-14 items-center justify-between p-1 border-b border-black">
			<div className="flex h-full w-1/3 md:w-1/6 items-center">
				<Link to="/">
					<img className={"object-contain max-w-34 min-w-34"} src={resShrineLogo} />
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
