import React, {useState} from 'react';
import { Modal } from 'antd';
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
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCancel = () => {
        setIsModalOpen(false);
      };

    return (
        <div>
            <Header />
            <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
                <img src="https://www.linkpicture.com/q/0ed3ff99-6316-416e-8bb7-e0eee8733661.jpeg" alt="coupon" width="100%"/>
            </Modal>
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