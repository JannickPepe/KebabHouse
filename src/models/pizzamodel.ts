export interface PizzaModel {
    $id: string;
    title: string;
    description: string;
    price: number;
    image?: string;
    pricediscount: number;
}