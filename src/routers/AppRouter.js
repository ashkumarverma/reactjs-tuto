import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';
import About from '../components/About';
import Contact from '../components/Contact';
import Deals from '../components/Deals';
import Coupons from '../components/Coupons';
import Faq from '../components/Faq';
import Privacy from '../components/Privacy';
import Offers from '../components/Offers';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/aboutus" component={About} exact={true} />
                <Route path="/contact" component={Contact} />
                <Route path="/deals" component={Deals} />
                <Route path="/faq" component={Faq} />
                <Route path="/coupons" component={Coupons} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/offers" component={Offers} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter;
