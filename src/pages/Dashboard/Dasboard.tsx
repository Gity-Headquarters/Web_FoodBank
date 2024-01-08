import Layout from "../../Layout/Layout"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import CardLink from "../../components/Fragments/CardLink/CardLink"


function Dasboard() {
    return (
        <Layout>
            <section className="dashboard " >
                <TitlePage title="Dashboard" />
                <CardLink location="/" >
                    <p>tolong klik !</p>
                </CardLink>
            </section>
        </Layout>
    )
}

export default Dasboard