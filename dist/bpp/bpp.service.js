"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BppService = void 0;
// bpp.service.ts placeholder
const common_1 = require("@nestjs/common");
let BppService = class BppService {
    createContext(base, action) {
        return Object.assign(Object.assign({}, base), { action: `on_${action}`, timestamp: new Date().toISOString() });
    }
    onSearch(body) {
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
    onSelect(body) {
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
    onInit(body) {
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
    onConfirm(body) {
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
};
exports.BppService = BppService;
exports.BppService = BppService = __decorate([
    (0, common_1.Injectable)()
], BppService);
