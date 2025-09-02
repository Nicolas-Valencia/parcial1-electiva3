import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { RefundPaymentDto } from '../dto/refund-payment.dto';

@Injectable()
export class PaymentsService {

  async findAll() {
    return {
      message: 'Pago obtenido (simulación)',
    };
  }

  async create(dto: CreatePaymentDto) {
    return {
      message: 'Pago creado (simulación)',
      data: dto,
    }
  }

  async findOne(id: string) {
    return {
      message: `Pago ${id} obtenido (simulación)`,
    };
  }

  async capture(id: string) {
    return {
      message: `Pago ${id} capturado (simulación)`,
    };
  }

  async refund(id: string, dto: RefundPaymentDto) {
    return {
      message: `Pago ${id} reembolsado (simulación)`,
      data: dto,
    };
  }

  async remove(id: string) {
    return {
      message: `Pago ${id} eliminado (simulación)`
    }
  }
}
