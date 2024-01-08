import Layout from "../../Layout/Layout"
import ButtonConfirm from "../../components/Elements/ButtonConfirm/ButtonConfirm"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"


function Dasboard() {
    return (
        <Layout>
            <section className="dashboard " >
                <TitlePage title="Dashboard" />
                <ButtonConfirm title="Simpan" />
            </section>
        </Layout>
    )
}

export default Dasboard