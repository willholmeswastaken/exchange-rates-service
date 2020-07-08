import {IGetExchangeRatesResponse} from './models/consumer/responses/IGetExchangeRatesResponse';
import LatestRatesAdapter from './adapters/latestRatesAdapter';
import {IAdapter} from './adapters/IAdapter';
import {IExchangeRate} from './models/consumer/IExchangeRate';

import express = require('express');
import cc = require('currency-codes');
import cors = require('cors');
import morgan = require('morgan');
import helmet = require('helmet');

const app: express.Application = express();

app.use(helmet());
app.use(cors());
app.use(morgan(':method :url :status - :response-time ms'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/rates/:currency', async (req, res) => {
  if (cc.code(req.params.currency)) {
    try {
      const response: IGetExchangeRatesResponse = {
        baseCurrency: req.params.currency,
        requestedOn: new Date().toISOString(),
        rates: [],
      };
      const adapter: IAdapter<IExchangeRate[]> = new LatestRatesAdapter(req.params.currency);
      response.rates = await adapter.execute();
      res.send(response);
    } catch (err) {
      res.status(500).send(err.message);
    }
  } else {
    res.status(400).send('Not a valid currency code!');
  }
});

app.listen((process.env.PORT || 3000), () => {
  // eslint-disable-next-line no-console
  console.log('App is listening on port 3000!');
});
