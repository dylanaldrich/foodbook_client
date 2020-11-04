/* imports */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Home from '../pages/Home';
import About from '../pages/About';
import RecipeDetail from '../pages/RecipeDetail';
import Profile from '../pages/Profile';
import FoodbookDetail from '../pages/FoodbookDetail';
import { loggedInState } from '../recoil/selectors';


/* Routes */
const Routes = (props) => {
    const loggedIn = useRecoilValue(loggedInState);
    
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/recipe/:id' component={RecipeDetail} />
            {/* Auth Required Routes */}
            {loggedIn && (
                <Switch>
                    <Route path='/profile/:id' component={Profile} />
                    <Route path='/foodbook/:id' component={FoodbookDetail} />
                </Switch>
            )}
            {/* <Route path='*' component={NotFound} /> */}
        </Switch>
    )
};

export default Routes;