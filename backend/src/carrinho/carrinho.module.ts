import { Module } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';
import { CarrinhoProvider } from '../entities/carrinho/carrinho.provider';
import { StoreModule } from '../infra/database/store.module';

@Module({
  imports: [StoreModule],
  controllers: [CarrinhoController],
  providers: [CarrinhoService, CarrinhoProvider],
})
export class CarrinhoModule {}
