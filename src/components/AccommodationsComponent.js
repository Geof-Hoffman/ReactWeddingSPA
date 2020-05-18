import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Accommodations(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/accomadations">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Accommodations</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Accommodations</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col">
                    <h1>Hello family and friends!</h1>

                        <h2>For your convenience, we've set-up room blocks at discounted rates at the following hotels:<br />
                        1. Residence Inn Chantilly/Dulles South<br />
                        14440 Chantilly Crossing Lane, Chantilly, VA 20151<br />
                        703.263.7900<br />
                        $79/night - <a href='https://www.marriott.com/events/start.mi?id=1586280055781&key=GRP' target="_blank" rel='noreferrer noopener'>RESERVE HERE</a> (click this link to go to the reservation page!)<br />
                        <br /><br />
                        2. Hampton Inn Washington-Dulles South<br />
                        4050 Westfax Drive, Chantilly, VA 20151<br />
                        703.818.8200<br />
                        $99/night - <a href='http://hamptoninn.hilton.com/en/hp/groups/personalized/W/WASCNHX-MHW-20201016/index.jhtml' target="_blank" rel='noreferrer noopener'>RESERVE HERE</a> (click this link to go to the reservation page!)<br /><br />

                        The room blocks are available at the above rates from Friday, October 16, 2020 - Monday, October 19, 2020. Please call to reserve or use the links provided. If you call, please say you are with the "Maykrantz-Hoffman Wedding." If you have any difficulty making your reservations please let us know!

                    </h2>
                </div>
               
            </div>
        </div>
    );
}

export default Accommodations;