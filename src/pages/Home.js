/* imports */
import React from 'react';

import '../App.css';


/* Home Page Component */
const Home = (props) => {
    return (
        <>
            {/* Banner */}
            <div className='jumbotron jumbotron-fluid'>
                <div className='container justify-content-start'>
                    <h1 className='display-4 text-left pt-2'>Welcome to foodbook!</h1>
                    <hr />
                    <h3 className='text-left pb-2'>We're so glad you're here! Ready to get cooking?</h3>
                </div>
            </div>

            {/* Instructions */}
            <div className='container justify-content-start'>
                <div class='row featurette align-items-center'>
                    <div class='col-md-3'>
                        <img class='bd-placeholder-img bd-placeholder-img-lg featurette-image border border-dark img-fluid mx-auto mt-4' width='250' src='https://i.ibb.co/WzLBZCp/foodbook-search.png' alt="Search image"></img>
                    </div>
                    <div class='col-md-8 text-left'>
                        <h2 class='featurette-heading'>Step 1: Search for a recipe that interests you.</h2>
                        <p class='lead'>Search by name, ingredient, diet, etc.</p>
                    </div>
                </div>
                <div class='row featurette align-items-center'>
                    <div class='col-md-3'>
                        <img class='bd-placeholder-img bd-placeholder-img-lg featurette-image border border-dark img-fluid mx-auto mt-4' width='250' src='https://i.ibb.co/TK0FF6y/foodbook-recipesave.png' alt="Recipe save image"></img>
                    </div>
                    <div class='col-md-8 text-left'>
                        <h2 class='featurette-heading'>Step 2: Do you want to save a recipe and try it out?</h2>
                        <p class='lead'>Sign up for an account, and then add it to one of your foodbooks!</p>
                    </div>
                </div>
                <div class='row featurette align-items-center'>
                    <div class='col-md-3'>
                        <img class='bd-placeholder-img bd-placeholder-img-lg featurette-image border border-dark img-fluid mx-auto mt-4' width='250' src='https://i.ibb.co/Jz7V8Sk/foodbook-create.png' alt="Foodbook create image"></img>
                    </div>
                    <div class='col-md-8 text-left'>
                        <h2 class='featurette-heading'>Step 3: Need to create a foodbook?</h2>
                        <p class='lead'>Your foodbooks are where you store recipes. You can create any kind of foodbook you like, such as: Mexican Food, Weeknight Meals, Vegetarian, Holiday Favorites, etc. To create one, just complete the short form on your profile page and you're ready to go!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;