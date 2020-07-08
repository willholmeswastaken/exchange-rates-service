import axios from 'axios';

import {ILatestResponse} from '../../models/external/exchangeratesio/ILatestResponse';
import {IRates} from '../../models/external/exchangeratesio/IRates';
import LatestRatesAdapter from '../../adapters/latestRatesAdapter';
import {IExchangeRate} from '../../models/consumer/IExchangeRate';
import {IMockResponse} from '../models/IMockResponse';
import {IAdapter} from '../../adapters/IAdapter';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('LatestRatesAdapter', () => {
  it('performs execute successfully', async () => {
    // Arrange
    const base = "GBP";
    const expectedResponse = <ILatestResponse>{
      base,
      date: new Date().toISOString(),
      rates: <IRates>{
        HKD: 1,
      },
    };
    const adapter: IAdapter<IExchangeRate[]> = new LatestRatesAdapter(base);

    mockedAxios.get.mockResolvedValue(<IMockResponse>{data: expectedResponse});

    // Act
    const res = await adapter.execute();

    // Assert
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(res).toEqual(Object.entries(expectedResponse.rates).map(([key, val]) => ({name: key, value: parseFloat(val).toFixed(2)} as unknown as IExchangeRate)));
  });
});
