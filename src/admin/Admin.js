import React from 'react';
import Resumen from './views/resumen/Resumen'

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

const Admin = ({id}) => {
    return ( 
        <Resumen 
            id={id}
        />
     );
}
 
export default Admin;