import { useState } from 'react'

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    return (
        <section className="login" id='login'>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card_login">
                    <p className='text-black' > </p>
                </div>
            </div>
        </section>
    )
}

export default Login