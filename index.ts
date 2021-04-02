import { json, raw, text, urlencoded } from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import { env } from '@utils';

const app = express();

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

const port = env.port;
app.listen(port, () => {
  console.log(`> Listening on port ${port}`);
});
