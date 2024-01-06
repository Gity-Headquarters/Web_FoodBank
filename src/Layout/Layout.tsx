import { logoSidebar } from "../image"
import SidebarItem from "../components/Elements/SideBarList/SidebarList"
import { BsGrid } from "react-icons/bs";
import './layout.css'

function Layout({ children }: any) {
    return (
        <>
            <div className="sidebar">
                <div className="offcanvass offcanvas-start ">
                    <div className="offcanvas-header d-flex justify-content-center">
                        <img src={logoSidebar} alt="" />
                    </div>
                    <div className="offcanvass-body d-grid  align-items-start">
                        <ul className="menu d-grid justify-content-center align-items-center mx-auto p-0 ">
                            <SidebarItem
                                icon={<BsGrid />}
                                title="Dashboard"
                                location="/dashboard"
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <main  >
                {children}
            </main>
        </>
    )
}

export default Layout