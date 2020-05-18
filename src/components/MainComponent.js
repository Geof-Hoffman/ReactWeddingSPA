import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import EventInfo from './EventInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { EVENTS } from '../shared/events';
import Contact from './ContactComponent';
import Accommodations from './AccommodationsComponent';
import Registry from './RegistryComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: EVENTS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home/>
          );
        }

        const EventWithId = ({match}) => {
            return (
                <EventInfo 
                    event={this.state.events.filter(event => event.id === +match.params.eventId)[0]}
                />
            );
        };    

        return (
            <div>
                <Header />
                <Switch> 
                    <Route path='/home' component={HomePage} />
                    <Route exact path= '/directory' render={() => <Directory events={this.state.events} />} />
                    <Route path='/directory/:eventId' component={EventWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/accommadations' component={Accommodations} />
                    <Route exact path='/registry' component={Registry} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;
