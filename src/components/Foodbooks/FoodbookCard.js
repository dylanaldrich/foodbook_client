/* imports */
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import RecipeModel from '../../models/RecipeModel';


/* Foodbook Card Component */
const FoodbookCard = ({foodbook, findProfile, profileId}) => {
    const [,setState] = useState();
    
    useEffect(() => {
        setState({});
    }, [foodbook]);
    
    function handleRecipeRemove(recipeId) {
        RecipeModel.remove(recipeId, foodbook._id)
            .catch((error) => console.log("Recipe remove error: ", error));
    }; 
    
    return(
        <>
            <div className="card mb-3 shadow foodbook-card" style={{width: "18rem"}}>
                <div className="card-body">
                    <Link to={`/foodbook/${foodbook._id}`}>
                        <h5 className="card-title">{foodbook.name}</h5>
                    </Link>
                    <ul className="list-group list-group-flush">
                        {foodbook.recipes.length ? foodbook.recipes.map((recipe) => 
                            <li className="list-group-item d-flex align-items-center px-1 text-center" key={recipe._id}>
                                <Link className="mr-auto" to={`/recipe/${recipe.edamam_id}`}>
                                    {recipe.name ? recipe.name : "Mysterious Nameless Recipe"}
                                </Link>
                                <div 
                                    onClick={() => {
                                    handleRecipeRemove(recipe._id);
                                    findProfile(profileId);
                                    }} 
                                    className="remove-recipe-btn ml-2"
                                    title="Remove this recipe">
                                        <i className="fas fa-times-circle"></i>
                                </div>
                            </li>
                            ) 
                        : <li className="list-group-item text-muted px-1">This foodbook is looking a little empty. Search for some recipes and add them in!</li> }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FoodbookCard;