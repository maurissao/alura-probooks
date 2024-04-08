import { Autor } from './autor.entity';
import { DataSource } from 'typeorm';

export const AutorProvider = {
  provide: 'AutorRepository',
  useFactory: (ds: DataSource) => {
    return ds.getRepository(Autor);
  },
  inject: ['AppDataSource']
};
