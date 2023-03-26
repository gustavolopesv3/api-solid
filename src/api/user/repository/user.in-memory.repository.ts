import { UserDTO, UserCreateDTO } from '../user.dto'
import { UsersRepository } from './user.repository'

export class InMemoryUsersRepository implements UsersRepository {
  async findAll(query: any): Promise<UserDTO[] | null> {
    return [{ email: 'a', id: 'qa' }]
  }

  async create(data: UserCreateDTO): Promise<UserDTO> {
    return {
      email: 'jondue@emai.com',
      id: '123',
    }
  }
}
