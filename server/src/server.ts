import 'dotenv.config';

import cors from '@fastify/cors';
import { log } from 'console';
import fastify from 'fastify';
import { memoriesRoutes } from './routes/memories';

const app = fastify();
app.register(cors, {
  origin: true,
});
app.register(memoriesRoutes);

const port = 3333;

app
  .listen({
    port,
  })
  .then(() => {
    log(`🚀 HTTP server running on http://localhost:${port}`);
  });
