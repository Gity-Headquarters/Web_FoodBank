import { useEffect, useState } from "react"
import Layout from "../../Layout/Layout"
import Card from "../../components/Elements/Card/Card"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import { transaksiUser } from "../../image"
import './transaksiUser.css'
import Search from "../../components/Elements/Search/Search"
import Table from "../../components/Fragments/Table/Table"
import ColumnTable from "../../components/Elements/ColumTable/ColumnTable"
import { columnTableTransaksiUser, empetyDataTable } from "../../utils/DataObject"
import { getAllTransaction } from "../../service/transactionUser"

interface Transaksi {
    id: number
    guid: string;
    booth_id: string;
    status: string;
    name: string
    User: {
        username: string
    }

}

const TransaksiUser = () => {
    const [bgTransaction, setBgTransaction] = useState("allBooths");
    const [searchData, setSearchData] = useState("");
    const [transaction, setTransaction] = useState<Transaksi[]>([]);

    const handleClick = (transactionType: string) => {
        setBgTransaction(transactionType);
    };
    useEffect(() => {
        getAllTransaction((data: any) => {
            setTransaction(data)
        });
    }, []);



    useEffect(() => {
        if (bgTransaction !== "allBooths") {
            const reversedData = [...transaction].reverse();
            setTransaction(reversedData);
        } else {
            const sortedData = [...transaction].sort((a, b) => a.id - b.id);
            setTransaction(sortedData);
        }
    }, [bgTransaction]);


    console.log(transaction);



    const handleSearch = (e: any) => {
        setSearchData(e.target.value);
    };

    const filteredData = transaction ? transaction.filter((item) => {
        return item.User.username && item.User.username.toLowerCase().includes(searchData.toLowerCase());
    }) : [];

    console.log(filteredData);

    return (
        <Layout>
            <section className="transaction-user">
                <TitlePage title="Transaksi User" />
                <section className="transaction-hero">
                    <Card className="p-3 p-sm-4" >
                        <div className="d-flex justify-content-between my-auto">
                            <div className="text-start d-flex flex-column align-items-start my-auto">
                                <span className="text-secondary fw-medium" >Total Transaksi User</span>
                                <h3 className="fw-semibold " >120</h3>
                            </div>
                            <img className="mb-5" src={transaksiUser} alt="user" />
                        </div>
                    </Card>
                </section>
            </section>
            <section className="data-transaction-user mt-4 mb-4">
                <Card className="p-2 p-sm-3" >
                    <div className="d-flex row row-cols-lg-2 row-cols-1 justify-content-between">
                        <div className="d-flex gap-4 mb-3">
                            <div className="col d-flex filtering-data-chart ">
                                <h4 className={`px-2 ${bgTransaction === "allBooths" ? "active" : ""}`} onClick={() => { handleClick("allBooths"); }} >
                                    Semua Transaksi
                                </h4>

                                <h4 className={bgTransaction === "newBooth" ? "active" : ""} onClick={() => { handleClick("newBooth"); }} >
                                    Transaki Terbaru
                                </h4>
                            </div>
                        </div>
                        <div className="col gap-2 search-container d-flex justify-content-end">
                            <Search
                                size={20}
                                placeholder={"Search"}
                                value={searchData}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                    <Table value={transaction ? filteredData : []} emptyMessage={empetyDataTable}>
                        {columnTableTransaksiUser.map((item, index) => (
                            <ColumnTable key={index} field={item.field} header={item.header} body={item.body} />
                        ))}
                    </Table>
                </Card>
            </section>
        </Layout>
    )
}

export default TransaksiUser