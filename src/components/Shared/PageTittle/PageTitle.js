import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title} | electraNext wareHouse</title>
            </Helmet>
        </div>
    );
};

export default PageTitle;