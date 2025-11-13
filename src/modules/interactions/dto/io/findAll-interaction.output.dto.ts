export class FindAllInteractionOutputDTO {
  data: Array<{
    id: number;
    tipo: string;
    nota?: number | null;
    data?: Date | null;
    idFilme: number;
    idUsuario: number;
  }>;
}
