import  EnvConfigService  from "src/core/config/config.service";
import { Test, TestingModule } from '@nestjs/testing';

describe('EnvConfigService', () => {
  let service: EnvConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvConfigService],
    }).compile();

    service = module.get<EnvConfigService>(EnvConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
