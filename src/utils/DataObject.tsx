import { useEffect, useState } from "react";
import { DashDonatur, DashMoney, DashPosko, human1, human2, human3, human4, peopleIcon, poskoImage } from "../image";

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
        icon: DashPosko,
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
    const shortText = rowData.location.length > maxLength ? rowData.location.slice(0, maxLength) + "..." : rowData.location
    return (
        <div>
            {shortText}
        </div>
    )
}


const styleStatusPosko = (rowData: any) => {
    const [changeItemStatus, setChangeItemStatus] = useState("");


    useEffect(() => {
        { rowData.status === 'Tersedia' ? setChangeItemStatus("changeItemStatusTersedia") : setChangeItemStatus("changeItemStatusTutup") }
    },);


    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className={`my-3 ${changeItemStatus}`}>{rowData.status}</div>
            </div>
        </>
    );
};


export const columnTablePosko = [

    {
        field: "id_posko",
        header: 'ID',
    },
    {
        field: "total_food",
        header: "Jumlah Makanan",
    },
    {
        field: "location",
        header: "Location",
        body: styleLocationPosko
    },
    {
        field: "status",
        header: "Status Posko",
        body: styleStatusPosko
    },

];


export const dataPosko = [
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan kota",
        status: "Tersedia",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan kampung",
        status: "Tersedia",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan ",
        status: "Tersedia",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai",
        status: "Tutup",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melati 5, RT.3/RW.1",
        status: "Tutup",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan",
        status: "Tutup",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan",
        status: "Tutup",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan",
        status: "Tutup",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan",
        status: "Tutup",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan",
        status: "Tutup",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan",
        status: "Tutup",
    },
    {
        id_posko: 123456789,
        total_food: "10",
        location: "Jakarta,Jl. Melawai 5, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan",
        status: "Tutup",
    },

]

// posko table end

export const managePoskoList = [
    {
        title: 'Food Bank Booth',
        totalFoods: 400,
        location: 'Dago, Bandung, Indonesia',
        time: '12:00 PM',
        image: poskoImage
    },
    {
        title: 'Food Bank Booth',
        totalFoods: 400,
        location: 'Dago, Bandung, Indonesia cek teks panjang',
        time: '12:00 PM',
        image: poskoImage
    },
    {
        title: 'Food Bank Booth',
        totalFoods: 400,
        location: 'Dago, Bandung, Indonesia',
        time: '12:00 PM',
        image: poskoImage
    },
    {
        title: 'Food Bank Booth',
        totalFoods: 400,
        location: 'Dago, Bandung, Indonesia',
        time: '12:00 PM',
        image: poskoImage
    },
    {
        title: 'Food Bank Booth',
        totalFoods: 400,
        location: 'Dago, Bandung, Indonesia cek teks panjang',
        time: '12:00 PM',
        image: poskoImage
    },
    {
        title: 'Food Bank Booth',
        totalFoods: 400,
        location: 'Dago, Bandung, Indonesia',
        time: '12:00 PM',
        image: poskoImage
    },
]