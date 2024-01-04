import { useState } from 'react'
import './login.css'
import { iconFoodbank2 } from '../../image'
function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    return (
        <section className="login" id='login'>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card_login ">
                    <div className="d-flex justify-content-center mb-2">
                        <img src={iconFoodbank2} alt="icons-login" />
                    </div>
                    <h1 className='text-center'>Food Bank</h1>
                </div>
            </div>
        </section>
    )
}

export default Login