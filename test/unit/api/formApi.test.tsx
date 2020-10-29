/**
 * @jest-environment jsdom
 */
import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {getFormResult} from '../../../src/api/formApi';
import {currencyForm} from '../../../src/helpers/constants';

jest.mock('../../../src/api/rest/axios');

describe('formApi', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for calculator and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const data = {
            initialValue: 1000,
            monthlySaving: 300,
            savingPeriod: 6,
            annualProfit: 3,
            paymentFrequency: '1',
            currencyValue: currencyForm.BRITISH_POUND,
        };

        const request = await getFormResult(data);
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith('/calculator', {
            params: data,
        });
    });
});
