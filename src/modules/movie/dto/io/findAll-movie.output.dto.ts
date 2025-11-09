export class FindAllMovieOutputDTO {
  data: Array<{
    nome: string;
    descricao?: string | null;
    ano: number;
    imagem?: string | null;
    link?: string | null;
  }>;
}
