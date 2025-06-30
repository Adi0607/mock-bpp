import { Controller, Post, Body } from '@nestjs/common';

@Controller('select')
export class SelectController {
  @Post()
  handleSelect(@Body() body: any) {
    return {
      context: body.context,
      message: {
        order: {
          provider: { id: 'provider-1' },
          items: [{ id: 'item-1', quantity: { count: 1 } }],
        }
      }
    };
  }
}
