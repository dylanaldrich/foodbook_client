/* imports */
import React, {useState, useEffect} from 'react';
import FoodbookModel from '../../../models/FoodbookModel';

/* Add Foodbook Form Component */
export const AddFoodbookForm = ({closeModal, findProfile, profileId}) => {
    const [name, setName] = useState("");
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        FoodbookModel.create({name}).then((response) => {
            if(response.status === 201) {
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
                <button className="form-control btn btn-primary" type="submit">
                    Create foodbook
                </button>
            </div>
        </form>
    );
};

export default AddFoodbookForm;