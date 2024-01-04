import { useState } from 'react'
import './login.css'
import { iconFoodbank2 } from '../../image'
import InputForm from '../../components/Elements/inputForm/InputForm'
// import { login } from '../../service/Authentication'
function Login() {

    // const [errorMsg, setErrorMsg] = useState("d-none")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e: any) => {
        const { name, value, } = e.target;
        setFormData({ ...formData, [name]: value });
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
                        <InputForm htmlFor="email" title="Email address" onChange={handleChange} type="email" value={formData.email} placeholder="Enter email" />
                        <InputForm htmlFor="password" title="Password" onChange={handleChange} type="password" value={formData.password} placeholder="Password" />
                        <p className={` text danger `} > Incorect Email or Password</p>
                        <button className='btn w-100 fw-semibold fs-5 mt-5' >Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login