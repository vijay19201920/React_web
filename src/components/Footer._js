import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">

                <div className="container">

                    <div className="row section">

                        <div className="footer-widget col-lg-3 col-md-6 col-xs-12 wow fadeIn">
                            <h3 className="small-title">
                                About Us
           </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis veritatis eius porro modi hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           </p>
                            <div className="social-footer">
                                <a href="#"><i className="fa fa-facebook icon-round"></i></a>
                                <a href="#"><i className="fa fa-twitter icon-round"></i></a>
                                <a href="#"><i className="fa fa-linkedin icon-round"></i></a>
                                <a href="#"><i className="fa fa-google-plus icon-round"></i></a>
                            </div>
                        </div>

                        <div className="footer-widget col-lg-3 col-md-6 col-xs-12 wow fadeIn" data-wow-delay=".2s">
                            <h3 className="small-title">
                                Links
           </h3>
                            <ul className="menu">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-widget col-lg-3 col-md-6 col-xs-12 wow fadeIn" data-wow-delay=".5s">
                            <h3 className="small-title">
                                GALLERY
           </h3>
                            <div className="plain-flicker-gallery">
                                <a href="#"><img src="%PUBLIC_URL%/img/flicker/img1.jpg" alt="" /></a>
                                <a href="#"><img src="%PUBLIC_URL%/img/flicker/img2.jpg" alt="" /></a>
                                <a href="#"><img src="%PUBLIC_URL%/img/flicker/img3.jpg" alt="" /></a>
                                <a href="#"><img src="%PUBLIC_URL%/img/flicker/img4.jpg" alt="" /></a>
                                <a href="#"><img src="%PUBLIC_URL%/img/flicker/img5.jpg" alt="" /></a>
                                <a href="#"><img src="%PUBLIC_URL%/img/flicker/img6.jpg" alt="" /></a>
                            </div>
                        </div>

                        <div className="footer-widget col-lg-3 col-md-6 col-xs-12 wow fadeIn" data-wow-delay=".8s">
                            <h3 className="small-title">
                                SUBSCRIBE US
           </h3>
                            <div className="contact-us">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter your email" />
                                    </div>
                                    <button type="submit" className="btn btn-common">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </footer>


        );

    }

}

export default Footer;