import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationEventController } from './translation-event/translation-event.controller';

@Module({
  imports: [],
  controllers: [AppController, TranslationEventController],
  providers: [AppService],
})
export class AppModule {}
