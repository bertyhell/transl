import { Test, TestingModule } from '@nestjs/testing';
import { TranslationEventController } from './translation-event.controller';
import { TranslationEventService } from './translation-event.service';

describe('TranslationEventController', () => {
  let controller: TranslationEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TranslationEventController],
      providers: [TranslationEventService],
    }).compile();

    controller = module.get<TranslationEventController>(TranslationEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});