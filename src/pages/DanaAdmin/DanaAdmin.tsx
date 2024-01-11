import Layout from "../../Layout/Layout"
import Card from "../../components/Elements/Card/Card"
import ColumnTable from "../../components/Elements/ColumTable/ColumnTable"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import Table from "../../components/Fragments/Table/Table"
import { wallet1 } from "../../image"
import './danaAdmin.css'
import { columnTable, data } from "../../utils/DataObject"
import Search from "../../components/Elements/Search/Search"
import { useState } from "react"



function DanaAdmin() {
    const [bgTransaction, setBgTransaction] = useState("allTransaction");
    const [searchData, setSearchData] = useState("");

    const handleClick = (transactionType: string) => {
        setBgTransaction(transactionType);
    };

    const handleSearch = (e: any) => {
        setSearchData(e.target.value);
    };

    return (
        <Layout>
            <section className="dana-admin" id="dana-admin">
                <TitlePage title="Dana Admin" />
                <section className="transaction">

                    <Card className="p-3 p-sm-4" >
                        <div className="d-flex justify-content-between my-auto">
                            <div className="text-start d-flex flex-column align-items-start my-auto">
                                <span className="text-secondary fw-medium" >Jumlah Transaksi</span>
                                <h3 className="fw-semibold " >Rp 200,000</h3>
                            </div>
                            <img className="mb-5" src={wallet1} alt="walet1" />
                        </div>
                    </Card>
                </section>

                <section className="data-donatur mt-4 d-grid align-items-center">
                    <Card className="p-2 p-sm-3" >
                        <div className="d-flex row row-cols-lg-2 row-cols-1 justify-content-between">
                            <div className="d-flex gap-4 mb-3">
                                <div className="col  d-flex filtering-data-chart ">
                                    <h4 className={`px-2 ${bgTransaction === "allTransaction" ? "active" : ""}`} onClick={() => { handleClick("allTransaction"); }} >
                                        Semua Transaksi
                                    </h4>

                                    <h4 className={bgTransaction === "newTransaction" ? "active" : ""} onClick={() => { handleClick("newTransaction"); }} >
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
                        <Table value={data} >
                            {columnTable.map((item, index) => (
                                <ColumnTable key={index} field={item.field} header={item.header} body={item.body} />
                            ))}
                        </Table>
                    </Card>



                </section>

            </section>
        </Layout>
    )
}

export default DanaAdmin