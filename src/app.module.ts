import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpenceModule } from './expences/expence.module';

@Module({
  imports: [ExpenceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
