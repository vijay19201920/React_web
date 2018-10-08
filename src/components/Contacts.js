import React, { Component } from 'react';


class Contacts extends Component {
    render() {
        return (
            <section id="contact" class="contact-form section-padding">
                <div class="container">
                
                    <div class="row">
                        <div class="col-lg-8 col-md-6 col-xs-12">
                            <h3 class="title-head text-left">Get in touch</h3>
                            <form class="contact-form" data-toggle="validator">
                                <div class="row">
                                    <div class="col-lg-4 col-md-12 col-xs-12">
                                        <div class="form-group">
                                            <i class="contact-icon fa fa-user"></i>
                                            <input type="text" class="form-control" id="name" placeholder="Full Name" required data-error="Please enter your name">
                                                <div class="help-block with-errors"></div>
            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-12 col-xs-12">
                                            <div class="form-group">
                                                <i class="contact-icon fa fa-envelope-o"></i>
                                                <input type="email" class="form-control" id="email" placeholder="Email" required data-error="Please enter your email">
                                                    <div class="help-block with-errors"></div>
            </div>
                                            </div>
                                            <div class="col-lg-4 col-md-12 col-xs-12">
                                                <div class="form-group">
                                                    <i class="contact-icon fa fa-pencil-square-o"></i>
                                                    <input type="text" class="form-control" id="subject" placeholder="Subject" required data-error="Please enter your Subject">
                                                        <div class="help-block with-errors"></div>
            </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-xs-12">
                                                    <textarea class="form-control" id="message" rows="4" placeholder="Message" required data-error="Please enter your message"></textarea>
                                                    <div class="help-block with-errors"></div>
                                                    <button type="submit" id="form-submit" class="btn btn-common btn-form-submit">Send Message</button>
                                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
      </form>
                                    </div>

                                    <div class="col-lg-4 col-md-6 col-xs-12">
                                        <h4 class="contact-info-title text-left">Contact Information</h4>
                                        <div class="contact-info">
                                            <address>
                                                <i class="lni-map-marker icons cyan-color contact-info-icon"></i>
                                                Level 13, 2 Elizabeth St, Melbourne,
      </address>
                                            <div class="tel-info">
                                                <a href="tel:1800452308"><i class="lni-mobile icons cyan-color contact-info-icon"></i>1800 452 308</a>
                                                <a href="tel:+61(8)82343555"><i class="lni-phone icons cyan-color contact-info-icon"></i>+61 (8) 8234 3555</a>
                                            </div>
                                            <a href="mailto:hello@spiritapp.com"><i class="lni-envelope icons cyan-color contact-info-icon"></i>admin@uideck.com</a>
                                            <a href="#"><i class="lni-tab icons cyan-color contact-info-icon"></i>www.uideck.com</a>
                                            <ul class="social-links">
                                                <li>
                                                    <a href="#" class="fa fa-facebook"></a>
                                                </li>
                                                <li>
                                                    <a href="#" class="fa fa-twitter"></a>
                                                </li>
                                                <li>
                                                    <a href="#" class="fa fa-instagram"></a>
                                                </li>
                                                <li>
                                                    <a href="#" class="fa fa-linkedin"></a>
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