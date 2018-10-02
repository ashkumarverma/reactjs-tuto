import React from 'react';
import Login from '../components/Login';

const Header = () => (
    <div id="scroll-section-1" className="navigation white-nav-no navbar-fixed-top">
    <nav className="navbar" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/"><img src="/images/payucoupons_logo.png" width="179" height="29" className="img-responsive img-minilogo" alt=""/></a>
            </div>
            <div className="collapse navbar-collapse">
                <ul id="main-menu" className="nav navbar-nav">
                    <li><a href="/deals">Deals</a></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Categories</a>
                        <ul className="dropdown-menu list">
                            <li className="content megamenu-list">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h3 className="title">Women's Fashion</h3>
                                        <div>
                                            <a href="/category/kurtas-kurtis" data-description="Exclusive Offer">Kurtas & Kurtis</a>
                                            <a href="/category/lingerie-Offer" data-description="Exclusive Offer">Lingerie Offer</a>
                                            <a href="/category/sarees-offer" data-description="Exclusive Offer">Sarees Offer</a>
                                            <a href="/category/women-top" data-description="Exclusive Offer">Women Top</a>
                                            <a href="/category/suit-sets" data-description="Exclusive Offer">Suit Sets</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <h3 className="title">Men's Fashion</h3>
                                        <div>
                                            <a href="/category/mens-accessories" data-description="Exclusive Offer">Mens Accessories</a>
                                            <a href="/category/mens-footwear" data-description="Exclusive Offer">Mens Footwear</a>
                                            <a href="/category/mens-formal-wear" data-description="Exclusive Offer">Mens Formal Wear</a>
                                            <a href="/category/menst-shirts" data-description="Exclusive Offer">Mens Tshirts</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <h3 className="title">Jewellery</h3>
                                        <div>
                                            <a href="/category/ear-rings" data-description="Exclusive Offer">Earrings</a>
                                            <a href="/category/necklaces" data-description="Exclusive Offer">Necklaces</a>
                                            <a href="/category/pendants" data-description="Exclusive Offer">Pendants</a>
                                            <a href="/category/ring" data-description="Exclusive Offer">Ring</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <h3 className="title">Travel Offer</h3>
                                        <div>
                                            <a href="/category/bus-bookings" data-description="Exclusive Offer">Bus Bookings</a>
                                            <a href="/category/domestic-flights" data-description="Exclusive Offer">Domestic Flights</a>
                                            <a href="/category/international-flights" data-description="Exclusive Offer">International Flights</a>
                                            <a href="/category/taxi-service" data-description="Exclusive Offer">Taxi Service</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="content megamenu-half">
                                <div className="row">
                                    <div className="col-xs-12 col-md-3">
                                        <div>
                                            <a href="/category/list"><div className="label label-primary"> View all Categories <i className="fa fa-angle-right"></i></div></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Stores</a>
                        <ul className="dropdown-menu half">
                            <li className="content megamenu-half">
                                <div className="row">
                                    <div className="col-xs-12 col-md-3">
                                        <h3 className="title">Shopping</h3>
                                        <div>
                                            <a href="/store/amazon">Amazon</a>
                                            <a href="/store/flipkart">Flipkart</a>
                                            <a href="/store/snapdeal">Snapdeal</a>
                                            <a href="/store/ebay">eBay</a>
                                            <a href="/store/shopclues">ShopClues</a>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-md-3">
                                        <h3 className="title">recharge</h3>
                                        <div>
                                            <a href="/store/freecharge">Freecharge</a>
                                            <a href="/store/paytm">Paytm</a>
                                            <a href="/store/mobikwik">Mobikwik</a>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-md-3">
                                        <h3 className="title">Fashion</h3>
                                        <div>
                                            <a href="/store/jabong">Jabong</a>
                                            <a href="/store/myntra">Myntra</a>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-md-3">
                                        <h3 className="title">Dine</h3>
                                        <div>
                                            <a href="/store/dominospizza">Dominos Pizza</a>
                                            <a href="/store/kfc">KFC</a>
                                            <a href="/store/nacdonald">Mac Donald</a>
                                            <a href="/store/pizzahut">Pizza Hut</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="content megamenu-half">
                                <div className="row">
                                    <div className="col-xs-12 col-md-3">
                                        <div>
                                            <a href="/store"><div className="label label-primary"> View all Stores <i className="fa fa-angle-right"></i></div></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/exclusivecoupon">Exclusive Coupons</a>
                    </li>
                    <li>
                        
                    </li>
                </ul>
                <Login />
            </div>
        </div>
    </nav>
</div>
)

export default Header;