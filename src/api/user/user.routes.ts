import { FastifyInstance } from 'fastify'
import { UserController } from './user.controller'

export async function usersRoutes(app: FastifyInstance) {
  const controller = new UserController()
  app.post('/users', { onRequest: [] }, controller.create)
  app.get('/users', { onRequest: [] }, controller.findAll)
}
