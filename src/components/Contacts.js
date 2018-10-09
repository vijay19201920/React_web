import React, { Component } from 'react';


class Contacts extends Component {
    render() {
        return (
            <section id="contact" className="contact-form section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-xs-12">
                            <h3 className="title-head text-left">Get in touch</h3>
                            <form className="contact-form" data-toggle="validator">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 col-xs-12">
                                        <div className="form-group">
                                            <i className="contact-icon fa fa-user"></i>
                                            <input type="text" className="form-control" id="name" placeholder="Full Name" required data-error="Please enter your name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-xs-12">
                                        <div className="form-group">
                                            <i className="contact-icon fa fa-envelope-o"></i>
                                            <input type="email" className="form-control" id="email" placeholder="Email" required data-error="Please enter your email" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-xs-12">
                                        <div className="form-group">
                                            <i className="contact-icon fa fa-pencil-square-o"></i>
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" required data-error="Please enter your Subject" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-xs-12">
                                        <textarea className="form-control" id="message" rows="4" placeholder="Message" required data-error="Please enter your message"></textarea>
                                        <div className="help-block with-errors"></div>
                                        <button type="submit" id="form-submit" className="btn btn-common btn-form-submit">Send Message</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <h4 className="contact-info-title text-left">Contact Information</h4>
                            <div className="contact-info">
                                <address>
                                    <i className="lni-map-marker icons cyan-color contact-info-icon"></i>
                                    Level 13, 2 Elizabeth St, Melbourne,
                        </address>
                                <div className="tel-info">
                                    <a href="tel:1800452308"><i className="lni-mobile icons cyan-color contact-info-icon"></i>1800 452 308</a>
                                    <a href="tel:+61(8)82343555"><i className="lni-phone icons cyan-color contact-info-icon"></i>+61 (8) 8234 3555</a>
                                </div>
                                <a href="mailto:hello@spiritapp.com"><i className="lni-envelope icons cyan-color contact-info-icon"></i>admin@uideck.com</a>
                                <a href="#"><i className="lni-tab icons cyan-color contact-info-icon"></i>www.uideck.com</a>
                                <ul className="social-links">
                                    <li>
                                        <a href="#" className="fa fa-facebook"></a>
                                    </li>
                                    <li>
                                        <a href="#" className="fa fa-twitter"></a>
                                    </li>
                                    <li>
                                        <a href="#" className="fa fa-instagram"></a>
                                    </li>
                                    <li>
                                        <a href="#" className="fa fa-linkedin"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Contacts;