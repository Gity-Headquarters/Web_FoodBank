import Layout from "../../Layout/Layout"
import ButtonCancel from "../../components/Elements/ButtonCancel/ButtonCancel"
import ButtonConfirm from "../../components/Elements/ButtonConfirm/ButtonConfirm"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"


function Dasboard() {
    return (
        <Layout>
            <section className="dashboard " >
                <TitlePage title="Dashboard" />
                <ButtonConfirm title="Simpan" />
                <br />
                <ButtonCancel title="Batal" />
            </section>
        </Layout>
    )
}

export default Dasboard