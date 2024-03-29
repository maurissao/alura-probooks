import { Autor } from './autor.entity';
import { Store } from '../../infra/database/store';

export const AutorProvider = {
  provide: 'AutorRepository',
  useFactory: (store) => {
    return store.getRepository(Autor);
  },
  inject: ['StoreProvider']
};
