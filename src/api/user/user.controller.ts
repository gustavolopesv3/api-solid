import { FastifyReply, FastifyRequest } from 'fastify'
import { UserService } from './user.service'

export class UserController {
  public _service
  constructor() {
    this._service = new UserService()
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    try {
      const payload = await this._service.create({})
      reply.send({
        payload,
      })
    } catch (error) {
      return error
    }
  }

  async findAll(request: FastifyRequest, reply: FastifyReply) {
    try {
      const payload = await this._service.findAll()
      reply.send({
        payload,
      })
    } catch (error) {
      return error
    }
  }
}
