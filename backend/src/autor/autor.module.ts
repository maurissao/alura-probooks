import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { AutorProvider } from '../entities/autor/autor.provider';
import { DatabaseModule } from '../infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AutorController],
  providers: [AutorService, AutorProvider],
})
export class AutorModule {}
