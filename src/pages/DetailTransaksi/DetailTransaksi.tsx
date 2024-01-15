import { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import { getAllFood, getDetailTransaction, updateTransaction } from '../../service/transactionUser'
import TitlePage from '../../components/Elements/TitlePage/TitlePage'
import ListDetailTransaksi from '../../components/Elements/ListDetailTransaksi/ListDetailTransaksi'
import './detailTransaksi.css'
import ButtonCancel from '../../components/Elements/ButtonCancel/ButtonCancel'
import ButtonConfirm from '../../components/Elements/ButtonConfirm/ButtonConfirm'
import Modal from '../../components/Fragments/Modal/Modal'
import InputForm from '../../components/Elements/Input/Input'
import Option from '../../components/Elements/Option/Option'

interface User {
    username: string;
    email: string;
    guid: string;
}

interface Booth {
    address: string;
}

interface Transaction {
    id: string;
    username: string;
    status: string;
    address: string;
    User: User;
    Booth: Booth;
}


interface Food {
    name: string;
    guid: string;
}

interface FormData {
    status: string;
    total: string; // Ubah tipe data total menjadi number
    food_id: string;
}


const DetailTransaksi = () => {
    const { id = "" } = useParams();
    const [transaction, setTransaction] = useState<Transaction | null>(null);
    const [food, setAllFood] = useState<Food[]>([]);

    useEffect(() => {
        getDetailTransaction(id, (data: any) => {
            setTransaction(data)
        })
        getAllFood((data: any) => {
            setAllFood(data)
        })
    }, []);

    const [formData, setFormData] = useState<FormData>({
        status: '',
        total: '',
        food_id: '',
    });
    console.log('makanan', food);


    let styleStatus
    if (transaction?.status === "taked") {
        styleStatus = 'Selesai'
    } else if (transaction?.status === 'waiting') {
        styleStatus = 'Menunggu'
    } else if (transaction?.status === 'approve') {
        styleStatus = 'Di Setujui'
    }
    else if (transaction?.status === 'rejected') {
        styleStatus = 'Di Tolak'
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        const parsedValue = name === 'total' ? parseFloat(value) : value;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: name === 'total' ? (parsedValue as number) : parsedValue
        }));
    }


    const handleUpdateTaked = async (e: any) => {
        console.log('tereksekusi');
        e.preventDefault();
        await updateTransaction(id, formData, (res: any) => {
            getDetailTransaction(id, (data: any) => {
                setTransaction(data);
            });
            console.log(res);
            deleteState(e);
        });
    };

    const deleteState = (e: any) => {
        e.preventDefault();
        setFormData({
            status: '',
            total: '',
            food_id: ''
        })
    }

    const handleValueButton = (e: any, status: string) => {
        e.preventDefault();
        setFormData({ ...formData, status: status });
    }

    const handleApproveReject = async (e: any) => {
        e.preventDefault();
        const { status } = formData;
        await updateTransaction(id, { status }, (res: any) => {
            getDetailTransaction(id, (data: any) => {
                setTransaction(data);
            });
            console.log(res);
            deleteState(e);
        })
    }

    console.log(formData);



    return (
        <Layout>
            <section className="detail-transaction">
                <TitlePage title="Detail Transaksi" />
                <section className="hero-transaction rounded-3 p-4">
                    <ListDetailTransaksi title="Nama User" text={transaction?.User.username || ''} />
                    <ListDetailTransaksi title="Alamat Email" text={transaction?.User.email || ''} />
                    <ListDetailTransaksi title="ID User" text={transaction?.User.guid || ''} />
                    <ListDetailTransaksi title="Lokasi Posko" text={transaction?.Booth.address || ''} />
                    <ListDetailTransaksi title="Status" text={styleStatus} />
                    <div className="d-flex mt-4 gap-2">
                        <ButtonCancel className={styleStatus === "Selesai" || styleStatus === "Di Tolak" || styleStatus === "Di Setujui" ? 'd-none' : 'd-block'} bsTarget="#modal-reject" bsTogle="modal" onclick={(e: any) => handleValueButton(e, 'rejected')}  > Tolak </ButtonCancel>
                        <ButtonCancel className={styleStatus === "Selesai" || styleStatus === "Di Setujui" || styleStatus === "Di Tolak" ? 'd-none' : 'd-block'} bsTarget="#modal-approve" bsTogle="modal" onclick={(e: any) => handleValueButton(e, 'approve')}  > Setujui </ButtonCancel>
                        <ButtonConfirm className={styleStatus === "Selesai" || styleStatus === "Di Tolak" ? 'd-none' : 'd-block'} bsTarget="#modal-taked" bsTogle="modal" onclick={(e: any) => handleValueButton(e, 'taked')}>Selesai</ButtonConfirm>
                    </div>
                </section>
                <Modal id={"modal-taked"}>
                    <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                        <h5>Selesaikan Transaksi</h5>
                        <button className="btn-close border-0 shadow-none" data-bs-dismiss="modal" aria-label="Close" onClick={deleteState} />
                    </div>

                    <form className='p-4' action="">
                        <InputForm styleTitle="text-black fw-semibold" type='number' onChange={handleChange} htmlFor="total" value={formData.total} title="Masukan Jumlah" />
                        <select name="food_id" value={formData.food_id} onChange={handleChange} className="form-select  w-100 shadow-none mt-2 " >
                            <Option value={''} menu={'Pilih  Makanan'} />
                            {food.map((item, index) => (
                                <Option key={index} value={item.guid} menu={item.name} />
                            ))}
                        </select>
                        <div className="d-flex mt-4 gap-2 justify-content-end">
                            <ButtonCancel onclick={deleteState} bsDismiss={"modal"} > Batal </ButtonCancel>
                            <ButtonConfirm onclick={handleUpdateTaked} bsDismiss={"modal"}  >Selesai</ButtonConfirm>
                        </div>

                    </form>
                </Modal>

                <Modal id={"modal-approve"}>
                    <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                        <h5>Setujui Transaksi</h5>
                        <button className="btn-close border-0 shadow-none" data-bs-dismiss="modal" aria-label="Close" onClick={deleteState} />
                    </div>

                    <form className='p-4' action="">
                        <h5> Apakah Anda Ingin Menyetujui nya ?</h5>
                        <div className="d-flex mt-4 gap-2 justify-content-end">
                            <ButtonCancel onclick={deleteState} bsDismiss={"modal"} > Batal </ButtonCancel>
                            <ButtonConfirm onclick={handleApproveReject} bsDismiss={"modal"} >Setujui</ButtonConfirm>
                        </div>
                    </form>
                </Modal>
                <Modal id={"modal-reject"}>
                    <div className="d-flex justify-content-between p-3 text-black fw-semibold">
                        <h5>Tolak Transaksi</h5>
                        <button className="btn-close border-0 shadow-none" data-bs-dismiss="modal" aria-label="Close" onClick={deleteState} />
                    </div>

                    <form className='p-4' action="">
                        <h5> Apakah Anda Ingin Menolak nya ?</h5>
                        <div className="d-flex mt-4 gap-2 justify-content-end">
                            <ButtonCancel onclick={deleteState} bsDismiss={"modal"} > Batal </ButtonCancel>
                            <ButtonConfirm onclick={handleApproveReject} bsDismiss={"modal"} >Tolak</ButtonConfirm>
                        </div>
                    </form>
                </Modal>
            </section>
        </Layout>

    )
}

export default DetailTransaksi