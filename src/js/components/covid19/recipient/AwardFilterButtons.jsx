/**
 * AwardFilterButtons.jsx
 * Created by Jonathan Hill 07/06/20
 */

import React from 'react';
import PropTypes from 'prop-types';
import AwardFilterButton from './AwardFilterButton';

const propTypes = {
    onClick: PropTypes.func,
    filters: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        internal: PropTypes.string
    })),
    activeFilter: PropTypes.string,
    tabCounts: PropTypes.object
};

const AwardFilterButtons = ({
    onClick,
    filters,
    activeFilter,
    tabCounts
}) => (
    <div className="award-filter__buttons">
        {
            filters.map((button) => (
                <AwardFilterButton
                    onClick={onClick}
                    label={button.label}
                    value={button.internal}
                    active={activeFilter === button.internal}
                    // Disable the tab if we know there are zero results
                    disabled={tabCounts && button.internal !== 'all' && !tabCounts[button.internal]} />
            ))
        }
    </div>
);

AwardFilterButtons.propTypes = propTypes;
export default AwardFilterButtons;
