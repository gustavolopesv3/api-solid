import { GenericRepository } from './repository.generic'

export class GenericService {
  constructor(public readonly repository: GenericRepository) {
    console.log(JSON.stringify(this, null, 2))
  }

  async findAll(query?: any): Promise<any[] | null> {
    console.log('generica called')
    return this.repository.findAll(query)
  }

  async create(data: any): Promise<any> {
    return this.repository.create(data)
  }
}
