import { useState } from 'react'
import './login.css'
import { logoLogin } from '../../image'
import InputForm from '../../components/Elements/Input/Input'
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { login } from '../../Service/authentication'

function Login() {

    type LoginResponse = {
        data: {
            token: string
        }
        meta: {
            status: string;
        };
        token: string
    };

    const [buttonLogin, setButtonLogin] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [errorMsg, setErrorMsg] = useState("d-none")
    const [showPassword, setShowPassword] = useState(true)
    const [typePassword, setTypePassword] = useState("password")

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

        if (updatedValues.email !== "" && updatedValues.password !== "" && updatedValues.email.includes('@test.com') || updatedValues.email.includes('@gmail.com')) {
            setButtonLogin(true);
            setDisabled(false);
        } else {
            setButtonLogin(false);
            setDisabled(true);
        }
    }

    const navigate = useNavigate();
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(formData, (status: boolean, res: LoginResponse) => {
            if (status) {
                console.log(res);
                localStorage.setItem("token", res.token);
                navigate("/dashboard");
            } else {
                console.log(res);
                setErrorMsg("d-block")
            }
        });
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
        if (typePassword === "password") {
            setTypePassword("text");
        } else {
            setTypePassword("password");
        }
    }


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
                    <InputForm className='form-input-login' htmlFor="email" onChange={handleChange} type="email" value={formData.email} placeholder="Masukkan Email" />
                    <div className="password position-relative">
                        <button onClick={togglePassword} type='button' className='icon-password border-0 bg-transparent d-flex position-absolute  justify-content-center align-items-center pe-4' > {showPassword ? <FaEyeSlash size={20} /> : <IoEye size={20} />} </button>
                        <InputForm className='form-input-login' htmlFor="password" onChange={handleChange} type={typePassword} value={formData.password} placeholder="Masukkan Kata Sandi" />
                    </div>
                    <p className={` text-danger fw-medium mt-4 ${errorMsg}`} > Incorect Email or Password</p>
                    <button disabled={disabled} className={`btn ${buttonLogin ? 'btn-login' : 'btn-secondary text-white-50'} w-100 fw-semibold fs-5 mt-5`} >Masuk</button>
                </form>
            </div>
        </section>
    )
}

export default Login