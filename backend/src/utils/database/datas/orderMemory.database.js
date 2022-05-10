export const orderMemoryDatabase = [
    {
        pedidos: [
            {
                id: '1',
                status: 'Em andamento',
                data: '26/04/2022',
                totalValue: 41.10,
                products: [
                    {
                        id: '2',
                        name: 'jeans bonito',
                        value: 20.55,
                        quant: 2,
                    },
                ],
            },
            {
                id: '2',
                status: 'Cancelado',
                data: '28/04/2022',
                totalValue: 44.10,
                products: [
                    {
                        id: '1',
                        name: 'jeans bonito',
                        value: 20.55,
                        quant: 1,
                    },
                ],
            },
        ],
        userId: 'teste',
    },
];