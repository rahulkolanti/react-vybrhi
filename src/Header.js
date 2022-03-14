import React from 'react'; 
import Home from '../components/Home';
import About from '../components/About';
import ContactUs from '../components/Contact';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (<Router>
                    <React.Fragment>
                        <Link to="/home">Home</Link> |
                        <Link to="/about"> About Us </Link> |
                        <Link to="/contact"> Contact Us </Link>
                        <Route exact path = "/" component = {Home} />
                        <Route path = "/home" component = {Home} />
                        <Route path = "/about" component = {About} />
                        <Route path = "/contact" component = {ContactUs} />
                    </React.Fragment>
                </Router>)
    }
}


import React from 'react'; 
class Home extends React.Component {
    render() {
        return <React.Fragment>
                    <h2> Inside home</h2>
                </React.Fragment>
    }
}
export default Home;

import React from 'react'; 
class About extends React.Component {
    render() {
        return <React.Fragment>
                    <h2>Inside AboutUs component...</h2>
                    <h3>Rendered as default child component</h3>
                </React.Fragment>
    }
}
export default About;

import React from 'react'; 
import ReactDOM from 'react-dom';
class ContactUs extends React.Component {
                       render() {
                                 return (
                                         <React.Fragment>
                                              <p>Inside ContactUs component...</p>
                                         </React.Fragment>
                                        )
                                }
}
export default ContactUs;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Header/>, document.getElementById('root'));
serviceWorker.unregister();


export default Header;