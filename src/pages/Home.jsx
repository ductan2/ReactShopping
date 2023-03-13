import React from 'react';
import Helmet from '../components/Helmet';
import Categories from '../components/Categories';
import cateData from '../assets/DataShop/cate-slider';
export const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/* categories slider */}
            <Categories
                data={cateData}
                control={true}
                auto={false}
                timeOut={5000}
            ></Categories>
            {/* end categories  */}
        </Helmet>
    );
};
