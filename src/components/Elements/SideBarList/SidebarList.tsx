import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type SidebarItemProps = {
    icon: ReactNode;
    title: string;
    location: string;
};

const SidebarItem = ({ icon, title, location }: SidebarItemProps): JSX.Element => {
    return (
        <li className={`sidebar-item`}>
            <NavLink to={location} className='sidebar-link'>
                <div className='iconNavbar'>{icon}</div>
                <span>{title}</span>
            </NavLink>
        </li>
    );
};

export default SidebarItem;
