import { Usuario } from './usuario.entity';

export const UsuarioProvider = {
  provide: 'UsuarioRepository',
  useFactory: (store) => {
    return store.getRepository(Usuario);
  },
  inject: ['StoreProvider']
};

