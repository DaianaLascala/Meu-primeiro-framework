import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
    { codigo: 1, codEditora: 101, titulo: 'Livro A', resumo: 'Resumo do Livro A', autores: ['Autor 1', 'Autor 2'] },
    { codigo: 2, codEditora: 102, titulo: 'Livro B', resumo: 'Resumo do Livro B', autores: ['Autor 3'] },
    { codigo: 3, codEditora: 103, titulo: 'Livro C', resumo: 'Resumo do Livro C', autores: ['Autor 4', 'Autor 5'] }
].map(livro => new Livro(livro.codigo, livro.codEditora, livro.titulo, livro.resumo, livro.autores));

class ControleLivro {
    private livros: Array<Livro>;

    constructor(livros: Array<Livro>) {
        this.livros = livros;
    }

        obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
        livro.codigo = novoCodigo;
        this.livros.push(livro);
    }

        excluir(codigo: number): void {
        const indice = this.livros.findIndex(livro => livro.codigo === codigo);
        if (indice !== -1) {
            this.livros.splice(indice, 1);
        }
    }
}

export default ControleLivro;
