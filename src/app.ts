import fastify from 'fastify'
import { usersRoutes } from './api/user/user.routes'

export const app = fastify()

app.register(usersRoutes)
