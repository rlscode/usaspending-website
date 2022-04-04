import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@test-utils';
// import { render, screen, fireEvent } from '@testing-library/react';

import Accordion from '../../../src/js/components/sharedComponents/accordion/accordion';

describe('Accordion', () => {
    const titleText = 'Placeholder Title';
    const bodyText = 'Placeholder Body';

    it('expects the accordion to be rendered and closed.', () => {
        const renderComponent = () =>
            render(<Accordion
                title={titleText}>
                <div>
                    <p>{bodyText}</p>
                </div>
            </Accordion>);

        const { getByTestId } = renderComponent();
        expect(getByTestId('accordion')).not.toHaveClass('open');
    });

    it('expects the title to be rendered.', () => {
        render(<Accordion
            title={titleText}>
            <div>
                <p>{bodyText}</p>
            </div>
        </Accordion>);

        expect(screen.queryByText(titleText)).toBeTruthy();
    });

    it(
        'does apply "open" to section element classnames if accordion is opened.',
        () => {
            const renderComponent = () =>
                render(<Accordion
                    title={titleText}>
                    <div>
                        <p>{bodyText}</p>
                    </div>
                </Accordion>);

            const { getByTestId } = renderComponent();
            const element = getByTestId('accordion');
            expect(element).not.toHaveClass('open');
            fireEvent.click(element);
            expect(element).toHaveClass('open');
        }
    );
});
