import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, CardImgOverlay} from 'reactstrap';
import { Link } from 'react-router-dom';





    function RenderEvents({event}) {
        if (event) {
            return (
            <div className="col col-md-5 m-1">
                <Card>
                    <CardImg top src={event.image} alt={event.name} />
                    <CardBody>
                        <CardImgOverlay>
                        
                            <CardTitle style={{ fontWeight: 'bold', backgroundColor: 'rgba(255,255,255,0.5)' }}> {event.name}</CardTitle>
                        </CardImgOverlay>
                        <CardText>{event.description}</CardText>
                       
                    </CardBody>
                </Card>
            </div>
            );
        }
        return <div />;
    }
    function EventInfo(props){
        if (props.event) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Events</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.event.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.event.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderEvents event={props.event} />
                    </div>
                </div>
            );
        }
        return <div />;
    }
    
export default EventInfo;