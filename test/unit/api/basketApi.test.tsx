/**
 * @jest-environment jsdom
 */
import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {postBasketResults} from '../../../src/api/basketApi';

jest.mock('../../../src/api/rest/axios');

describe('basketApi', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it('calls request for basket and passes response', async () => {
        mocked(axios.post).mockResolvedValue({data: 'getDataMock'});
        const data = {
            id: '',
            basketValue: 1000,
            currency: 'GBP',
            riskType: 2,
        };

        const request = await postBasketResults(data);
        expect(request.data).toEqual('getDataMock');
        expect(axios.post).toHaveBeenCalledWith('/basket', data);
    });
});
