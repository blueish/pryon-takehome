import  { useContext} from "react"
import { AuthContext} from '../contexts/auth';

import "./profile.css";

export default function Profile() {
    const { user } = useContext(AuthContext);

    return (
        <h1 className="profile-welcome">
            Hi {user.name}, welcome to the site!
        </h1>
    )
}