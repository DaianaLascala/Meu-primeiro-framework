import { Editora } from '../modelo/Editora';

// Definindo o array de editoras
const editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' }
];

// Criando a classe ControleEditora com os métodos solicitados
class ControleEditora {
    private editoras: Array<Editora>;

    constructor(editoras: Array<Editora>) {
        this.editoras = editoras;
    }

    // Método que retorna todas as editoras
    getEditoras(): Array<Editora> {
        return this.editoras;
    }

    // Método que retorna o nome da editora dado um código
    getNomeEditora(codEditora: number): string | undefined {
        const editora = this.editoras.find(editora => editora.codEditora === codEditora);
        return editora ? editora.nome : undefined;
    }
}

// Instanciação do controle de editoras
const controleEditora = new ControleEditora(editoras);

// Exemplos de uso dos métodos
console.log(controleEditora.getEditoras()); // Exibe todas as editoras
console.log(controleEditora.getNomeEditora(1)); // Exibe "Editora A"
console.log(controleEditora.getNomeEditora(4)); // Exibe undefined, pois não existe editora com codEditora 4