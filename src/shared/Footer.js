import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="text-center py-3">
                <Link to="/">Go Back</Link>
                <h3 className="my-1">Demo Links</h3>
                <Link to="/demos" className="my-1">Fake Data</Link> ,
                <Link to="/local-storage" className="my-1">Local Storage </Link> ,
                <Link to="/music" className="my-1">Music</Link> ,
                <Link to="/hello-world" className="my-1">Hello World</Link>
                <br></br>
                © 2018 Copyright: 
                <a href="https://github.com/vaishalilodhi/shopping-cart/">vaishalilodhi</a>
            </div>
        );
    }
}

export default Footer;
