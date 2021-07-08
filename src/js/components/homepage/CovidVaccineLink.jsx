

import React from 'react';

const CovidVaccineLink = () => (
    <div className="covid-19-vaccine-link__container">
        <div className="covid-19-vaccine-link__image">
            <img src="img/wcdt.png" alt="We Can Do This" />
        </div>
        <div className="covid-19-vaccine-link__text">
            <strong>We Can Do this. </strong>
            Find COVID-19 vaccines near you.&nbsp;
            <a
                href="https://www.vaccines.gov/ "
                target="_blank"
                rel="noopener noreferrer">
                Visit Vaccines.gov
            </a>
        </div>
    </div>
);

export default CovidVaccineLink;
