
import { NavLink } from "react-router-dom";

type SidebarItemProps = {
    icon: any,
    title: string,
    location: string,
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title, location, }) => {
    return (
        <li className={`sidebar-item  `}>
            <NavLink to={location} className='sidebar-link'>
                <div className='iconNavbar'>{icon}</div>
                <span>{title}</span>
            </NavLink>
        </li>
    );
};

export default SidebarItem;
