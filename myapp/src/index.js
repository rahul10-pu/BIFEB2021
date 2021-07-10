import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo"
import ShowDate from './jsx_with_js/ShowDate'
import Contact1 from "./Contactcard/Contact"
import Color from "./setstate/ChangeColor"
import Form from './setstate/Form';
import Count from "./hooks/Count"
import C1 from "./context/C1"
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import App from "./routes/App"
import Contact from "./routes/Contact"
import About from "./routes/About"
import NotFound from './routes/NotFound';
import Mounting from './lifecycle/Mounting';
import Updating from './lifecycle/Updating';
const routing=(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Link</Link>
                </li>
                <li>
                    <Link to="/about">About Link</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route component={NotFound}/>
            </Switch>
           
        </div>
    </Router>
)
ReactDOM.render(<Updating color="White"/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

