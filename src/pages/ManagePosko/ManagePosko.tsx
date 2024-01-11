import { BsPlus } from "react-icons/bs"
import Layout from "../../Layout/Layout"
import ButtonCancel from "../../components/Elements/ButtonCancel/ButtonCancel"
import Card from "../../components/Elements/Card/Card"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import './managePosko.css'
import PoskoList from "../../components/Fragments/PoskoList/PoskoList"
import { managePoskoList } from "../../utils/DataObject"
import CardPoskoLoader from "../../components/Loader/ManagePoskoLoader/CardPoskoLoader"
import { useState } from "react"


function ManagePosko() {
    const [loading, setLoading] = useState(true)
    setInterval(() => {
        setLoading(false);
    }, 1000);

    return (
        <Layout>
            <section className="manage-posko" id="manage-posko">
                <TitlePage title="Manage Posko" />
                <section className="add-booth-and-food">
                    <Card className="p-2 p-md-4 rounded-3   " >
                        <div className=" row  d-flex justify-content-between">
                            <h3 className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start fw-semibold align-items-center" >Tambah Makanan & Posko</h3>
                            <div className="col-12 col-md-7 button-add d-flex gap-2  justify-content-center justify-content-md-end">
                                <ButtonCancel className="fw-semibold d-flex gap-2 justify-content-center align-items-center"  >
                                    <BsPlus size={20} /> Tambah Makanan
                                </ButtonCancel>
                                <ButtonCancel className="fw-semibold"  >
                                    <BsPlus size={20} /> Tambah Posko
                                </ButtonCancel>
                            </div>

                        </div>
                    </Card>
                </section>

                <section className="list-posko mt-4 mb-4" >
                    <div className="row">
                        {loading ? <CardPoskoLoader numberOfCards={8} />
                            : managePoskoList.map((item, index) => (
                                <PoskoList title={item.title} location={item.location} time={item.time} key={index} totalFoods={item.totalFoods} image={item.image} />
                            ))
                        }
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default ManagePosko