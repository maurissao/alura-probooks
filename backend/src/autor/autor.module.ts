import { Module, Scope } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { AutorProvider } from '../entities/autor/autor.provider';
import { DatabaseModule } from '../infra/database/database.module';
import { UniqueKeyValidatorConstraint } from '../infra/database/validation-services/datasource.validator';

@Module({
  imports: [DatabaseModule],
  controllers: [AutorController],
  providers: [AutorService, AutorProvider, UniqueKeyValidatorConstraint],
})
export class AutorModule {}
