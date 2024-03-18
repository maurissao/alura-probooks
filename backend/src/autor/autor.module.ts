import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { AutorProvider } from '../entities/autor/autor.provider';
import { StoreModule } from '../infra/database/store.module';

@Module({
  imports: [StoreModule],
  controllers: [AutorController],
  providers: [AutorService, AutorProvider],
})
export class AutorModule {}
