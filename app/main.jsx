import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import Home from './home/Home';

ReactDOM.render((
        <BrowserRouter>
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    ),document.getElementById('app')
);
