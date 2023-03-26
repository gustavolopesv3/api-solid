import { GenericRepository } from '../../../generics/repository.generic'
import { UserCreateDTO, UserDTO } from '../user.dto'

export abstract class UsersRepository implements GenericRepository {
  abstract findAll(query: any): Promise<UserDTO[] | null>
  abstract create(data: UserCreateDTO): Promise<UserDTO>
}
