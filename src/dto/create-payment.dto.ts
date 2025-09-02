import { ApiProperty} from "@nestjs/swagger";

export class CreatePaymentDto {
  
  @ApiProperty({ example: 15000, description: 'Monto en centavos' })
  amount: number;

  @ApiProperty({ example: 'Corte de cabello' })
  description?: string;

  @ApiProperty({ example: 'Email del cliente' })
  customerEmail?: string;
  
}
