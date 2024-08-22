import React, { SetStateAction } from 'react';
interface SideBarProps {
    setHamburgerShown: React.Dispatch<SetStateAction<boolean>>;
}
declare const SideBar: React.FC<SideBarProps>;
export default SideBar;
