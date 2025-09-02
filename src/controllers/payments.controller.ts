import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PaymentsService } from '../services/payments.service';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { RefundPaymentDto } from '../dto/refund-payment.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los pagos' })
  findAll() {
    return this.paymentsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crear un pago simulado' })
  //@ApiResponse({ status: 201, description: 'Pago creado con éxito (simulación)' })
  create(@Body() dto: CreatePaymentDto) {
    return this.paymentsService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar un pago' })
  //@ApiResponse({ status: 200, description: 'Pago encontrado (simulación)' })
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(id);
  }

  @Post(':id/capture')
  @ApiOperation({ summary: 'Capturar un pago simulado' })
  capture(@Param('id') id: string) {
    return this.paymentsService.capture(id);
  }

  @Post(':id/refund')
  @ApiOperation({ summary: 'Reembolsar un pago simulado' })
  refund(@Param('id') id: string, @Body() dto: RefundPaymentDto) {
    return this.paymentsService.refund(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un pago simulado' })
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(id);
  }
}
