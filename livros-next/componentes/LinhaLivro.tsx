import React from "react";
import ControleEditora from "../classes/controle/ControleEditora";
import Livro from "../src/app/pages/Livro";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        {livro.titulo}
        <button
          className="btn btn-danger d-flex"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor: string, index: number) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

export default LinhaLivro;
