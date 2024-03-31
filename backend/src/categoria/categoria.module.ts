import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { CategoriaProvider } from '../entities/categoria/categoria.provider';
import { DatabaseModule } from '../infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriaController],
  providers: [CategoriaService, CategoriaProvider],
})
export class CategoriaModule {}
