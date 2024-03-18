import { Categoria } from './categoria.entity';

export const CategoriaProvider = {
  provide: 'CategoriaRepository',
  useFactory: (store) => {
    return store.getRepository(Categoria);
  },
  inject: ['StoreProvider']
};
