import { IsOptional, MaxLength, Min, IsDate, IsNumber } from 'class-validator';

export class CreateInteractionInputDTO {
  @MaxLength(50, {
    message: 'O tipo da interação deve ter no máximo 50 caracteres',
  })
  tipo: string;

  @Min(1, {
    message: 'A nota da interação deve ser no mínimo 1',
  })
  @IsOptional()
  nota?: number | null;

  @IsDate()
  @IsOptional()
  data?: Date | null;

  @IsNumber()
  idFilme: number;

  @IsNumber()
  idUsuario: number;
}
