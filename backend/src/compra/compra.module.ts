import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { CompraProvider } from '../entities/compra/compra.provider';
import { DatabaseModule } from '../infra/database/database.module';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CompraController],
  providers: [CompraService, CompraProvider],
})
export class CompraModule {}
