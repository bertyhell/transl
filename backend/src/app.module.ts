import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationEventModule } from './modules/translation-event/translation-event.module';

@Module({
  imports: [TranslationEventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
