import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { StoreModule } from '../infra/database/store.module';
import { CategoriaProvider } from '../entities/categoria/categoria.provider';

@Module({
  imports: [StoreModule],
  controllers: [CategoriaController],
  providers: [CategoriaService, CategoriaProvider],
})
export class CategoriaModule {}
