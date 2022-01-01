import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { NewTranslationEventBody, TranslationEvent } from './types';

@Controller('translation_event')
export class TranslationEventController {
  @Post('new')
  handleNewTranslationEvent(@Body() body: NewTranslationEventBody): void {
    const translationEvent: TranslationEvent = body?.payload?.event?.data?.new;

    if (!translationEvent) {
      throw new BadRequestException('Unrecognized translation event');
    }
    switch (translationEvent.operation) {
      case 'add_branch':
    }
  }
}
