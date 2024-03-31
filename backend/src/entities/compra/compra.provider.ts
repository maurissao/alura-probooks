import { Compra } from './compra.entity';

export const CompraProvider = {
  provide: 'CompraRepository',
  useFactory: (datasource) => {
    return datasource.getRepository(Compra);
  },
  inject: ['AppDataSource']
};
