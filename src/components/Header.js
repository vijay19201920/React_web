import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <header id="header-wrap">
                <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
                    <div className="container">

                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="icon-menu"></span>
                                <span className="icon-menu"></span>
                                <span className="icon-menu"></span>
                            </button>
                            <a href="index.html" className="navbar-brand"><img src="img/logo.png" alt="" /></a>
                        </div>
                        <div className="collapse navbar-collapse" id="main-navbar">
                            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#sliders">
                                        Home
                  </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        About
                  </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">
                                        Services
                  </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">
                                        Portfolio
                  </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#feature">
                                        Features
                  </a>
                                </li>
                      
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">
                                        Contact
                  </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <ul className="mobile-menu navbar-nav">
                        <li>
                            <a className="page-scroll" href="#sliders">
                                Home
              </a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#about">
                                About
              </a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#services">
                                Services
              </a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#portfolio">
                                Portfolio
              </a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#feature">
                                Features
              </a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#team">
                                Team
              </a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#pricing">
                                Pricing
              </a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#contact">
                                Contact
              </a>
                        </li>
                    </ul>


                </nav>



                <div id="sliders">
                    <div className="full-width">

                        <div id="light-slider" className="carousel slide">
                            <div id="carousel-area">
                                <div id="carousel-slider" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel-slider" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel-slider" data-slide-to="1"></li>
                                        <li data-target="#carousel-slider" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img src="img/slider/bg-1.jpg" alt="" />
                                            <div className="carousel-caption">
                                                <h3 className="slide-title animated fadeInDown"><span>Helium</span> - Bootstrap 4 UI Kit</h3>
                                                <h5 className="slide-text animated fadeIn">Lorem ipsum dolor sit amet, consectetuer adipiscing elit<br /> Curabitur ultricies nisi Nam eget dui. Etiam rhoncus</h5>
                                                <a href="#" className="btn btn-lg btn-common animated fadeInUp">Get Started</a>
                                                <a href="#" className="btn btn-lg btn-border animated fadeInUp">Learn More</a>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="img/slider/bg-2.jpg" alt="" />
                                            <div className="carousel-caption">
                                                <h3 className="slide-title animated fadeInDown"><span>Cutting-edge</span> Features</h3>
                                                <h5 className="slide-text animated fadeIn">Lorem ipsum dolor sit amet, consectetuer adipiscing elit<br /> Curabitur ultricies nisi Nam eget dui. Etiam rhoncus</h5>
                                                <a href="#" className="btn btn-lg btn-common animated fadeInUp">Download Now</a>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="img/slider/bg-3.jpg" alt="" />
                                            <div className="carousel-caption">
                                                <h3 className="slide-title animated fadeInDown"><span>100+</span> UI Blocks & Components</h3>
                                                <h5 className="slide-text animated fadeIn">Lorem ipsum dolor sit amet, consectetuer adipiscing elit<br /> Curabitur ultricies nisi Nam eget dui. Etiam rhoncus</h5>
                                                <a href="#" className="btn btn-lg btn-border animated fadeInUp">Get Started</a>
                                                <a href="#" className="btn btn-lg btn-common animated fadeInUp">Download</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel-slider" role="button" data-slide="prev">
                                        <i className="fa fa-chevron-left"></i>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-slider" role="button" data-slide="next">
                                        <i className="fa fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
        );
    }
}

export default Header;
