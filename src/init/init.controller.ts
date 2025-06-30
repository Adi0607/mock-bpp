import { Controller, Post, Body } from '@nestjs/common';

@Controller('init')
export class InitController {
  @Post()
  handleInit(@Body() body: any) {
    return {
      context: body.context,
      message: {
        order: {
          id: 'order-123',
          provider: { id: 'provider-1' },
          items: [{ id: 'item-1', quantity: { count: 1 } }],
          billing: {
            name: 'Test Buyer',
            phone: '9999999999',
            email: 'test@example.com',
          }
        }
      }
    };
  }
}
