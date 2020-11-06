/* imports */
import React, {useState, useEffect} from 'react';
import { useRecoilState } from "recoil";

import RecipeModel from '../../../models/RecipeModel';
import UserModel from '../../../models/UserModel';
import { userState } from "../../../recoil/atoms";


/* Add Recipe Form Component */
export const AddRecipeForm = ({closeModal, recipeName, edamam_id, determineIfSaved}) => {    
    const [recipe_type, setRecipeType] = useState("entree");
    const [allFoodbooks, setAllFoodbooks] = useState([]);
    const [user, setUser] = useRecoilState(userState);
    const [selectedFoodbooks, setSelectedFoodbooks] = useState([]);
    const [error, setError] = useState('');

    useEffect(function () {
        if(localStorage.getItem('uid')) {
            UserModel.show().then((response) => {
                setUser(response.data);
                setAllFoodbooks(response.foodbooks);
            });
        }
    }, []);


    function handleSubmit(event) {
        event.preventDefault();
        RecipeModel.create({recipe_type, foodbooksIds: selectedFoodbooks, name: recipeName, edamam_id}).then((response) => {
        if(response.status === 201) {
            determineIfSaved();
            closeModal();
        } else {
            setError(response.message);
        }
        });
    };

    function handleChange(e) {
        if(selectedFoodbooks.includes(e.target.value)) {
            setSelectedFoodbooks(selectedFoodbooks.filter(foodbook => {
                return foodbook !== e.target.value;
            }))
        } else {
            setSelectedFoodbooks([...selectedFoodbooks, e.target.value]);
        }
    };

    const generateCheckbox = allFoodbooks ? allFoodbooks.map((foodbook) => {
        return <li className="mx-auto">
        <label htmlFor="name">{foodbook.name}</label> 
        <input type="checkbox" onChange={handleChange}  className="ml-2" name={`foodbook_${foodbook._id}`} value={foodbook._id} key={foodbook._id} />
        </li>;
    }) : null;

    return (
        <>
            {user ?
                <form onSubmit={handleSubmit}>
                    {error && <p style={{ color: "red" }}>{error}</p>} 
                    <div className="form-group text-center">
                    <label htmlFor="recipe_type">Recipe type</label>
                            <select className="ml-2" name="recipe_type" onChange={(e) => setRecipeType(e.target.value)}>
                                <option value="" className="text-italic text-muted">Select...</option>
                                <option value="entree">Entrée</option>
                                <option value="appetizer">Appetizer/Snack</option>
                                <option value="side">Side Dish</option>
                                <option value="salad">Salad</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">Drink</option>
                            </select>
                    </div>

                    {/* foodbook checkboxes */}
                    <div className="form-group text-center">
                        <h5>Foodbooks:</h5> 
                        <ul className="d-flex flex-wrap list-unstyled">
                            { generateCheckbox}
                        </ul>
                    </div>

                    {/* submit button */}
                    <div className="form-group">
                        <button className="form-control btn btn-primary" type="submit">
                            Save Recipe
                        </button>
                    </div>
                </form> 
            :
                <p>Please log in or sign up to save recipes.</p>
            }
        </>
    );
};

export default AddRecipeForm;