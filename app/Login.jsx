'use client'
import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";

export default function Login() {
    const [username, setUsername] = useState('');

    const dispatch = useDispatch();

    const onClickLogin = () => {
        dispatch(logIn(username));
    }
    const onClickLogout = () => {
        dispatch(logOut());
    }
    const onClickToggle = () => {}

    return (
        <div>
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={onClickLogin}>Login</button>
            <br />
            <button onClick={onClickLogout}>Logout</button>
            <br />
            <button>Toggle Moderator Status</button>
        </div>
    );
}