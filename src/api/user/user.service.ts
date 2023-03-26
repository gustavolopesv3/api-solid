import { GenericService } from '../../generics/service.generic'
import { InMemoryUsersRepository } from './repository/user.in-memory.repository'

export class UserService extends GenericService {
  constructor() {
    super(new InMemoryUsersRepository())
  }
}
