/**
 * ExplorerLanding.jsx
 * Created by Kevin Li 8/16/17
 */

import React from 'react';
import PropTypes from 'prop-types';

import { explorerPageMetaTags } from 'helpers/metaTagHelper';

import Footer from 'containers/Footer';
import MetaTags from 'components/sharedComponents/metaTags/MetaTags';
import Header from 'components/sharedComponents/header/Header';
import StickyHeader from 'components/sharedComponents/stickyHeader/StickyHeader';
import ShareIcon from 'components/sharedComponents/stickyHeader/ShareIcon';


const propTypes = {
    children: PropTypes.element
};

require('pages/explorer/explorerPage.scss');

const ExplorerWrapperPage = (props) => (
    <div className="usa-da-explorer-page">
        <MetaTags {...explorerPageMetaTags} />
        <Header />
        <StickyHeader>
            <div className="sticky-header__title">
                <h1 tabIndex={-1} id="main-focus">
                    Spending Explorer
                </h1>
            </div>
            <div className="sticky-header__toolbar">
                <ShareIcon
                    slug={'slug'}
                    url={'url'}
                    email={{
                        subject: `Check out Agency  on USAspending.gov!`,
                        body: `Here is the url: `
                    }} />
            </div>
        </StickyHeader>
        <main
            id="main-content"
            className="main-content">
            {props.children}
        </main>
        <Footer />
    </div>
);

ExplorerWrapperPage.propTypes = propTypes;

export default ExplorerWrapperPage;
