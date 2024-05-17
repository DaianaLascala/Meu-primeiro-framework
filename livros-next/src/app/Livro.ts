export class Livro {
  incluir(novoLivro: any) {
    throw new Error("Método não implementado.");
  }
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
  obterLivros: any;

  constructor(
    codigo: number,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[]
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}

export type LivroType = {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
  obterLivros?: any;
};
