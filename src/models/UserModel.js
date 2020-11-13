/* Backend server URL */
const URL = "https://foodbook-backend.herokuapp.com/user";
const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";

class UserModel {
    // show
    static show = () => {
        return fetch(corsProxyUrl + URL, {
            method: "GET",
            headers: {authorization: `Bearer ${localStorage.uid}`},
        }).then((response) => response.json());
    };
    

    // update
    static update = (userData) => {
        return fetch(corsProxyUrl + URL, {
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
        return fetch(corsProxyUrl + URL, {
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