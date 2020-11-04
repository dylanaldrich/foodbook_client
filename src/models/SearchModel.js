/* Backend server URL */
const URL = "http://localhost:3001/search";

class SearchModel {
    // search all
    static searchRecipes = (query) => {
        return fetch(`${URL}/${query}`).then(response => response.json());
    };


    // find one recipe
    static searchOneRecipe = (edamam_id) => {
        return fetch(`${URL}/${edamam_id}`).then(response => response.json());
    };
};

export default SearchModel;