import { Controller, Post, Body } from '@nestjs/common';

@Controller('confirm')
export class ConfirmController {
  @Post()
  handleConfirm(@Body() body: any) {
    return {
      context: body.context,
      message: {
        order: {
          id: 'order-123',
          status: 'CONFIRMED',
        }
      }
    };
  }
}
