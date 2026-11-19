import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TwseScraperService } from './twse-scraper.service.js';
import { TpexScraperService } from './tpex-scraper.service.js';

@Module({
    imports: [HttpModule],
  providers: [TwseScraperService, TpexScraperService]
})
export class ScraperModule {}
