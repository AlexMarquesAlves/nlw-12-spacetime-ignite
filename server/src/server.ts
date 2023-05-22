import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { log } from 'console'
import fastify from 'fastify'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

const port = 3333

app
  .listen({
    port,
  })
  .then(() => {
    log(`🚀 HTTP server running on http://localhost:${port}`)
  })
