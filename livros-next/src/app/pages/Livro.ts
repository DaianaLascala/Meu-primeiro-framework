class Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
  obterLivros: any;
  incluir: any;

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
export default Livro;
