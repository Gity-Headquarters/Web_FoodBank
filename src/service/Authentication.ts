import axios from "axios";
const url = process.env.BASE_API;

type login = {
    email: string,
    password: string
}

export const login = (formLogin: login, callback: any) => {
    axios.post(`${url}/api/v1/auth/login`, formLogin)
        .then((res) => {
            callback(true, res.data);
        })
        .catch((err) => {
            callback(false, err);
        });
};
