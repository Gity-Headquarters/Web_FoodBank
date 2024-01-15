import axios from "axios";
const url = process.env.BASE_API;

// type posko = {

// }

export const createBooth = async (formData: any, callback: any) => {
    await axios.post(`${url}/booth`, formData, {
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

export const getAllPosko = (callback: any) => {
    axios.get(`${url}/booth`)
        .then((res) => {
            callback(res.data.data);
        })
        .catch((err) => {
            console.log(err);

        })
}


export const createFood = async (formData: any, callback: any) => {
    await axios.post(`${url}/food`, formData, {
        headers: { 'Content-Type': 'multipart/form-data', }
    })
        .then((res) => {
            callback(true, res.data);
        }).catch((err) => {
            console.log(err);
            callback(false, err);
        });
}


export const updateBooth = async (id: string, formData: any, callback: any) => {
    await axios.put(`${url}/booth/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data', }
    })
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}