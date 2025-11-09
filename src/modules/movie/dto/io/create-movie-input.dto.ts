import { IsOptional, MinLength } from 'class-validator';

export class CreateMovieInputDTO {
  @MinLength(1, { message: 'O nome do filme deve ter no mínimo 1 caracter' })
  nome: string;

  @MinLength(10, {
    message: 'A descrição do filme de ter no mínimo 10 caracteres',
  })
  @IsOptional()
  descricao?: string | null;

  ano: number;

  @IsOptional()
  imagem?: string | null;

  @IsOptional()
  link?: string | null;
}
