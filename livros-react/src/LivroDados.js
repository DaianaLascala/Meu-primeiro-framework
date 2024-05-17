import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from './ControleLivros'; 
import ControleEditora from './ControleEditora'; 

// Instanciar os controladores
const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  // Passo 3: Definir as propriedades de estado
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);

  // Passo 4: Adicionar o hook useNavigate
  const navigate = useNavigate();

  // Obter as opções de editoras
  const opcoesEditoras = controleEditora.getEditoras();
  const opcoes = opcoesEditoras?.map(editora => ({
    value: editora.codEditora,
    text: editora.nome
  }));

  // Método para tratar a mudança na seleção da combo
  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  // Método para incluir um novo livro
  const incluir = (event) => {
    event.preventDefault();
    const novoLivro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora
    };
    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main>
      <h1>Incluir Novo Livro</h1>
      <form onSubmit={incluir}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label>Resumo:</label>
          <textarea
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div>
          <label>Autores (um por linha):</label>
          <textarea
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
        </div>
        <div>
          <label>Editora:</label>
          <select value={codEditora} onChange={tratarCombo}>
            {opcoes?.map(opcao => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Incluir</button>
        </div>
      </form>
    </main>
  );
};

export default LivroDados;
