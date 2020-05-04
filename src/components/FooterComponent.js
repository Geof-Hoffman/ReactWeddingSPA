import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">

                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                            <ul className='list-unstyled'>
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/directory'>Events</Link></li>
                                <li><Link to='/aboutus'>Registry    
                                <li><Link to='/accomadations'>Accomadations</Link></li>                                                                                                                                                                                   </Link></li>
                                <li><Link to='/contactus'>Contact</Link></li>
                            </ul>
                    </div>

                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/jessandgeoffsweddingpics/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/geof.hoffman/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook"  href="https://www.facebook.com/jessica.maykrantz/"><i className="fa fa-facebook" containerStyle="color:#bd1717;"/></a>{' '}
                      
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:7037258936"><i className="fa fa-phone" /> 1-703-725-8936</a><br />
                        <a role="button" className="btn btn-link" href="mailto:jessandGeoff2017@gmail.com"><i className="fa fa-envelope-o" /> jessandGeoff2017@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;