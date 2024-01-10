import { useState } from 'react'
import './login.css'
import { logoLogin } from '../../image'
import InputForm from '../../components/Elements/Input/Input'
// why its error
import { login } from '../../service/Authentication'
// import { login } from '../../service/Authentication'


function Login() {

    type LoginResponse = {
        data: {
            token: string
        }
        meta: {
            status: string;
        };
    };

    const [buttonLogin, setButtonLogin] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [errorMsg, setErrorMsg] = useState("d-none")

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, } = e.target;
        setFormData({ ...formData, [name]: value });

        const updatedValues = {
            ...formData,
            [name]: value,
        };

        if (updatedValues.email !== "" && updatedValues.password !== "" && updatedValues.email.includes('@gmail.com')) {
            setButtonLogin(true);
            setDisabled(false);
        } else {
            setButtonLogin(false);
            setDisabled(true);
        }
    }


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        login(formData, (status: boolean, res: LoginResponse) => {
            if (status) {
                console.log(res.data);
                localStorage.setItem("token", res.data.token);
            } else {
                console.log(res);
                setErrorMsg("d-block")
            }
        });
    };

    console.log(formData);


    return (
        <section className="login d-flex p-3 justify-content-center align-items-center" id='login'>
            <div className="card_login p-4 p-sm-5 rounded-4">
                <div className="card-icon">
                    <div className="d-flex justify-content-center mb-2">
                        <img src={logoLogin} alt="icons-login" />
                    </div>
                    <h1 className='text-center'>Food Bank</h1>
                </div>
                <form onSubmit={handleLogin} >
                    <InputForm htmlFor="email" onChange={handleChange} type="email" value={formData.email} placeholder="Masukkan Email" />
                    <InputForm htmlFor="password" onChange={handleChange} type="password" value={formData.password} placeholder="Masukkan Password" />
                    <p className={` text-danger fw-medium mt-4 ${errorMsg}`} > Incorect Email or Password</p>
                    <button disabled={disabled} className={`btn ${buttonLogin ? 'btn-login' : 'btn-secondary text-white-50'} w-100 fw-semibold fs-5 mt-5`} >Masuk</button>
                </form>
            </div>
        </section>
    )
}

export default Login