import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo"
import ShowDate from './jsx_with_js/ShowDate'
import Contact from "./Contactcard/Contact"
import Color from "./setstate/ChangeColor"
import Form from './setstate/Form';
import Count from "./hooks/Count"
import C1 from "./context/C1"
ReactDOM.render(<C1 />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

