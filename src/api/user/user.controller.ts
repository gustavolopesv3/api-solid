import { FastifyReply, FastifyRequest } from 'fastify'
import { Abobora } from './testesss'
import { UserService } from './user.service'

export class UserController {
  public _service
  constructor(private teste: Abobora) {
    this._service = new UserService()
    console.log(this._service)
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.send({
        success: true,
      })
    } catch (error) {}
  }

  async findAll(request: FastifyRequest, reply: FastifyReply) {
    try {
      const payload = this.teste.tes()
      reply.send({
        // payload: [],
        payload1: [],
        payload,
      })
    } catch (error) {
      return error
    }
  }
}
