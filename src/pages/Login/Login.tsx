import { useState } from 'react'
import './login.css'
import { iconFoodbank2 } from '../../image'
function Login() {

    // const [formData, setFormData] = useState({
    //     email: "",
    //     password: "",
    // })

    return (
        <section className="login" id='login'>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card_login">
                    <img src={iconFoodbank2} alt="" />
                    <p className='text-black' >bajing</p>
                </div>
            </div>
        </section>
    )
}

export default Login