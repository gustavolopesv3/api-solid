import { FastifyInstance } from 'fastify'
import { UserController } from './user.controller'

export class UserRoutes {
  private controller
  constructor(app: FastifyInstance) {
    this.controller = new UserController()
    app.get('/users', (...args) => this.controller.findAll(...args))
    app.post('/users', (...args) => this.controller.create(...args))
  }
}
