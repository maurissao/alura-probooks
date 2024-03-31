import { Carrinho } from './carrinho.entity';

export const CarrinhoProvider = {
  provide: 'CarrinhoRepository',
  useFactory: (datasource) => {
    return datasource.getRepository(Carrinho);
  },
  inject: ['AppDataSource']
};
