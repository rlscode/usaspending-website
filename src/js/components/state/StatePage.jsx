/**
 * StatePage.jsx
 * Created by Lizzie Salita 5/2/18
 */

import React from 'react';
import PropTypes from 'prop-types';

import { capitalize } from 'lodash';
import { statePageMetaTags } from 'helpers/metaTagHelper';

import MetaTags from 'components/sharedComponents/metaTags/MetaTags';
import Header from 'components/sharedComponents/header/Header';
import StickyHeader from 'components/sharedComponents/stickyHeader/StickyHeader';
import Footer from 'components/sharedComponents/Footer';

import StateLoading from './StateLoading';
import StateError from './StateError';

import StateContent from './StateContent';

const propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    id: PropTypes.string,
    stateProfile: PropTypes.object,
    pickedFy: PropTypes.func
};

export default class StatePage extends React.Component {
    render() {
        let content = <StateContent {...this.props} />;
        if (this.props.loading) {
            content = (<StateLoading />);
        }
        else if (this.props.error) {
            content = (<StateError />);
        }

        return (
            <div className="usa-da-state-page">
                <MetaTags {...statePageMetaTags} />
                <Header />
                <StickyHeader>
                    <div className="sticky-header__title">
                        <h1 tabIndex={-1} id="main-focus">
                            {capitalize(this.props.stateProfile.overview.type)} Profile
                        </h1>
                    </div>
                </StickyHeader>
                <main
                    id="main-content"
                    className="main-content">
                    {content}
                </main>
                <Footer />
            </div>
        );
    }
}

StatePage.propTypes = propTypes;
