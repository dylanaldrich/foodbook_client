/* Backend server URL */
const URL = "https://foodbook-backend.herokuapp.com/foodbooks";

class FoodbookModel {
    // show
    static show = (foodbookId) => {
        return fetch(`${URL}/${foodbookId}`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            },
        }).then(response => response.json());
    };


    // create
    static create = (foodbookData) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(foodbookData)
        })
        .then(response => response.json());
    };


    // update
    static update = (foodbookId, foodbookData) => {
        return fetch(`${URL}/${foodbookId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(foodbookData)
        })
        .then(response => response.json());
    };


    // delete
    static delete = (foodbookId) => {
        return fetch(`${URL}/${foodbookId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            }
        })
        .then(response => response.json());
    };
};

export default FoodbookModel;