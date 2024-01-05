import { useState } from 'react'
import './login.css'
import { iconFoodbank2 } from '../../image'
import InputForm from '../../components/Elements/inputForm/InputForm'
// import { login } from '../../service/Authentication'
function Login() {

    const [errorMsg, setErrorMsg] = useState("d-none")
    const [buttonLogin, setButtonLogin] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })


    const handleChange = (e: any) => {
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



    // const formLogin = JSON.stringify(formData);
    console.log(formData);

    // const handleLogin = (e: any) => {
    //     e.preventDefault();

    //     login(formLogin, (status: boolean, res: { data: string, meta: { status: string } }) => {
    //         if (status) {
    //             alert('login success');
    //             console.log(res.data);

    //         } else {
    //             alert('login failed');
    //             console.log(res);
    //             setErrorMsg('block');
    //         }
    //     });
    // };

    return (
        <section className="login" id='login'>
            <div className="container d-grid justify-content-center align-items-center">
                <div className="card_login p-5 rounded-4">
                    <div className="card-icon">
                        <div className="d-flex justify-content-center mb-2">
                            <img src={iconFoodbank2} alt="icons-login" />
                        </div>
                        <h1 className='text-center'>Food Bank</h1>
                    </div>
                    <form>
                        <InputForm htmlFor="email" onChange={handleChange} type="email" value={formData.email} placeholder="Masukkan Email" />
                        <InputForm htmlFor="password" onChange={handleChange} type="password" value={formData.password} placeholder="Masukkan Password" />
                        <p className={` text danger ${errorMsg}`} > Incorect Email or Password</p>
                        <button disabled={disabled} className={`btn ${buttonLogin ? 'btn-login' : 'btn-secondary text-white-50'} w-100 fw-semibold fs-5 mt-5`} >Masuk</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login