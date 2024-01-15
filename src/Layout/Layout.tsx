import { logoLogin, logoSidebar } from "../image"
import SidebarItem from "../components/Elements/SideBarList/SidebarList"
import { BsGrid } from "react-icons/bs";
import {
    LuWallet,
} from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import './layout.css'
import ButtonCancel from "../components/Elements/ButtonCancel/ButtonCancel";
import { FaArrowCircleLeft } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { BsPersonVcard } from "react-icons/bs";
import { useLogin } from "../hooks/useLogin";

function Layout({ children }: any) {
    useLogin()
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

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
                            <SidebarItem
                                icon={<BsPersonVcard />}
                                title="Transaksi User"
                                location="/transaksi-user"
                            />
                            <hr />
                            <SidebarItem
                                icon={<SiHomeadvisor />}
                                title="Total Posko"
                                location="/total-posko"
                            />
                            <SidebarItem
                                icon={<MdManageHistory />}
                                title="Manage Posko"
                                location="/Manage-posko"
                            />
                            <hr />
                            <ButtonCancel onclick={handleLogout} className="btn-logout d-flex justify-content-center">
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