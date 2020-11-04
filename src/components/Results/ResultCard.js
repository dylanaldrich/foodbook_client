/* imports */
import React from 'react';
import {NavLink} from 'react-router-dom';

import './ResultCard.css';


/* Result Card Component */
const ResultCard = ({title, source, imageUrl, edamam_id, setActive, setResults}) => {
    return(
        <div className="col-3">
            <div className="card mb-4 box-shadow">
                <img src={imageUrl} alt={title} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text font-weight-bold bg-dark text-white rounded">{title}</p>
                    <hr/>
                    <p className="card-text">{source}</p>
                    <div className="btn-group" 
                    onClick={() => {
                        setActive(false);
                        setResults([]);
                    }}>
                        <NavLink to={`/recipe/${edamam_id}`} className="btn btn-info">View</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;