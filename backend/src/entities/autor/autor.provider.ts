import { Autor } from './autor.entity';

export const AutorProvider = {
  provide: 'AutorRepository',
  useFactory: (store) => {
    return store.getRepository(Autor);
  },
  inject: ['StoreProvider']
};
