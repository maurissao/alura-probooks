import { Module } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';
import { CarrinhoProvider } from '../entities/carrinho/carrinho.provider';
import { DatabaseModule } from '../infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CarrinhoController],
  providers: [CarrinhoService, CarrinhoProvider],
})
export class CarrinhoModule {}
