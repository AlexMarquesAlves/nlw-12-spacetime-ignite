import { log } from 'console'
import fastify from 'fastify'

const app = fastify()
const port = 3333

app.post('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port,
  })
  .then(() => {
    log(`🚀 HTTP server running on http://localhost:${port}`)
  })
