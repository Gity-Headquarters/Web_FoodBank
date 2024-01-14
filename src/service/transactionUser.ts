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
