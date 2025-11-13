import { IsOptional, Max, Min, MinLength, MaxLength } from 'class-validator';

export class UpdateMovieInputDTO {
  id: number;

  @MinLength(1, { message: 'O nome do filme deve ter no mínimo 1 caracter' })
  @IsOptional()
  nome?: string;

  @MinLength(10, {
    message: 'A descrição do filme de ter no mínimo 10 caracteres',
  })
  @IsOptional()
  descricao?: string;

  @Max(new Date(Date.now()).getFullYear())
  @IsOptional()
  ano?: number;

  @IsOptional()
  imagem?: string;

  @IsOptional()
  link?: string;

  @MaxLength(255, {
    message: 'O número máximo de caracteres permitido é 255'
  })
  categoria: string;

}
