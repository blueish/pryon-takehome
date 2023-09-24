import { useContext } from "react";
import { useOutlet, Link, useNavigate } from "react-router-dom";
import {AuthContext} from "../contexts/auth";
import "./top-menu.css";
export function TopMenu() {
    const outlet = useOutlet();
    const navigate = useNavigate();
    const {user, userLogout} = useContext(AuthContext)

    let availableLinks: Array<JSX.Element> = [];
    if (user?.name) {
        availableLinks = [
            <Link to="/profile">Profile</Link>,
            <Link to="/iss" >ISS Location</Link>,
            <Link to="/astronauts" >Astronauts</Link>,
            <a onClick={() => {
                userLogout();
                navigate("/login")
            }}>Logout</a>
        ];
    } else {
        availableLinks = [
            <Link to="/login">Login</Link>,
        ]
    }


    return (
        <div>
            <header>
                <nav className="top-bar">
                    {availableLinks.map((ele) =>
                        <div className="bar-link">
                            {ele}
                        </div>
                    )
                    }
                </nav>
            </header>
            {outlet}
        </div>
    )
}