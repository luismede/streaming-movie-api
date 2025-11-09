export class FindByUserInteractionOutputDTO {
  data: Array<{
    tipo: string;
    nota?: number | null;
    data?: Date | null;
    idFilme: number;
    idUsuario: number;
  }>
}
