import Layout from "../../Layout/Layout"
import Card from "../../components/Elements/Card/Card"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import { wallet1 } from "../../image"
import './totalPosko.css'


const TotalPosko = () => {
    return (
        <Layout>
            <section className="total-posko" id="total-posko">
                <TitlePage title="Total Posko" />
                <section className="hero-total-posko">
                    <Card className="p-4" >
                        <div className="d-flex justify-content-between my-auto">
                            <div className="text-start d-flex flex-column align-items-start my-auto">
                                <span className="text-secondary fw-medium" >Total Posko</span>
                                <h3 className="fw-semibold " >145</h3>
                            </div>
                            <img className="mb-5" src={wallet1} alt="walet1" />
                        </div>
                    </Card>
                </section>
            </section>
        </Layout>
    )
}

export default TotalPosko