/* imports */
import React, {useState, useEffect, useCallback} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import { useRecoilState } from "recoil";
import debounce from 'lodash.debounce';

import ModalContainer from '../Modal/ModalContainer';
import SearchModel from '../../models/SearchModel';
import ResultCard from '../Results/ResultCard';
import UserModel from '../../models/UserModel';
import { userState } from "../../recoil/atoms";

import './NavBar.css';


/* NavBar Component */
const NavBar = (props) => {
    const [active, setActive] = useState(false);
    const [results, setResults] = useState([]);
    const [query, setQuery]= useState("");
    const [user, setUser] = useRecoilState(userState);
    let history = useHistory();

    useEffect(function () {
        if(localStorage.getItem('uid')) {
            UserModel.show().then((response) => {
                setUser(response.data);
            });
        }
    }, []);
    
    useEffect(
        function () {
            if(!query) {
                setResults([]);
            } else {
                debouncedSearch(query);
            }
        },
        [query]
    );

    const debouncedSearch = useCallback(debounce(function fetchRecipes (query) {
        SearchModel.searchRecipes(query)
            .then((response) => {
                setResults(response.searchResults.hits);
            })
            .catch((error) => {
                return <p>Sorry, that search didn't work. Please try again.</p>;
            });
    }, 500),
    []);
        

    function logout () {
        setUser(null);
        localStorage.clear();
        history.push("/");
        history.go();
    };

    function getRecipeId (string) {
        return string.split("recipe_")[1];
    };

    return (
        <div className={`navbar ${active ? "navbar-active overflow-auto" : ""}`}>
            <nav class='navbar navbar-expand-md navbar-dark fixed-top bg-dark d-flex'>
            
            {/* Logo and brand */}
            <NavLink to='/'><img className="mr-1" src="https://i.ibb.co/YP9SC9N/foodbook-favicon.png" alt="foodbook-logo" height="55"/></NavLink>
                <NavLink className='navbar-brand navbar__titles' to='/'>foodbook</NavLink>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarCollapse'>
                    
                    {/* Search Bar */}
                    <form className='form-inline mt-2 mt-md-0 p2 justify-content-end'>
                        {active ? (
                            // Search close button
                            <div className="position-absolute mr-2">
                                <button onClick={(e) => {
                                    setActive(false);
                                    setQuery("");
                                    setResults([]);
                                }} className="btn btn-md btn-info justify-content-center rounded-circle" id="x-btn"><i class="fas fa-times"></i></button>
                            </div>
                        ) : null}
                        <input 
                            className='form-control mr-sm-2' 
                            type='text' 
                            placeholder='Search' 
                            aria-label='Search'
                            onFocus={(e) => setActive(true)}
                            onChange={(e) => setQuery(e.target.value)}
                            onBlur={(e) => e.target.value=''}
                        />
                    </form>

                    {/* Links to other pages */}
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                        <NavLink className='nav-link' to='/about'>About</NavLink>
                        </li>

                        {/* Determine which links to show if logged in/out */}
                        {user === null ? (
                            <>
                                <li className='nav-item'>
                                    <ModalContainer triggerText={"Log In"} />
                                </li>
                                <li className='nav-item'>
                                    <ModalContainer triggerText={"Sign Up"} />
                                </li>
                            </>
                        ) : ( 
                            <>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' id="profile-link" to={`/profile/${user._id}`}>My Profile</NavLink>
                                </li>
                                <li className='nav-item nav-link' id="logout-link" onClick={logout}>
                                    Log Out
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>

            {/* Search Results */}
            <div className="d-flex container flex-wrap justify-content-around align-items-start overflow-auto" id="search-results">
                {results ? results.map((result) => <ResultCard 
                    setActive={setActive} 
                    setResults={setResults} 
                    title={result.recipe.label} 
                    source={result.recipe.source} 
                    imageUrl={result.recipe.image} 
                    key={getRecipeId(result.recipe.uri)} 
                    edamam_id={getRecipeId(result.recipe.uri)}
                    setQuery={setQuery}
                />) : null}
            </div>
        </div>
    );
};

export default NavBar;