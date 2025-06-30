import { Controller, Post, Body } from '@nestjs/common';

@Controller('search')
export class SearchController {
  @Post()
  handleSearch(@Body() body: any) {
    return {
      context: body.context,
      responses: [
        {
          context: body.context,
          message: {
            catalog: {
              providers: [
                {
                  id: 'provider-1',
                  descriptor: { name: 'Mock Store' },
                  items: [
                    {
                      id: 'item-1',
                      descriptor: { name: 'Mock Product' },
                      price: { currency: 'INR', value: '100' }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    };
  }
}
