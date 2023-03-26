export interface GenericRepository {
  create(data: any): Promise<any>
  findAll(query?: any): Promise<any[] | null>
}
