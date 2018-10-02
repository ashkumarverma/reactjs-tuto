import React from 'react';

const Footer = () => (
    <div className="credits">
        <div className="container">
            <div id="backtotop"><i className="fa fa-arrow-up"></i></div>
            <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-6"><p>Copyright &copy; 2018 PayUCoupons</p></div>
                <div className="col-xs-12 col-sm-8 col-md-6">
                    <ul className="nav navbar-nav copyright">
                        <li><a href="/">Home</a></li>
                        <li><a href="/aboutus">About</a></li>
                        <li><a href="/coupons">Coupons</a></li>
                        <li><a href="/deals">Deals</a></li>
                        <li><a href="/offers">Offers</a></li>
                        <li><a href="/FAQ">F.A.Q</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;