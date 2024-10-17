export interface BurgerModel {
    $id: string;
    title: string;
    description: string;
    price: number;
    image?: string;
    pricediscount: number;
}