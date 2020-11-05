/* imports */
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import ModalContainer from '../components/Modal/ModalContainer';
import FoodbookModel from '../models/FoodbookModel';
import RecipeModel from '../models/RecipeModel';

import '../App.css';


/* Foodbook Detail Page Component */
const FoodbookDetail = (props) => {
    const [recipeFilter, setRecipeFilter] = useState("");
    const [foodbook, setFoodbook] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');

    // watches for change of url to rerender a new foodbook
    useEffect(function(){
            if(props.match.params.id) {
                const foodbookId = props.match.params.id;
                findFoodbook(foodbookId);
            }
        },
        [props.match.params.id]
    );

    // // watches for change in foodbook
    // useEffect(function() {
    //     if(foodbook) {
    //         findFoodbook(foodbook._id);
    //     }
    // }, [foodbook]);

    // watches for change in recipe filter to invoke recipe filter method
    useEffect(async () => {
        await setRecipes(foodbook.recipes);
        if(recipeFilter !== "") return handleRecipeFilter();
    }, [recipeFilter]);

    // fetches foodbook and sets state
    function findFoodbook (foodbookId) {
        FoodbookModel.show(foodbookId)
        .then(async (response) => {
            const foundFoodbook = response.foodbook;
            await setFoodbook(foundFoodbook);
            const foundRecipes = response.foodbook.recipes;
            await setRecipes(foundRecipes);
        })
        .catch((error) => {
            setError(error.message);
        });
    };

    // removes a recipe from current category
    function handleRecipeRemove(recipeId) {
        RecipeModel.remove(recipeId, foodbook._id)
            .then(async (response) => {
                await setRecipes(response.revisedFoodbook.recipes);
            })
            .catch((error) => setError(error.message));
    };

    // filters recipes by type
    async function handleRecipeFilter() {
        const filteredRecipes = recipes.filter(recipe => recipe.recipe_type === recipeFilter);
        await setRecipes(filteredRecipes);
    }

    // displays a prompt if no recipes exist
    function displayPrompt () {
        if(recipes.length === 0) return <p className="list-group-item text-muted bg-dark">Nothing to see here! Search for some recipes and add them in!</p>;
    };


    return (
        <>
        {foodbook.recipes && recipes ? 
            <>
                {/* Banner */}
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="container text-white rounded bg-dark d-flex align-items-center top-banner">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 text-left">{foodbook.name}</h1>
                    </div>
                    <div className="ml-auto">
                        <ModalContainer triggerText={"Edit foodbook"} foodbookId={foodbook._id} />
                    </div>
                </div>
                
                {/* Foodbook details */}
                <div className="page-header container ">
                    <div className="mx-0 row pt-3 align-items-start">
                        {/* Recipe Type Filter */}
                        <div className="col-md-auto mx-auto">
                            <h4 className="pt-2">Recipe Types</h4>
                            <div class="list-group mx-0">
                                <button type="button" className="list-group-item list-group-item-action" onClick={() => {
                                    setRecipeFilter("");
                                    setRecipes(foodbook.recipes);
                                    }}>All
                                </button>
                                <button type="button" className="list-group-item list-group-item-action" onClick={() => {
                                    setRecipes(foodbook.recipes);
                                    setRecipeFilter("appetizer");
                                    }}>Appetizers
                                </button>
                                <button type="button" className="list-group-item list-group-item-action" onClick={() => {
                                    setRecipes(foodbook.recipes);
                                    setRecipeFilter("entree");
                                    }}>Entrées
                                </button>
                                <button type="button" className="list-group-item list-group-item-action" onClick={() => {
                                    setRecipes(foodbook.recipes);
                                    setRecipeFilter("side");
                                    }}>Side
                                </button>
                                <button type="button" className="list-group-item list-group-item-action" onClick={() => {
                                    setRecipes(foodbook.recipes);
                                    setRecipeFilter("salad");
                                    }}>Salads
                                </button>
                                <button type="button" className="list-group-item list-group-item-action" onClick={() => {
                                    setRecipes(foodbook.recipes);
                                    setRecipeFilter("dessert");
                                    }}>Desserts
                                </button>
                                <button type="button" className="list-group-item list-group-item-action" onClick={() => {
                                    setRecipes(foodbook.recipes);
                                    setRecipeFilter("drink");
                                    }}>Drinks
                                </button>
                            </div>
                        </div>

                        {/* Recipes List */}
                        <div className="col">
                            <h2 className="text-left pt-2 font-weight-bold">Recipes</h2>
                            <hr />
                            <ul className="list-group list-group-flush">
                                {recipes ? recipes.map((recipe) => 
                                    <li className="list-group-item d-flex" key={recipe._id}>
                                        <Link to={`/recipe/${recipe.edamam_id}`}>
                                            {recipe.name ? recipe.name : "Mysterious Nameless Recipe"}
                                        </Link>
                                        <p className="ml-3 mr-auto text-muted font-italic">{recipe.recipe_type}</p>
                                        {/* Remove button */}
                                        <div 
                                            className="remove-recipe-btn" 
                                            onClick={() => handleRecipeRemove(recipe._id)} 
                                            title="Remove this recipe">
                                                <i className="fas fa-times-circle"></i>
                                        </div>
                                    </li>
                                    )
                                : null}
                                {recipes.length === 0 ? displayPrompt() : null}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
            : <p>Loading...</p> }
        </>
    );
};

export default FoodbookDetail;