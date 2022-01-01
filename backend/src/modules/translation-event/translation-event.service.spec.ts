import { Test, TestingModule } from '@nestjs/testing';
import { TranslationEventService } from './translation-event.service';

describe('TranslationEventService', () => {
  let service: TranslationEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranslationEventService],
    }).compile();

    service = module.get<TranslationEventService>(TranslationEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
