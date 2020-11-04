/* imports */
import React, {useState, useEffect} from 'react';
import { useRecoilState } from "recoil";

import UserModel from '../../../models/UserModel';
import { userState } from "../../../recoil/atoms";


/* Edit User Form Component */
export const EditUserForm = ({closeModal, profileId, findProfile}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useRecoilState(userState);
    const [error, setError] = useState('');

    useEffect(function () {
        if(localStorage.getItem('uid')) {
            UserModel.show().then((response) => {
                setUser(response.data);
                setUsername(response.data.username);
                setEmail(response.data.email);
            });
        }
    }, []);
    
    function handleSubmit(event) {
        event.preventDefault();
        UserModel.update({username, email}).then((response) => {
        if(response.status === 200) {
            findProfile(profileId);
            closeModal();
        } else {
            setError(response.message);
        }
        });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>} 
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                className="form-control" 
                id="username"
                name='username' 
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                />
            </div>
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
                <button className="form-control btn btn-primary" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default EditUserForm;