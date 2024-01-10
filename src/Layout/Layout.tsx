import { logoLogin, logoSidebar } from "../image"
import SidebarItem from "../components/Elements/SideBarList/SidebarList"
import { BsGrid } from "react-icons/bs";
import {
    LuWallet,
} from "react-icons/lu";
import { MdNoFood } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import './layout.css'
import ButtonCancel from "../components/Elements/ButtonCancel/ButtonCancel";
import { FaArrowCircleLeft } from "react-icons/fa";

function Layout({ children }: any) {
    return (
        <div className="layout d-flex ">
            <div className="sidebar">
                <div className="offcanvass offcanvas-start ">
                    <div className="offcanvas-header d-flex justify-content-center">
                        <img src={logoSidebar} alt="logo-sidebar" />
                        <img src={logoLogin} alt="logo-logins" />
                    </div>
                    <div className="offcanvass-body d-grid  align-items-start">
                        <ul className="menu d-grid justify-content-center align-items-center mx-auto p-0 ">
                            <SidebarItem
                                icon={<BsGrid />}
                                title="Dashboard"
                                location="/dashboard"
                            />
                            <SidebarItem
                                icon={<LuWallet />}
                                title="Dana Admin"
                                location="/dana-admin"
                            />
                            <hr />
                            <SidebarItem
                                icon={<MdNoFood />}
                                title="Total Posko"
                                location="/total-posko"
                            />
                            <SidebarItem
                                icon={<MdManageHistory />}
                                title="Manage Posko"
                                location="/Manage-posko"
                            />
                            <hr />
                            <ButtonCancel className="btn-logout d-flex justify-content-center">
                                <FaArrowCircleLeft />
                                <span className="fw-medium" >Logout</span>
                            </ButtonCancel>
                        </ul>
                    </div>
                </div>
            </div>

            <main  >
                {children}
            </main>
        </div>
    )
}

export default Layout