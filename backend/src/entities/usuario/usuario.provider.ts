import { Usuario } from './usuario.entity';

export const UsuarioProvider = {
  provide: 'UsuarioRepository',
  useFactory: (datasource) => {
    return datasource.getRepository(Usuario);
  },
  inject: ['AppDataSource']
};

