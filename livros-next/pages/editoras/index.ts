import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../classes/controle/ControleEditora';
import { Editora } from '../../classes/modelo/Editora'; 


const editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' }
];


const controleEditora = new ControleEditora();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const editoras = await controleEditora.getEditoras();
            res.status(200).json(editoras);
        } else {
            res.status(405).end('Método não permitido');
        }
    } catch (error) {
        res.status(500).end('Erro interno do servidor');
    }
};