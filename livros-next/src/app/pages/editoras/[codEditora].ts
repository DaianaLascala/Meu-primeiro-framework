import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../classes/controle/ControleEditora';
import { Editora } from '../../classes/modelo/Editora'; 

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const codEditora = Number(req.query.codEditora);

            const editoras: Editora[] = [
                { codEditora: 1, nome: 'Editora A' },
                { codEditora: 2, nome: 'Editora B' },
                { codEditora: 3, nome: 'Editora C' }
            ];

            const controleEditora = new ControleEditora();

            const nomeEditora = controleEditora.getNomeEditora(codEditora);

            res.status(200).json({ nomeEditora });
        } else {
            res.status(405).end();
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
};