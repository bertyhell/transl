import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import {
  NewTranslationEventBody,
  TranslationEvent,
} from './translation-event.types';
import { TranslationEventService } from './translation-event.service';

@Controller('translation_event')
export class TranslationEventController {
  constructor(
    private readonly translationEventService: TranslationEventService,
  ) {}

  @Post('new')
  async handleNewTranslationEvent(
    @Body() body: NewTranslationEventBody,
  ): Promise<void> {
    const translationEvent: TranslationEvent = body?.event?.data?.new;

    if (!translationEvent) {
      throw new BadRequestException('Unrecognized translation event');
    }
    switch (translationEvent.operation) {
      case 'add_branch':
        await this.translationEventService.addBranch(
          translationEvent.value,
          translationEvent.project_id,
        );
    }
  }
}
