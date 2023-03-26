import { UsersRepository } from '../repository/user.repository'
import { UserDTO } from '../user.dto'

export class CreateUserUseCase {
  constructor(private repository: UsersRepository) {}
  async execute(): Promise<UserDTO> {
    const data = await this.repository.create({
      email: 'lopes@teste.com',
      password: '12341234',
    })
    return data
  }
}
