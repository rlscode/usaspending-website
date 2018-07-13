/**
 * RecipientContainer-test.jsx
 * Created by Lizzie Salita 6/25/18
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

// mock the state helper
jest.mock('helpers/recipientHelper', () => require('./mockRecipientHelper'));

import { RecipientContainer } from 'containers/recipient/RecipientContainer';
import { mockActions, mockRedux } from './mockData';
import BaseRecipientOverview from 'models/v2/recipient/BaseRecipientOverview';
import { mockRecipientOverview } from '../../models/recipient/mockRecipientApi';

// mock the child component by replacing it with a function that returns a null element
jest.mock('components/recipient/RecipientPage', () => jest.fn(() => null));

describe('RecipientContainer', () => {
    it('should make an API call for the selected recipient on mount', async () => {
        const container = mount(<RecipientContainer
            {...mockRedux}
            {...mockActions} />);

        const loadRecipientOverview = jest.fn();
        container.instance().loadRecipientOverview = loadRecipientOverview;

        container.instance().componentDidMount();
        await container.instance().request.promise;

        expect(loadRecipientOverview).toHaveBeenCalledTimes(1);
        expect(loadRecipientOverview).toHaveBeenCalledWith('123456', 'latest');
    });
    it('should make an API call when the duns changes', async () => {
        const container = mount(<RecipientContainer
            {...mockRedux}
            {...mockActions} />);

        const loadRecipientOverview = jest.fn();
        container.instance().loadRecipientOverview = loadRecipientOverview;

        container.setProps({
            params: {
                recipientId: '098765'
            }
        });

        await container.instance().request.promise;

        expect(loadRecipientOverview).toHaveBeenCalledTimes(1);
        expect(loadRecipientOverview).toHaveBeenCalledWith('098765', 'latest');
    });
    it('should reset the fiscal year when the duns changes', async () => {
        // Use 'all' for the initial FY
        const recipient = Object.assign({}, mockRedux.recipient, {
            fy: 'all'
        });
        const updatedRedux = Object.assign({}, mockRedux, {
            recipient
        });

        const container = mount(<RecipientContainer
            {...updatedRedux}
            {...mockActions} />);

        const loadRecipientOverview = jest.fn();
        container.instance().loadRecipientOverview = loadRecipientOverview;

        container.setProps({
            params: {
                recipientId: '876543'
            }
        });

        await container.instance().request.promise;

        expect(loadRecipientOverview).toHaveBeenLastCalledWith('876543', 'latest');
    });
    it('should make an API call when the fiscal year changes', async () => {
        const container = mount(<RecipientContainer
            {...mockRedux}
            {...mockActions} />);

        const loadRecipientOverview = jest.fn();
        container.instance().loadRecipientOverview = loadRecipientOverview;

        const recipient = Object.assign({}, mockRedux.recipient, {
            fy: '2018'
        });

        const nextProps = Object.assign({}, mockRedux, {
            recipient
        });

        container.setProps(nextProps);

        await container.instance().request.promise;

        expect(loadRecipientOverview).toHaveBeenCalledTimes(1);
        expect(loadRecipientOverview).toHaveBeenCalledWith('123456', '2018');
    });
    describe('parseOverview', () => {
        it('should update the Redux state with a new BaseRecipientOverview', () => {
            const container = shallow(<RecipientContainer
                {...mockRedux}
                {...mockActions} />);

            // Reset the mock action's call count
            mockActions.setRecipientOverview.mockReset();

            container.instance().parseRecipient(mockRecipientOverview);

            const expectedParam = Object.create(BaseRecipientOverview);
            expectedParam.populate(mockRecipientOverview);

            expect(mockActions.setRecipientOverview).toHaveBeenCalledTimes(1);
            expect(mockActions.setRecipientOverview).toHaveBeenCalledWith(expectedParam);
        });
    });
});