import { IsOptional, MaxLength, Min, IsDate } from 'class-validator';

export class UpdateInteractionInputDTO {
  id: number;

  @MaxLength(50, {
    message: 'O tipo da interação deve ter no máximo 50 caracteres',
  })
  tipo?: string | null;

  @Min(1, {
    message: 'A nota da interação deve ser no mínimo 1',
  })
  @IsOptional()
  nota?: number | null;

  @IsDate()
  @IsOptional()
  data?: Date | null;
}
