import { Module } from '@nestjs/common';
import { TranslationEventService } from './translation-event.service';
import { TranslationEventController } from './translation-event.controller';

@Module({
  controllers: [TranslationEventController],
  providers: [TranslationEventService]
})
export class TranslationEventModule {}
