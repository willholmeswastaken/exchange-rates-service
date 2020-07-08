import axios from 'axios';

import config from '../config.json';
import {ILatestResponse} from '../models/external/exchangeratesio/ILatestResponse';
import {IExchangeRate} from '../models/consumer/IExchangeRate';

import {IAdapter} from './IAdapter';

export class LatestRatesAdapter implements IAdapter<IExchangeRate[]> {
  constructor(public currency: string) {
  }

  public async execute(): Promise<IExchangeRate[]> {
    const response: ILatestResponse = await (await axios.get(`${config.EXCHANGE_RATES_BASE_URL}?base=${this.currency.toUpperCase()}`)).data;
    return Object.entries(response.rates).map(([key, val]) => ({name: key, value: parseFloat(val).toFixed(2)} as unknown as IExchangeRate));
  }
}

export default LatestRatesAdapter;
