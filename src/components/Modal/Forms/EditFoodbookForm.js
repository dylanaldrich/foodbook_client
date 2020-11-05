/* imports */
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useRecoilState } from "recoil";

import FoodbookModel from '../../../models/FoodbookModel';
import UserModel from '../../../models/UserModel';
import { userState } from "../../../recoil/atoms";


/* Edit Foodbook Form Component */
export const EditFoodbookForm = ({foodbookId, closeModal, findFoodbook}) => {
    const [name, setName] = useState("");
    const [foodbook, setFoodbook] = useState({});
    const [error, setError] = useState('');
    const [user, setUser] = useRecoilState(userState);
    let history = useHistory();

    useEffect(() => {
        fetchFoodbook(foodbookId);
    }, []);

    useEffect(function () {
        if(localStorage.getItem('uid')) {
            UserModel.show().then((response) => {
                setUser(response.data);
            });
        }
    }, []);
    
    function fetchFoodbook(foodbookId) {
        FoodbookModel.show(foodbookId)
            .then((response) => {
                setFoodbook(response.foodbook);
                setName(response.foodbook.name);
            })
            .catch((error) => console.log("Recipe remove error: ", error));
    };
    
    function handleSubmit(event) {
        event.preventDefault();
        foodbook.name = name;
        FoodbookModel.update(foodbookId, foodbook).then((response) => {
            if(response.status === 200) {
                findFoodbook(foodbookId);
                closeModal();
            } else {
                setError(response.message);
            }
        });
    };

    function deleteFoodbook() {
        FoodbookModel.delete(foodbookId)
        .then(response => {
            closeModal();
            history.push(`/profile/${user._id}`);
        });
    };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: "red" }}>{error}</p>} 
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
            <div className="form-group">
                <button className="form-control btn btn-danger" onClick={deleteFoodbook}>Delete Foodbook</button>
            </div>
        </>
    );
};

export default EditFoodbookForm;