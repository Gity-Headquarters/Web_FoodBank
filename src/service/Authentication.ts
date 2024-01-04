import axios from "axios";
const url = process.env.BASE_API;

export const login = (formLogin: string, callback: any) => {
    axios.post(`${url}/api/v1/auth/login`, formLogin)
        .then((res) => {
            callback(true, res.data);
        })
        .catch((err) => {
            callback(false, err);
        });
};
