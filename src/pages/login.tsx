import {ChangeEvent, useState, useContext} from "react"
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext} from '../contexts/auth';

export default function Login() {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const updateUsername = (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
    const updatePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    return (
        <div className="login-wrapper">
            <h1>Login</h1>
            <p>Username</p>
            <input type="text" placeholder="Joe" onChange={updateUsername}></input>
            <p>Password</p>
            <input type="password" placeholder="hunter2" onChange={updatePassword}></input>
            <button className="login-button" onClick={
                () => {
                    userLogin(username, password)
                    navigate("/profile");
                }
                }>Log In</button>
        </div>
    )

}