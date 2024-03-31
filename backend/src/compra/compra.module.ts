import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { CompraProvider } from '../entities/compra/compra.provider';
import { DatabaseModule } from '../infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CompraController],
  providers: [CompraService, CompraProvider],
})
export class CompraModule {}
