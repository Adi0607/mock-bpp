// bpp.controller.ts placeholder
import { Controller, Post, Body } from '@nestjs/common';
import { BppService } from './bpp.service';

@Controller()
export class BppController {
  constructor(private readonly bppService: BppService) {}

  @Post('/search')
  handleSearch(@Body() body: any) {
    return this.bppService.onSearch(body);
  }

  @Post('/select')
  handleSelect(@Body() body: any) {
    return this.bppService.onSelect(body);
  }

  @Post('/init')
  handleInit(@Body() body: any) {
    return this.bppService.onInit(body);
  }

  @Post('/confirm')
  handleConfirm(@Body() body: any) {
    return this.bppService.onConfirm(body);
  }
}
