import { json, raw, text, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import routesV1 from '@routes/v1';
import { env } from '@utils';

const app = express();

if (env.useCors) {
  app.use(cors());
}

app.use(json());
app.use(raw());
app.use(text());
app.use(express.json({ limit: '8000kb' }));
app.use(urlencoded({ extended: true }));

mongoose.connect(
  env.connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('> Connected to db');
  },
);

mongoose.set('runValidators', true);

app.use('/v1', routesV1);

const port = env.port;
app.listen(port, () => {
  console.log(`> Listening on port ${port}`);
});
