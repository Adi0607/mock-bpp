"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BppController = void 0;
// bpp.controller.ts placeholder
const common_1 = require("@nestjs/common");
const bpp_service_1 = require("./bpp.service");
let BppController = class BppController {
    constructor(bppService) {
        this.bppService = bppService;
    }
    handleSearch(body) {
        return this.bppService.onSearch(body);
    }
    handleSelect(body) {
        return this.bppService.onSelect(body);
    }
    handleInit(body) {
        return this.bppService.onInit(body);
    }
    handleConfirm(body) {
        return this.bppService.onConfirm(body);
    }
};
exports.BppController = BppController;
__decorate([
    (0, common_1.Post)('/search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BppController.prototype, "handleSearch", null);
__decorate([
    (0, common_1.Post)('/select'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BppController.prototype, "handleSelect", null);
__decorate([
    (0, common_1.Post)('/init'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BppController.prototype, "handleInit", null);
__decorate([
    (0, common_1.Post)('/confirm'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BppController.prototype, "handleConfirm", null);
exports.BppController = BppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [bpp_service_1.BppService])
], BppController);
