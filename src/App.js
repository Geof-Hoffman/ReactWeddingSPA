import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { CAMPSITES } from './shared/campsites';




class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            campsites: CAMPSITES
        }

    }
        render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Forever: Jess&Geoff- Comming soon! Check back May 4th! </NavbarBrand>
                        <NavbarBrand href="/">The wedding will held at Briar Patch B&B, in Middleburg, VA on October 18, 2020  </NavbarBrand>
                    </div>
                            
                   
                </Navbar>
                <Directory campsites={this.state.campsites} />
            </div>
        );
    }
}

export default App;