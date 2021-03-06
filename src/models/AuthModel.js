/* Backend server URL */
const URL = "https://foodbook-backend.herokuapp.com/auth";

class AuthModel {
    // register
    static register = (userData) => {
        return fetch(`${URL}/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((response) => response.json());
    };
    

    // login
    static login = (userData) => {
        return fetch(`${URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((response) => response.json());
    };
};

export default AuthModel;