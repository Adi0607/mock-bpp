
import { Module } from '@nestjs/common';
import { BppController } from './bpp/bpp.controller';
import { BppService } from './bpp/bpp.service';

@Module({
  controllers: [BppController],
  providers: [BppService],
})
export class AppModule {}