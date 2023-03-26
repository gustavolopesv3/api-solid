import fastify from 'fastify'
import { UserRoutes } from './api/user/user.routes'

export const app = fastify()

app.register(async (args) => new UserRoutes(args))
