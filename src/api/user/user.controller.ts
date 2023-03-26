import { FastifyReply, FastifyRequest } from 'fastify'

export class UserController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.send({
        success: true,
      })
    } catch (error) {}
  }

  async findAll(request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.send({
        payload: [1, 2, 3],
      })
    } catch (error) {}
  }
}
