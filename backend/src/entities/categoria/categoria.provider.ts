import { Categoria } from './categoria.entity';

export const CategoriaProvider = {
  provide: 'CategoriaRepository',
  useFactory: (datasource) => {
    return datasource.getRepository(Categoria);
  },
  inject: ['AppDataSource']
};
