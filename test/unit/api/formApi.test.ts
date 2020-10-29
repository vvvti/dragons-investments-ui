import axios from 'axios';

describe('getAllBooks() ', () => {
    it('returns response data from axios on successful axios call', async () => {
        const expectedResult = 'something';

        jest.spyOn(axios, 'get').mockResolvedValue({data: expectedResult});

        // const result = await BooksApi.getAllBooks();

        expect(axios.get).toHaveBeenCalledWith('/api/calculator');
        expect(axios.get).toHaveBeenCalledTimes(1);
        // expect(result).toBe(expectedResult);
    });
});
