/* imports */
import React from 'react';

import FoodbookCard from './FoodbookCard';


/* Foodbooks Container Component */
const FoodbooksContainer = ({foodbooks, findProfile, profileId}) => {
    function generateFoodbookCards(foodbooks) {
        return foodbooks.map((foodbook) => {
            return <FoodbookCard 
                        key={foodbook._id} 
                        foodbook={foodbook} 
                        findProfile={findProfile}
                        profileId={profileId}
                    />
        });
    };

    return (
        <div className="d-flex flex-wrap justify-content-around overflow-auto">
            {generateFoodbookCards(foodbooks)}
        </div>
    );
};

export default FoodbooksContainer;