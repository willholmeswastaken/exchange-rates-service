import {IRates} from './IRates';

export interface ILatestResponse {
    rates: IRates;
    base: string;
    date: string;
}
