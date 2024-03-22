import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { CompraProvider } from '../../entities/compra/compra.provider';
import { StoreModule } from '../../infra/database/store.module';

@Module({
  imports: [StoreModule],
  controllers: [CompraController],
  providers: [CompraService, CompraProvider],
})
export class CompraModule {}
