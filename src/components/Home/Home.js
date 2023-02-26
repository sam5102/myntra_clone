import React from 'react';
import './Home.css';
import Header from '../Header'
import Banner from './Banner'
import OmgDeals from './OmgDeals';
import BudgetBuys from './BudgetBuys';
import LovedBrands from './LovedBrands';
import TopBrands from './TopBrands';
import ShopByCategory from './ShopByCategory';
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <OmgDeals />
            <BudgetBuys />
            <LovedBrands />
            <TopBrands />
            <ShopByCategory />
            <Footer />
        </div>
    )
}

export default Home;