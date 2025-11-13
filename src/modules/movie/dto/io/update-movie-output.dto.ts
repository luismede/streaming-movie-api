export class UpdateMovieOutputDTO {
  id: number;
  nome: string;
  descricao?: string | null;
  ano: number;
  imagem?: string | null;
  link?: string | null;
  categoria: string;
}
