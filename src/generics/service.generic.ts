import { GenericRepository } from './repository.generic'

export class GenericService {
  constructor(private readonly repository: GenericRepository) {}

  async findAll(query?: any): Promise<any[] | null> {
    return this.repository.findAll(query)
  }

  async create(data: any): Promise<any> {
    return this.repository.create(data)
  }
}
