import React from 'react';
import Helmet from '../components/Helmet';
import Categories from '../components/Categories';
export const Home = () => {
    return <Helmet title='Trang chủ'>
        {/* categories slider */}
        <Categories></Categories>
        {/* end categories  */}
    </Helmet>;
};
