export class FindAllMovieOutputDTO {
  data: Array<{
    id: number;
    nome: string;
    descricao?: string | null;
    ano: number;
    imagem?: string | null;
    link?: string | null;
  }>;
}
