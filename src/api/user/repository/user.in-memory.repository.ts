import { UserType } from '../types/user.types'
import { UserDTO, UserCreateDTO } from '../user.dto'
import { UsersRepository } from './user.repository'

export class InMemoryUsersRepository implements UsersRepository {
  private items: UserType[] = []

  async findAll(query: any): Promise<UserType[] | []> {
    console.log('CALLED')
    const data = this.items
    return data
  }

  async create(data: UserCreateDTO): Promise<UserDTO> {
    return {
      email: 'jondue@emai.com',
      id: '123',
    }
  }
}
