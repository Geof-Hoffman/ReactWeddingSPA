import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({event}) {
    return (
        <Card>
            <Link to={`/directory/${event.id}`}>
                <CardImg width="100%" src={event.image} alt={event.name} />
                <CardImgOverlay>
                <CardTitle style={{ align:'center',  padding: 0, margin: 0, fontWeight:'bold', backgroundColor: 'rgba(255,255,255,0.5)'}}>{event.date} </CardTitle>
                    <CardTitle style={{ fontWeight:'bold', backgroundColor: 'rgba(255,255,255,0.5)'}}>{event.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.events.map(event => {
        return (
            <div key={event.id} className="col-md-5 m-1">
                 <RenderDirectoryItem event={event} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Events</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Events</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );}

export default Directory;
   
 

