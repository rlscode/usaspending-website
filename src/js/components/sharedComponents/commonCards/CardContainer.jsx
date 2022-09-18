/**
 * CardContainer.jsx
 * Created by Andrea Blackwell  09/09/2022
 */

import React from 'react';
import PropTypes from "prop-types";

const propTypes = {
    variant: PropTypes.string, // elevated, outline, or none
    size: PropTypes.string, // sm, md, or lg
    fill: PropTypes.string,
    height: PropTypes.number,
    externalLink: PropTypes.bool,
    className: PropTypes.string
};

const flexStyles = {
    display: "flex",
    "flex-direction": "column",
    flex: "1 1 auto",
    "flex-basis": "auto",
    height: "100%"
};

const CardContainer = ({
    variant, size, children, fill, height, externalLink
}) => (
    <div style={flexStyles}>
        <div className={`${variant} ${size} card-container ${externalLink ? 'card__external-link' : ''}`} style={{ backgroundColor: `${fill}`, height: `${height}` }}>
            { children }
        </div>
    </div>

);

CardContainer.propTypes = propTypes;
CardContainer.defaultProps = { size: 'md', variant: ''};
export default CardContainer;
