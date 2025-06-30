import { Module } from '@nestjs/common';
import { SearchController } from './search/search.controller';
import { SelectController } from './select/select.controller';
import { InitController } from './init/init.controller';
import { ConfirmController } from './confirm/confirm.controller';

@Module({
  controllers: [
    SearchController,
    SelectController,
    InitController,
    ConfirmController,
  ],
})
export class AppModule {}
