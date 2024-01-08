import Layout from "../../Layout/Layout"
import Card from "../../components/Elements/Card/Card"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import { wallet1 } from "../../image"
import './danaAdmin.css'

function DanaAdmin() {
    return (
        <Layout>
            <section className="dana-admin" id="dana-admin">
                <TitlePage title="Dana Admin" />
                <section className="transaction">

                    <Card className="p-4" >
                        <div className="d-flex justify-content-between my-auto">
                            <div className="text-start d-flex flex-column align-items-start my-auto">
                                <span className="text-secondary fw-medium" >Total Posko</span>
                                <h3 className="fw-semibold " >Rp 200,000</h3>
                            </div>
                            <img className="mb-5" src={wallet1} alt="walet1" />
                        </div>
                    </Card>
                </section>

                <section className="data-donatur">

                </section>

            </section>
        </Layout>
    )
}

export default DanaAdmin