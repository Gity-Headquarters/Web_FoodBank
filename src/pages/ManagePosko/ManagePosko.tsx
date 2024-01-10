import { BsPlus } from "react-icons/bs"
import Layout from "../../Layout/Layout"
import ButtonCancel from "../../components/Elements/ButtonCancel/ButtonCancel"
import Card from "../../components/Elements/Card/Card"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import './managePosko.css'
import { iconFood, iconMap, iconWatch, poskoImage } from "../../image"
import { HiDotsHorizontal } from "react-icons/hi";


function ManagePosko() {
    return (
        <Layout>
            <section className="manage-posko" id="manage-posko">
                <TitlePage title="Manage Posko" />
                <section className="add-booth-and-food">
                    <Card className="p-2 p-md-4 rounded-3   " >
                        <div className=" row  d-flex justify-content-between">

                            <h3 className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start" >Manage Posko</h3>

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
                        <div className="col-12 col-md-6 col-lg-3 p-2 ">
                            <Card >
                                <div className="body-card">
                                    <img src={poskoImage} alt="image posko" />
                                    <div className="information p-3">
                                        <h3 className="fw-bold mb-3" >Food Bank Booth</h3>
                                        <div className="food d-flex align-items-center">
                                            <img src={iconFood} alt="iconfood" />
                                            <span className="text-secondary ms-2  fw-medium"  >400 Foods</span>
                                        </div>
                                        <div className="map d-flex align-items-center">
                                            <img src={iconMap} alt="" />
                                            <span className="text-secondary ms-2  fw-medium" >Dago, Bandung, Indonesia</span>
                                        </div>
                                        <div className="time d-flex align-items-center justify-content-between">
                                            <div className="time-rapper">
                                                <img src={iconWatch} alt="iconWatch" />
                                                <span className="text-secondary ms-2  fw-medium" >12:00 PM</span>
                                            </div>
                                            <button className="btn border-0" ><HiDotsHorizontal size={25} /></button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default ManagePosko