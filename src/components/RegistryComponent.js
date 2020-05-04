import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Registry(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/registry">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Registry</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Registry</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col">
                    <h1>Coming Soon!! Please check back later. Thanks! </h1>

                        <h2>

                    </h2>
                </div>
               
            </div>
        </div>
    );
}

export default Registry;