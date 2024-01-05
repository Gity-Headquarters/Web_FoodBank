import { logoSidebar } from "../image"
import SidebarItem from "../components/Elements/SideBarList/SidebarList"
import { DashCircle } from "react-bootstrap-icons"
import './layout.css'

function Layout({ children }: any) {
    return (
        <>
            <div className="sidebar">
                <div className="offcanvass offcanvas-start ">
                    <div className="offcanvas-header d-flex justify-content-center">
                        <img src={logoSidebar} alt="" />
                    </div>
                    <div className="offcanvass-body d-grid  align-items-stretch ">
                        <ul className="menu d-grid justify-content-center align-items-center mx-auto p-0 ">
                            <SidebarItem
                                icon={<DashCircle />}
                                title="Dashboard"
                                location="/admin/dashboard"
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout