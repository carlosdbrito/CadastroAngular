export interface IProduto {
  id?: number;
  nomeProduto: string;
  codigoBarras: string;
  quantidade: number | null ;
  preco: number | null ;
}