import { Module } from '@nestjs/common';
import { ScraperModule } from './scraper/scraper.module.js';

@Module({
  imports: [ScraperModule],
})
export class AppModule {}
