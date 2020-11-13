/* Backend server URL */
const URL = "https://foodbook-backend.herokuapp.com/auth";
const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";

class AuthModel {
    // register
    static register = (userData) => {
        return fetch(corsProxyUrl + `${URL}/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((response) => response.json());
    };
    

    // login
    static login = (userData) => {
        return fetch(corsProxyUrl + `${URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((response) => response.json());
    };
};

export default AuthModel;