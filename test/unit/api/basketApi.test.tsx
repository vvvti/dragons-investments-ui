/**
 * @jest-environment jsdom
 */
import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {postBasketResults, putBasketResults} from '../../../src/api/basketApi';

jest.mock('../../../src/api/rest/axios');

describe('basketApi', () => {
    beforeEach(() => {
        mocked(axios.post).mockResolvedValue('getMock');
    });

    it('post calls request for basket and passes response', async () => {
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

    it('put calls request for basket and passes response', async () => {
        mocked(axios.put).mockResolvedValue({data: 'getDataMock'});
        const data = {
            id: '',
            basketValue: 1000,
            currency: 'GBP',
            riskType: 2,
        };
        const id = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

        const request = await putBasketResults(id, data);
        expect(request.data).toEqual('getDataMock');
        expect(axios.put).toHaveBeenCalledWith(`/basket/${id}`, data);
    });
});
