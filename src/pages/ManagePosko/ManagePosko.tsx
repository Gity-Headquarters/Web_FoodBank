import { BsPlus } from "react-icons/bs"
import Layout from "../../Layout/Layout"
import ButtonCancel from "../../components/Elements/ButtonCancel/ButtonCancel"
import Card from "../../components/Elements/Card/Card"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import './managePosko.css'
import PoskoList from "../../components/Fragments/PoskoList/PoskoList"
import CardPoskoLoader from "../../components/Loader/ManagePoskoLoader/CardPoskoLoader"
import React, { useEffect, useState } from "react"
import Modal from "../../components/Fragments/Modal/Modal"
import { defaultImageModal, iconPencil } from "../../image"
import InputForm from "../../components/Elements/Input/Input"
import ButtonConfirm from "../../components/Elements/ButtonConfirm/ButtonConfirm"
import { createBooth, createFood, getAllPosko } from "../../service/managePosko"
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Option from "../../components/Elements/Option/Option"
import { dataInputJenisMakanan } from "../../utils/DataObject"

interface Posko {
    guid: ''
    name: string;
    address: string;
    time_open: string;
    food_total: number;
    image: string;
    status: string
}

function ManagePosko() {
    const [loading, setLoading] = useState(true);
    const [dataPosko, setDataPosko] = useState<Posko[]>([])
    useEffect(() => {
        getAllPosko((data: Posko[]) => {
            const openPosko = data.filter(posko => posko.status === 'open');
            setDataPosko(openPosko);
            setLoading(false);
        });
    }, []);


    const [formData, setFormData] = useState({
        image: null as File | null,
        name: '',
        address: '',
        time_open: ``,
        time_close: '',
        food_total: 0,
        info_booth: 'infoBooth',
        status: 'open',
        description: 'description',
        number_phone: ''
    });

    const [formFood, setFormFood] = useState({
        name: '',
        jenis: '',
        jumlah: '',
        id_booth: '',
        image: null as File | null,
    })

    console.log(formFood);


    const handleFileManager = (fileName: string) => {
        if (fileName === 'add') {
            const fileInput = document.getElementById("image-input-add") as HTMLInputElement | null;
            fileInput ? fileInput.click() : null;
        } else if (fileName === 'add-food') {
            const fileInput = document.getElementById("image-input-add-food") as HTMLInputElement | null;
            fileInput ? fileInput.click() : null;
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, InputSelect: string) => {
        if (InputSelect === 'add') {
            const selectedImage = e.target.files?.[0];
            setFormData({ ...formData, image: selectedImage || null });
        } else if (InputSelect === 'add-food') {
            const selectedImage = e.target.files?.[0];
            setFormFood({ ...formFood, image: selectedImage || null });

        }

    };
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormFood({ ...formFood, [name]: value });
    };

    const handleAddFood = async (e: any) => {
        e.preventDefault();
        const apiRequest = new FormData();
        apiRequest.append('image', formFood.image as File); // image is a File object
        apiRequest.append('name', formFood.name);
        apiRequest.append('jenis', formFood.jenis);
        apiRequest.append('id_booth', formFood.id_booth);
        apiRequest.append('jumlah', formFood.jumlah.toString());
        await createFood(apiRequest, (status: boolean, res: any) => {
            if (status) {
                setFormFood({
                    name: '',
                    jenis: '',
                    jumlah: '',
                    id_booth: '',
                    image: null as File | null,
                })
                getAllPosko((data: Posko[]) => {
                    const openPosko = data.filter(posko => posko.status === 'open');
                    setDataPosko(openPosko);
                    setLoading(false);
                });

            } else {
                console.log(res);
            }
        })
    }




    const handleCreateBooth = async (e: any) => {
        e.preventDefault();
        const apiRequest = new FormData();
        apiRequest.append('image', formData.image as File); // image is a File object
        apiRequest.append('name', formData.name);
        apiRequest.append('address', formData.address);
        apiRequest.append('time_open', formData.time_open);
        apiRequest.append('time_close', formData.time_close);
        apiRequest.append('food_total', formData.food_total.toString());
        apiRequest.append('info_booth', formData.info_booth);
        apiRequest.append('status', formData.status);
        apiRequest.append('description', formData.description);
        apiRequest.append('number_phone', formData.number_phone);

        await createBooth(apiRequest, (status: boolean, res: any) => {
            if (status) {
                setFormData({
                    image: null as File | null,
                    name: '',
                    address: '',
                    time_open: ``,
                    time_close: '',
                    food_total: 1,
                    info_booth: 'infoBooth',
                    status: 'close',
                    description: 'description',
                    number_phone: ''
                })
                addPosko();
                getAllPosko((data: Posko[]) => {
                    const openPosko = data.filter(posko => posko.status === 'open');
                    setDataPosko(openPosko);
                    setLoading(false);
                });
            } else {
                console.log(res);
                errorPosko();
            }
        })

    }
    const addPosko = () =>
        toast.success("Posko berhasil di tambahkan ✨🚀", {
            duration: 4000,
            position: 'bottom-center',
            className: "custom-toast ",

            // Aria
            ariaProps: {
                role: "status",
                "aria-live": "polite",
            },
        });

    const errorPosko = () =>
        toast.error(
            "Posko gagal ditambah tolong periksa dan masukan data yang sesuai ",
            {
                duration: 4000,
                position: 'bottom-center',
                className: "custom-toast",

                // Aria
                ariaProps: {
                    role: "status",
                    "aria-live": "polite",
                },
            }
        );

    // const updateKonseling = () =>
    //     toast.success("Paket konseling berhasil update ✨🚀", {
    //         duration: 4000,
    //         position: 'bottom-center',
    //         className: "custom-toast",

    //         // Aria
    //         ariaProps: {
    //             role: "status",
    //             "aria-live": "polite",
    //         },
    //     });



    return (
        <Layout>
            <section className="manage-posko position-relative" id="manage-posko">
                <TitlePage title="Manage Posko" />
                <section className="add-booth-and-food">
                    <Card className="p-2 p-md-4 rounded-3   " >
                        <div className=" row  d-flex justify-content-between">
                            <h3 className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start fw-semibold align-items-center" >Tambah Makanan & Posko</h3>
                            <div className="col-12 col-md-7 button-add d-flex gap-2  justify-content-center justify-content-md-end">
                                <ButtonCancel className="fw-semibold d-flex gap-2 justify-content-center align-items-center" bsTarget="#modal-add-food" bsTogle="modal"   >
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
                            : dataPosko.map((item, index) => (
                                <React.Fragment key={index}>
                                    <PoskoList name={item.name} address={item.address} time_open={item.time_open} food_total={item.food_total} image={item.image} />
                                    <Modal id={"modal-update"}>
                                        <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                                            <h5>Update Posko</h5>
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
                                                        id="image-input-update"
                                                        onChange={(e) => handleImageChange(e, 'update')}
                                                    />

                                                    <button className="btn btn-input border-0 p-0 position-absolute bottom-0 end-0" type="button" >
                                                        <img src={iconPencil} onClick={() => handleFileManager('update')} />
                                                    </button>
                                                </div>
                                            </div>
                                            <InputForm onChange={handleChange} htmlFor="name" value={formData.name} title="Masukan Nama Booth" type="text" />
                                            <InputForm onChange={handleChange} htmlFor="number_phone" value={formData.number_phone} title="Masukan Nomor Handphone" type="number" />
                                            <div className="d-flex justify-content-between gap-3">
                                                <InputForm onChange={handleChange} htmlFor="timeOpen_open" value={formData.time_open} title="Masukan Jam Buka" type="text" />
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
                                </React.Fragment>
                            ))
                        }
                    </div>
                </section>

                <Modal id={"modal-add"}>
                    <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                        <h5>Tambah Posko</h5>
                        <button className="btn-close border-0 shadow-none" data-bs-dismiss="modal" aria-label="Close" />
                    </div>

                    <form className="p-4" onSubmit={handleCreateBooth}>
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
                                    id="image-input-add"
                                    onChange={(e) => handleImageChange(e, 'add')}
                                />

                                <button className="btn btn-input border-0 p-0 position-absolute bottom-0 end-0" type="button" >
                                    <img src={iconPencil} onClick={() => handleFileManager('add')} />
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
                            <ButtonConfirm type="submit" bsDismiss={"modal"}  >
                                Simpan
                            </ButtonConfirm>
                        </div>
                    </form>
                </Modal>

                <Modal id={"modal-add-food"}>
                    <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                        <h5>Tambah Makanan</h5>
                        <button className="btn-close border-0 shadow-none" data-bs-dismiss="modal" aria-label="Close" />
                    </div>

                    <form className="p-4" onSubmit={handleAddFood} >
                        <div className="position-relative mx-auto mb-4">
                            <div className="image d-flex justify-content-center ">
                                {formFood.image && formFood.image instanceof Blob ? (
                                    <img src={URL.createObjectURL(formFood.image)} />
                                ) : (
                                    <img src={defaultImageModal} />
                                )}

                                <input
                                    type="file"
                                    className="d-none"
                                    id="image-input-add-food"
                                    onChange={(e) => handleImageChange(e, 'add-food')}
                                />
                                <button className="btn btn-input border-0 p-0 position-absolute bottom-0 end-0" type="button" >
                                    <img src={iconPencil} onClick={() => handleFileManager('add-food')} />
                                </button>
                            </div>
                        </div>
                        <InputForm onChange={handleChange} htmlFor="name" value={formFood.name} title="Nama Makanan" type="text" />
                        <div className="name-booth mb-3 ">
                            <label htmlFor="id_booth"> Masukan Nama Posko</label >
                            <select name="id_booth" value={formFood.id_booth} onChange={handleChange} className="form-select w-100 shadow-none mt-2" >
                                <Option value={''} menu={'Pilih  Posko'} />
                                {dataPosko.map((item, index) => (
                                    <Option key={index} value={item.guid} menu={item.name} />
                                ))}
                            </select>
                        </div>

                        <div className="type-food mb-3 ">
                            <label htmlFor="jenis">Jenis Makanan</label >
                            <select name="jenis" value={formFood.jenis} onChange={handleChange} className="form-select w-100 shadow-none mt-2" >
                                {dataInputJenisMakanan.map((item, index) => (
                                    <Option key={index} value={item.value} menu={item.menu} />
                                ))}
                            </select>
                        </div>
                        <InputForm onChange={handleChange} htmlFor="jumlah" value={formFood.jumlah} title="Jumlah Makanan" type="number" />
                        <div className="d-flex justify-content-end gap-3">
                            <ButtonCancel >
                                Batal
                            </ButtonCancel>
                            <ButtonConfirm type="submit" bsDismiss={"modal"}  >
                                Simpan
                            </ButtonConfirm>
                        </div>
                    </form>
                </Modal>

                <div className="position-relative d-flex justify-content-end">
                    <Toaster />
                </div>

            </section>


        </Layout>
    )
}

export default ManagePosko