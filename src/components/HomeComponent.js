import React from 'react';
import { Card, CardImg } from 'reactstrap';
// import CarouselComponent from './CarouselComponent';


function Home(props) {
    return (
        <div className="container">
            <div className="row">
              <div className="col-md m-1">
                <Card>
                   <CardImg top width="100%" src="/assets/images/engagement.png" alt="Card image cap" />
                </Card>
             </div>

            </div>
        </div>
    );
}

export default Home;   