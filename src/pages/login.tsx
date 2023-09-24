import {ChangeEvent, useState, useContext} from "react"
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext} from '../contexts/auth';

export default function Login() {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [incorrectAttempts, setIncorrectAttempts] = useState(0);

    const updateUsername = (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
    const updatePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    const attemptLogin = (e: any) => {
        e.preventDefault()
        const success = userLogin(username, password)
        if (success) {
            navigate("/profile");
        } else {
            setUsername("")
            setPassword("")
            setIncorrectAttempts(incorrectAttempts + 1)
        }
    }

    return (
        <div className="login-wrapper">
            <h1>Login</h1>
            <form className="form-wrapper">
                <p>Username</p>
                <input type="text" placeholder="Joe" onChange={updateUsername} value={username}></input>
                <p>Password</p>
                <input type="password" placeholder="hunter2" onChange={updatePassword} value={password}></input>
                <input type="submit" className="login-button" onClick={attemptLogin} value="Log In" onSubmit={attemptLogin}></input>
            </form>
            {incorrectAttempts > 0 && <p>Incorrect username or password</p>}
        </div>
    )

}