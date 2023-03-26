import { GenericService } from '../../generics/service.generic'
import { InMemoryUsersRepository } from './repository/user.in-memory.repository'

export class UserService {
  constructor() {
    // super(new InMemoryUsersRepository())
    console.log('called')
  }

  async findAll(query?: any): Promise<any[] | null> {
    console.log('asdasds')
    return []
  }
}
