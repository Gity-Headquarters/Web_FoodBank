import Layout from "../../Layout/Layout"
import Card from "../../components/Elements/Card/Card"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import CardLink from "../../components/Fragments/CardLink/CardLink"
import { peopleIcon, welcomeAdmin } from "../../image"
import { GoTriangleUp } from "react-icons/go";
import './dashboard.css'
import CardLinkDash from "../../components/Fragments/CardLinkDashboard/CardLinkDash"
import { CardDashboard } from "../../utils/DataObject"

function Dasboard() {
    return (
        <Layout>
            <section className="dashboard" id="dashboard">
                <TitlePage title="Dashboard" />
                <section className="welcome-card">
                    <Card>
                        <div className=" row d-flex justify-content-start align-items-center px-5 py-4">
                            <div className="col-12 col-sm-7 text-start ">
                                <h2 className="fw-semibold" >Selamat Datang Kembali, Admin!</h2>
                                <span className="text-secondary" >Senang melihat Anda kembali. Mari kita mulai hari ini dengan mengelola situs ini.</span>
                            </div>
                            <img className="col-12 col-sm-5" src={welcomeAdmin} alt="welcomeIMG" />
                        </div>
                    </Card>
                </section>

                <section className="statistic-menu mt-3">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {CardDashboard.map((item, index) => (
                            <CardLinkDash key={index} title={item.title} icon={item.icon} total={item.total} percentase={item.percentase} raising={item.raising} />
                        ))}


                    </div>
                </section>

            </section>
        </Layout>
    )
}

export default Dasboard