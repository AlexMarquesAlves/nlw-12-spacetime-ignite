import { PrismaClient } from '@prisma/client'
import { log } from 'console'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()
const port = 3333

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port,
  })
  .then(() => {
    log(`🚀 HTTP server running on http://localhost:${port}`)
  })
