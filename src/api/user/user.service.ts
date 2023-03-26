import { GenericService } from '../../generics/service.generic'
import { InMemoryUsersRepository } from './repository/user.in-memory.repository'
import { CreateUserUseCase } from './useCases/create-user.usecase'
import { UserCreateDTO, UserDTO } from './user.dto'

export class UserService extends GenericService {
  private _createUserUseCase
  constructor() {
    super(new InMemoryUsersRepository())
    this._createUserUseCase = new CreateUserUseCase(this.repository)
  }

  async create(data: UserCreateDTO): Promise<UserDTO> {
    return this._createUserUseCase.execute()
  }
}
