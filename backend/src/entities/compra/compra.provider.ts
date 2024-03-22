import { Compra } from './compra.entity';

export const CompraProvider = {
  provide: 'CompraRepository',
  useFactory: (store) => {
    return store.getRepository(Compra);
  },
  inject: ['StoreProvider']
};
