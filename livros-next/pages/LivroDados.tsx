import React, { useState } from 'react';
import Head from 'next/head';
import Menu from '../componentes/Menu';
import styles from '../styles/Home.module.css';
import ControleEditora from '../classes/controle/ControleEditora';
import { useRouter } from 'next/router';
import { Livro }  from  './Livro';



const LivroDados: React.FC = () => {
  const controleEditora = new ControleEditora();
  const baseURL = "http://localhost:3000/api/livros";
  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(0);
  const opcoes = controleEditora.getEditoras().map(editora => ({ value: editora.codEditora, text: editora.nome }));
  const navigate = useRouter().push;

  const incluirLivro = async (livro: Livro): Promise<boolean> => {
    try {
      const resposta = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(livro)
      });
      return resposta.ok;
    } catch (error) {
      console.error("Erro ao incluir livro:", error);
      return false;
    }
  };

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(parseInt(event.target.value));
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const autoresArray = autores.split('\n');
    const livro: Livro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autoresArray,
      codEditora: codEditora
    };
    const sucesso = await incluirLivro(livro);
    if (sucesso) {
      navigate('/LivroLista');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Adicionar Livro</title>
      </Head>
      <Menu />
      <main>
        <h1>Adicionar Livro</h1>
        <form onSubmit={incluir}>
          <div>
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" value={titulo} onChange={(event) => setTitulo(event.target.value)} />
          </div>
          <div>
            <label htmlFor="resumo">Resumo:</label>
            <textarea id="resumo" value={resumo} onChange={(event) => setResumo(event.target.value)} />
          </div>
          <div>
            <label htmlFor="autores">Autores:</label>
            <textarea id="autores" value={autores} onChange={(event) => setAutores(event.target.value)} />
          </div>
          <div>
            <label htmlFor="editora">Editora:</label>
            <select id="editora" value={codEditora} onChange={tratarCombo}>
              {opcoes?.map(opcao => (
                <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
              ))}
            </select>
          </div>
          <button type="submit">Adicionar Livro</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;