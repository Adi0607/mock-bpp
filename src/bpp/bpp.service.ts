// bpp.service.ts placeholder
import { Injectable } from '@nestjs/common';

@Injectable()
export class BppService {
  private createContext(base: any, action: string) {
    return {
      ...base,
      action: `on_${action}`,
      timestamp: new Date().toISOString(),
    };
  }

  onSearch(body: any) {
    const ctx = this.createContext(body.context, 'search');
    return {
      context: ctx,
      message: {
        catalog: {
          "bpp/descriptor": { name: 'Mock BPP Retail' },
          "bpp/providers": [
            {
              id: 'provider-1',
              descriptor: { name: 'Mock Retail Store' },
              items: [
                {
                  id: 'item-1',
                  descriptor: { name: 'Demo Product 1' },
                  price: { currency: 'INR', value: '250.00' },
                  fulfillment_id: 'fulfillment-1'
                }
              ],
              fulfillments: [{ id: 'fulfillment-1', type: 'Delivery' }]
            }
          ]
        }
      }
    };
  }

  onSelect(body: any) {
    const ctx = this.createContext(body.context, 'select');
    return {
      context: ctx,
      message: {
        order: {
          provider: { id: 'provider-1' },
          items: [
            {
              id: 'item-1',
              quantity: { count: 1 },
              price: { currency: 'INR', value: '250.00' }
            }
          ],
          fulfillments: [{ id: 'fulfillment-1' }],
          quote: {
            price: { currency: 'INR', value: '250.00' },
            breakup: [{ title: 'Product', price: { value: '250.00', currency: 'INR' } }]
          }
        }
      }
    };
  }

  onInit(body: any) {
    const ctx = this.createContext(body.context, 'init');
    return {
      context: ctx,
      message: {
        order: {
          id: 'order-1234',
          provider: { id: 'provider-1' },
          items: body.message.order.items,
          fulfillments: body.message.order.fulfillments,
          billing: body.message.order.billing,
          quote: {
            price: { currency: 'INR', value: '250.00' }
          },
          payment: body.message.order.payment
        }
      }
    };
  }

  onConfirm(body: any) {
    const ctx = this.createContext(body.context, 'confirm');
    return {
      context: ctx,
      message: {
        order: {
          id: 'order-1234',
          provider: { id: 'provider-1' },
          items: body.message.order.items,
          fulfillments: body.message.order.fulfillments,
          billing: body.message.order.billing,
          quote: {
            price: { currency: 'INR', value: '250.00' }
          },
          payment: body.message.order.payment,
          status: 'confirmed'
        }
      }
    };
  }
}
