import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { StoreModule } from 'src/infra/database/store.module';
import { CategoriaProvider } from 'src/entities/categoria/categoria.provider';

@Module({
  imports: [StoreModule],
  controllers: [CategoriaController],
  providers: [CategoriaService, CategoriaProvider],
})
export class CategoriaModule {}
