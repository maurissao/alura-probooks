import { Carrinho } from './carrinho.entity';

export const CarrinhoProvider = {
  provide: 'CarrinhoRepository',
  useFactory: (store) => {
    return store.getRepository(Carrinho);
  },
  inject: ['StoreProvider']
};
