import {IExchangeRate} from '../IExchangeRate';

export interface IGetExchangeRatesResponse {
    rates: Array<IExchangeRate>,
    requestedOn: string,
    baseCurrency: string
}
