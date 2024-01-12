import { BsPlus } from "react-icons/bs"
import Layout from "../../Layout/Layout"
import ButtonCancel from "../../components/Elements/ButtonCancel/ButtonCancel"
import Card from "../../components/Elements/Card/Card"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import './managePosko.css'
import PoskoList from "../../components/Fragments/PoskoList/PoskoList"
import { managePoskoList } from "../../utils/DataObject"
import CardPoskoLoader from "../../components/Loader/ManagePoskoLoader/CardPoskoLoader"
import { useEffect, useState } from "react"
import Modal from "../../components/Fragments/Modal/Modal"
import { defaultImageModal, iconPencil } from "../../image"
import InputForm from "../../components/Elements/Input/Input"
import ButtonConfirm from "../../components/Elements/ButtonConfirm/ButtonConfirm"


function ManagePosko() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoading(false);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    const [formData, setFormData] = useState({
        image: null as File | null,
        name: '',
        address: '',
        time_open: ``,
        time_close: '',
        food_total: 10,
        info_booth: 'infoBooth',
        status: 'close',
        description: 'description',
        number_phone: ''
    });

    const handleFileManager = () => {
        const fileInput = document.getElementById("imageInput") as HTMLInputElement | null;
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files?.[0];
        setFormData({ ...formData, image: selectedImage || null });
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    console.log(formData);


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
                                <ButtonCancel className="fw-semibold" bsTarget="#modal-add" bsTogle="modal" >
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

                <Modal id={"modal-add"}>
                    <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                        <h5>Tambah Posko</h5>
                        <button className="btn-close border-0 shadow-none" data-bs-dismiss="modal" aria-label="Close" />
                    </div>

                    <form className="p-4">
                        <div className="position-relative mx-auto mb-4">
                            <div className="image d-flex justify-content-center ">
                                {formData.image && formData.image instanceof Blob ? (
                                    <img src={URL.createObjectURL(formData.image)} />
                                ) : (
                                    <img src={defaultImageModal} />
                                )}

                                <input
                                    type="file"
                                    className="d-none"
                                    id="imageInput"
                                    onChange={handleImageChange}
                                />

                                <button className="btn btn-input border-0 p-0 position-absolute bottom-0 end-0" type="button" >
                                    <img src={iconPencil} onClick={handleFileManager} />
                                </button>
                            </div>
                        </div>
                        <InputForm onChange={handleChange} htmlFor="name" value={formData.name} title="Masukan Nama Booth" type="text" />
                        <InputForm onChange={handleChange} htmlFor="number_phone" value={formData.number_phone} title="Masukan Nomor Handphone" type="number" />
                        <div className="d-flex justify-content-between gap-3">
                            <InputForm onChange={handleChange} htmlFor="time_open" value={formData.time_open} title="Masukan Jam Buka" type="text" />
                            <InputForm onChange={handleChange} htmlFor="time_close" value={formData.time_close} title="Masukan Jam Tutup" type="text" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Masukan Lokasi</label>
                            <textarea className="form-control" value={formData.address} name="address" onChange={handleChange} style={{ height: 100 }}></textarea>
                        </div>
                        <div className="d-flex justify-content-end gap-3">
                            <ButtonCancel >
                                Batal
                            </ButtonCancel>
                            <ButtonConfirm>
                                Simpan
                            </ButtonConfirm>
                        </div>
                    </form>
                </Modal>

            </section>


        </Layout>
    )
}

export default ManagePosko