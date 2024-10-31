import { Module } from '@nestjs/common';
import { expenceController } from './expence.controllers';
import { ExpenceService } from './expence.service';

@Module({
  imports: [],
  controllers: [expenceController],
  providers: [ExpenceService],
})
export class ExpenceModule {}
