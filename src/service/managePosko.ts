import axios from "axios";
const url = process.env.BASE_API;

// type posko = {

// }

export const createBooth = async (data: any, callback: any) => {
    await axios.post(`${url}/booth`, data, {
        headers: { 'Content-Type': 'multipart/form-data', }
    })
        .then((res) => {
            callback(true, res.data);
        })
        .catch((err) => {
            console.log(err);
            callback(false, err.message);
        });
} 