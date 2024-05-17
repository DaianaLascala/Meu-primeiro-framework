import React, { useState, useEffect } from 'react';
import ControleLivro from './ControleLivros'; 
import ControleEditora from './ControleEditora'; 


const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();


const LinhaLivro = (props) => {
    const { livro, excluir } = props;

 
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    
    return (
        <tr>
            <td>
                {livro.titulo}
                {/* e) Adicionar um botão de exclusão */}
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{nomeEditora}</td>
            <td>{livro.resumo}</td>
            {/* f) Exibir os autores como uma lista HTML */}
            <td>
                <ul>
                    {livro?.autores?.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};


const LivroLista = () => {

    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    
    useEffect(() => {
        if (!carregado) {
            const livrosObtidos = controleLivro.obterLivros();
            setLivros(livrosObtidos);
            setCarregado(true);
        }
    }, [carregado]);


    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false); 
    };

    return (
        <main>
            <h1>Lista de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Editora</th>
                        <th>Resumo</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {/* l) Utilizar map para gerar as linhas da tabela */}
                    {livros?.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;