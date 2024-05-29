export type TLivro = {
    id: string;
    nome: string;
    resumo: string;
    sumario: string;
    preco: number;
    paginas: number;
    ISBN: string;
    dataPublicacao: string;
    categoria: string;
    autor: string;    
}

export type TCart = {
    itemid: string;
    qtde: number;
}