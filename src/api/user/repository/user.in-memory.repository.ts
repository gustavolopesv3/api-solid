import { UserType } from '../types/user.types'
import { UserCreateDTO } from '../user.dto'
import { UsersRepository } from './user.repository'

export class InMemoryUsersRepository implements UsersRepository {
  private items: UserType[] = []

  async findAll(query: any): Promise<UserType[] | []> {
    const data = this.items
    return data
  }

  async create(data: UserCreateDTO): Promise<UserType | any> {
    try {
      const dataToCreate = {
        id: '123',
        email: 'lopes@emai.com',
        password: '123',
      } as UserType
      this.items.push(dataToCreate)
      return dataToCreate
    } catch (error) {}
  }
}
