import axios from "axios";
const url = process.env.BASE_API;

export const getAllTransaction = (callback: any) => {
    axios.get(`${url}/transaction`)
        .then((res) => {
            callback(res.data.data.transactions);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getDetailTransaction = (id: string, callback: any) => {
    axios.get(`${url}/transaction/${id}`)
        .then((res) => {
            callback(res.data.data.transaction);
        }).catch((err) => {
            console.log(err);
        })
}

export const updateTransaction = async (id: string, data: any, callback: any) => {
    await axios.put(`${url}/transaction/${id}`, data)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getAllFood = (callback: any) => {
    axios.get(`${url}/food`)
        .then((res) => {
            callback(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
}