import { useEffect, useState } from "react";
import { DashDonatur, DashMoney, iconPosko, human1, human2, human3, human4, peopleIcon, searchFailed } from "../image";
import { Link } from "react-router-dom";

export const CardDashboard = [
    {
        title: 'Total Pengguna',
        total: '1,784',
        icon: peopleIcon,
        percentase: 10,
        raising: 'up'
    },
    {
        title: 'Total Posko',
        total: '145',
        icon: iconPosko,
        percentase: 10,
        raising: 'down',
        location: '/total-posko'
    },
    {
        title: 'Transaksi Donatur',
        total: '329',
        icon: DashDonatur,
        percentase: 10,
        raising: 'up',
        location: '/dana-admin'
    },
    {
        title: 'Dana Admin',
        total: '7.500.000',
        icon: DashMoney,
        percentase: 10,
        raising: 'up',
        location: '/dana-admin'
    },
]


const imageDefault = ['human1', 'human2', 'human3', 'human4'];

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageDefault.length);
    return imageDefault[randomIndex];
};

export const styleName = (rowData: any) => {
    const defaultImage = getRandomImage();
    console.log(rowData);

    return (
        <>
            {rowData.image ? (
                <img
                    src={rowData.image}
                    style={{ width: "50px", height: "50px", marginRight: "10px", borderRadius: "50%" }}
                    alt="realIMage"
                />
            ) : (
                <img
                    src={defaultImage}
                    alt="defaultImage"
                    style={{ width: "50px", height: "50px", marginRight: "10px", borderRadius: "50%" }}
                />
            )}

            {rowData.patient_name}
        </>

    );
};

export const columnTable = [
    {
        field: "name",
        header: "Name",
        body: styleName
    },
    {
        field: "transaction_id",
        header: "ID Transaksi",
    },
    {
        field: "price",
        header: "Jumlah Pembayaran",
    },
    {
        field: "uuid",
        header: "UUID",
    },

];


export const data = [
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price: "Rp 100.000",
        uuid: "4a13a318-bda5-47bf-84d3-42d3c01a3533",
        image: human1
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price: "Rp 100.000",
        uuid: "4a13a318-bda5-47bf-84d3-42d3c01a3533",
        image: human2
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price: "Rp 100.000",
        uuid: "4a13a318-bda5-47bf-84d3-42d3c01a3533",
        image: human3
    },
    {
        patient_name: "Gabriel Cuki",
        transaction_id: "123456789",
        price: "Rp 100.000",
        uuid: "4a13a318-bda5-47bf-84d3-42d3c01a3533",
        image: human4
    },

]

// posko table

const styleLocationPosko = (rowData: any) => {
    const maxLength = 50
    const shortText = rowData.address.length > maxLength ? rowData.address.slice(0, maxLength) + "..." : rowData.address
    return (
        <div>
            {shortText}
        </div>
    )
}


const styleStatusPosko = (rowData: any) => {
    const [changeItemStatus, setChangeItemStatus] = useState("");


    useEffect(() => {
        { rowData.status === 'open' ? setChangeItemStatus("changeItemStatusTersedia") : setChangeItemStatus("changeItemStatusTutup") }

    },);
    const statusLabel = rowData.status === 'open' ? 'Tersedia' : 'Tutup';
    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className={`my-3 ${changeItemStatus}`}>{statusLabel}</div>
            </div>
        </>
    );
};


export const columnTablePosko = [

    {
        field: "name",
        header: 'Nama Posko',
    },
    {
        field: "food_total",
        header: "Jumlah Makanan",
    },
    {
        field: "address",
        header: "Lokasi Posko",
        body: styleLocationPosko
    },
    {
        field: " status",
        header: "Status Posko",
        body: styleStatusPosko
    },

];


export const empetyDataTable = () => {
    return (
        <div className="d-grid justify-content-center">
            <div className="w-100 d-grid justify-content-center mx-auto">
                <img className="mx-auto" src={searchFailed} alt="" />
                <div className="text-justify mt-4">
                    <h3 className="text-black fw-semibold" >Maaf, Pencarian tidak dapat ditemukan</h3>
                </div>
            </div>
        </div>
    );
}

export const dataInputJenisMakanan = [
    {
        value: "",
        menu: "Pilih Jenis Makanan "
    },
    {
        value: "sembako",
        menu: "Sembako"
    },
    {
        value: "minuman",
        menu: "Minuman"
    },
    {
        value: "makanan berat",
        menu: "Makanan Berat"
    },
    {
        value: "makanan ringan",
        menu: "Makanan Ringan"
    },
    {
        value: "buah buahan",
        menu: "Buah Buahan"
    },
    {
        value: "kue dan roti",
        menu: "Kue dan Roti"
    }
]

// transaksi user table 

const styleNameTransaksiUser = (rowData: any) => {
    return (
        <Link to={`/transaksi-user/detail-transaksi/${rowData.guid}`} >
            {rowData.User.username}
        </Link>
    )
}

const styleLocationBooth = (rowData: any) => {
    return (
        <>
            {rowData.Booth.address}
        </>
    )

}

const styleStatusUser = (rowData: any) => {
    const [changeItemStatus, setChangeItemStatus] = useState("");
    useEffect(() => {
        if (rowData.status === "taked") {
            setChangeItemStatus("changeItemStatusAccepted")
        } else if (rowData.status === "waiting") {
            setChangeItemStatus("changeItemStatusWaiting")
        } else if (rowData.status === "approve") {
            setChangeItemStatus("changeItemStatusAccepted")
        } else {
            setChangeItemStatus("changeItemStatusRejected")
        }
    },);

    let statusLabel;

    if (rowData.status === 'taked') {
        statusLabel = 'Selesai';
    } else if (rowData.status === 'waiting') {
        statusLabel = 'Menunggu';
    } else if (rowData.status === 'approve') {
        statusLabel = 'Di Setujui';
    } else {
        statusLabel = 'Di Tolak';
    }

    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className={`my-3 ${changeItemStatus}`}>{statusLabel}</div>
            </div>
        </>
    );

}

export const columnTableTransaksiUser = [
    {
        field: "name",
        header: "Nama",
        body: styleNameTransaksiUser,
    },
    {
        field: "address",
        header: "Lokasi Posko",
        body: styleLocationBooth,
    },

    {
        field: "status",
        header: "Status User",
        body: styleStatusUser,
    },

]


