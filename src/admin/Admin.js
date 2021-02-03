import React from 'react';
import Resumen from './views/resumen/Resumen'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

const Admin = ({id}) => {
    return ( 
        <Router>
            <Switch>
                <Route path="/">
                    <Redirect to="/admin/Dashboard"/>
                </Route>
                
                <Route path="/admin/Dashboard">
                    <Resumen 
                        id={id}
                    />
                </Route>

            </Switch>
        </Router>
     );
}
 
export default Admin;