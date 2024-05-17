import { NextApiRequest, NextApiResponse } from 'next';
import { livro } from '../../src/app/ControleLivros';
import bodyParser from 'body-parser';
import  Livro   from  '../../src/app/Livro';

let livros;
livros = [];
const ControleLivros = new Livro(1, 123, 'Título do Livro', 'Resumo do Livro', ['Autor 1', 'Autor 2']);


const jsonParser = bodyParser.json();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        jsonParser(req, res, async () => {
            if (req.method === 'GET') {
                const livros = ControleLivros.obterLivros();
                res.status(200).json(livros);
            } else if (req.method === 'POST') {
                const novoLivro = req.body;
                ControleLivros.incluir(novoLivro);
                res.status(200).json({ mensagem: 'Livro incluído com sucesso!' });
            } else {
                res.status(405).end('Método não permitido');
            }
        });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
};