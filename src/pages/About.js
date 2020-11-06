/* imports */
import React from 'react';

import '../App.css';

/* About Page Component */
const About = (props) => {
    return (
        <div className="container">
            <div className="container d-flex text-white rounded bg-dark top-banner justify-content-between align-items-end">
                <img className="card-img-left flex-auto d-none d-md-block" src="https://i.ibb.co/hyB10fY/foodbook-logo.png" alt="foodbook logo" />
                <div className="col px-0 d-flex">
                    <h1 className="display-2 ml-2 col-10 text-left">About</h1>
                </div>
            </div>
            <div className="row container mx-auto mt-4 d-flex align-content-around">
                <div className=' p-3 w-50 mx-3 lead bg-secondary text-white rounded col'>
                    <p>
                        <span className="font-weight-bold text-info display-4" id="foodbook-tag">foodbook</span> is made for all the foodies and chefs out there who like to find and try out new recipes. Having a ton of recipes bookmarked and saved all over the place makes it hard to remember where to find the right one, for the right occasion. That's where foodbook comes in.
                    </p>  
                    <p>
                        Here, you can create your own custom foodbooks and add in as many recipes as you like. Organize your recipes by type, so they're even easier to find when you're ready to get cooking. Our database features millions of recipes from sources all over the internet, so dig in, and enjoy!
                    </p>
                </div>
                <div className='p-3 w-50 mx-3 lead bg-secondary d-flex align-items-center justify-content-center text-white rounded col'>
                    <div className="align-self-center">
                        <img src="https://i.ibb.co/7YPhThm/CV-photo.png" alt="dylan aldrich creator photo" className="rounded-circle" />
                        <h2 className="font-weight-bold text-info display-4">Creator</h2>
                        <h3>Dylan Aldrich</h3>
                        <small>– Los Angeles, CA –</small>
                        <p className="d-flex justify-content-center my-2">
                            <a className="nav-item mx-2 socials" href="https://www.linkedin.com/in/dylanaldrich/" target="_blank">LinkedIn</a> | <a className="nav-item mx-2 socials" href="https://github.com/dylanaldrich" target="_blank">Github</a>
                        </p>
                        <small className="align-items-center" id="email-address">
                            <i class="far fa-envelope"></i> <a href="mailto:aldrich.dylan@gmail.com" className="socials">aldrich.dylan@gmail.com</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;