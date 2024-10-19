import React, { useState } from "react";

const USER_CREDENTIALS = {
    username: 'admin',
    password: '123'
}

export const Login = ({log_in}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === USER_CREDENTIALS.username &&
            password === USER_CREDENTIALS.password
        ){
            setError('')
            log_in()

        }
        else{
            setUsername('')
            setPassword('')
            setError('Usuario o contraseña incorrectos')
        }
    }
    return(
        <div>
            <h2>Inciar sesión</h2>
            <form onSubmit = {handleSubmit}>
                <div>
        	        <label htmlFor="username">Usuario</label>
                    <input
                        type = "text"
                        name = "userName"
                        id = "userName"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>
                <div> 
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type = "password"
                        name = "password"
                        id = "passsword"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
                {error && <p style= {{color: 'red'}}>{error}</p>}
            </form>
        </div>
    )
}