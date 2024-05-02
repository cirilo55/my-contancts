import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Home from './Pages/Home';
import NewContact from './Pages/NewContact';
import EditContact from './Pages/EditContact';
import NotFound from './Pages/NotFound';

export default function Routes()
{
    const location = useLocation();
    const transitions = useTransition(location, {
        from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute', width: '500px'},
        enter: { opacity: 1 , transform: 'translateY(0)', position: 'absolute', width: '500px'},
        leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute', width: '500px' }
    });

    return transitions((props, item) => (
        <animated.div style={props}>
            <Switch location={item}>
                <Route exact path="/" component={Home} />
                <Route path="/new" component={NewContact} />
                <Route path="/edit/:id" component={EditContact} />

                <Route component={NotFound} />
            </Switch>
        </animated.div>
    ));

}