import Layout from "../../Layout/Layout"
import Card from "../../components/Elements/Card/Card"
import ColumnTable from "../../components/Elements/ColumTable/ColumnTable"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import Table from "../../components/Fragments/Table/Table"
import { wallet1 } from "../../image"
import './danaAdmin.css'

const columnTable = [
    {
        field: "patient_name",
        header: "Name",
    },
    {
        field: "transaction_id",
        header: "ID Transaksi",
    },
    {
        field: "price_counseling",
        header: "Harga",
    },
    {
        field: "payment_status",
        header: "Status Pembayaran",
    },

];


const data = [
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price_counseling: "Rp 100.000",
        payment_status: "Lunas",
    },
]

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

                <section className="data-donatur mt-4 d-grid align-items-center">
                    <Card className="p-5 " >
                        <Table value={data} >
                            {columnTable.map((item, index) => (
                                <ColumnTable key={index} field={item.field} header={item.header} />
                            ))}
                        </Table>
                    </Card>



                </section>

            </section>
        </Layout>
    )
}

export default DanaAdmin