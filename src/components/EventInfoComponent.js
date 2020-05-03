import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';




    function RenderCampsite({campsite}) {
        if (campsite) {
            return (
            <div className="col col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
        }
        return <div />;
    }
    function EventInfo(props){
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                    </div>
                </div>
            );
        }
        return <div />;
    }
    
export default EventInfo;