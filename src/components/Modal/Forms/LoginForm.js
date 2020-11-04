/* imports */
import React, {useState} from 'react';
import { useSetRecoilState } from "recoil";
import {useHistory} from 'react-router-dom';

import AuthModel from '../../../models/AuthModel';
import UserModel from '../../../models/UserModel';
import { userState } from "../../../recoil/atoms";


/* Login Form Component */
export const LoginForm = ({closeModal}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const setUser = useSetRecoilState(userState);
    let history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();

        AuthModel.login({email, password}).then((response) => {
        if(response.status === 200) {
            localStorage.setItem('uid', response.signedJwt);
            UserModel.show().then((response) => {
                setUser(response.data);
                history.push(`/profile/${response.data._id}`);
            });
            closeModal();
        } else {
            setError(response.message);
            console.log(response.error);
        }
        });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>} 
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name='email'
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                className="form-control"
                id="password"
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit">
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;