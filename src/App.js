import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                </div>    
                <div className="container">
                <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                <div>
                    <Directory />
                </div>
                </Navbar>
            </div>
        );
    }
}

export default App;