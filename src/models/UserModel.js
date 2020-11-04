/* Backend server URL */
const URL = "https://foodbook-backend.herokuapp.com/user";

class UserModel {
    // show
    static show = () => {
        return fetch(URL, {
            method: "GET",
            headers: {authorization: `Bearer ${localStorage.uid}`},
        }).then((response) => response.json());
    };
    

    // update
    static update = (userData) => {
        return fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json());
    };


    // delete
    static delete = () => {
        return fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            }
        })
        .then(response => response.json());
    };
};

export default UserModel;