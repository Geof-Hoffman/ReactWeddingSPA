import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                      42276 Knotty Oak Terrace<br />
                        Brambleton, VA<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-703-725-8936 (Geoff)</a><br />
                    <a role="button" className="btn btn-link" href="mailto:jessandGeoff2017@gmail.com"><i className="fa fa-envelope-o"></i> jessandgeoff2017@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;