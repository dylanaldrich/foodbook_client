/* Backend server URL */
const URL = "https://foodbook-backend.herokuapp.com/recipe";
const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";

class RecipeModel {
    // show
    static show = (recipeId) => {
        return fetch(corsProxyUrl + `${URL}/${recipeId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            },
        }).then(response => response.json());
    };


    // create
    static create = (recipeData) => {
        return fetch(corsProxyUrl + URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(recipeData)
        })
        .then(response => response.json());
    };


    // update
    static update = (recipeId, recipeData) => {
        return fetch(corsProxyUrl + `${URL}/${recipeId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(recipeData)
        })
        .then(response => response.json());
    };


    // delete
    static delete = (recipeId) => {
        return fetch(corsProxyUrl + `${URL}/${recipeId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            }
        })
        .then(response => response.json());
    };
    

    // remove (from one foodbook)
    static remove = (recipeId, foodbookId) => {
        return fetch(corsProxyUrl + `${URL}/${recipeId}/${foodbookId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            }
        })
        .then(response => response.json());
    };
};

export default RecipeModel;