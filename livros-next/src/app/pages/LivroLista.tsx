import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Menu from '../componentes/Menu';
import styles from '../styles/Home.module.css';
import LinhaLivro from '../componentes/LinhaLivro';
import { Livro } from './Livro';

const LivroLista: React.FC = () => {
  const baseURL = "http://localhost:3000/api/livros";
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    const obterLivros = async () => {
      try {
        const resposta = await fetch(baseURL);
        const dados = await resposta.json();
        setLivros(dados);
        setCarregado(true);
      } catch (error) {
        console.error("Erro ao obter livros:", error);
      }
    };

    obterLivros();
  }, []);

  const excluirLivro = async (codigo: number): Promise<boolean> => {
    try {
      const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      return resposta.ok;
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      return false;
    }
  };

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Livros</title>
      </Head>
      <Menu />
      <main>
        <h1>Lista de Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
              <th>Editora</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros?.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;