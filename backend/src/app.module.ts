import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchModule } from './modules/branch/branch.module';

@Module({
  imports: [BranchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
