import { human1, human2, human3, human4, peopleIcon } from "../image";

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
        icon: peopleIcon,
        percentase: 10,
        raising: 'down'
    },
    {
        title: 'Transaksi Donatur',
        total: '329',
        icon: peopleIcon,
        percentase: 10,
        raising: 'up'
    },
    {
        title: 'Dana Admin',
        total: '7.500.000',
        icon: peopleIcon,
        percentase: 10,
        raising: 'up'
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
        field: "payment_status",
        header: "Status Pembayaran",
    },

];


export const data = [
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price: "Rp 100.000",
        payment_status: "Lunas",
        image: human1
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price: "Rp 100.000",
        payment_status: "Lunas",
        image: human2
    },
    {
        patient_name: "Abdul",
        transaction_id: "123456789",
        price: "Rp 100.000",
        payment_status: "Lunas",
        image: human3
    },
    {
        patient_name: "Gabriel Cuki",
        transaction_id: "123456789",
        price: "Rp 100.000",
        payment_status: "Lunas",
        image: human4
    },

]