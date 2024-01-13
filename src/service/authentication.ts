import axios from "axios";
const url = process.env.BASE_API;

type login = {
    email: string,
    password: string
}


export const authLogin = (formLogin: login, callback: any) => {
    axios.post(`${url}/auth/login`, formLogin)
        .then((res) => {
            callback(true, res.data);
        })
        .catch((err) => {
            callback(false, err);
        });
};
