import { databases } from "../lib/appwrite";
import { PizzaModel } from "../models/pizzamodel";

export async function getEvents() {

    const { documents } = await databases.listDocuments(
        process.env.NEXT_APPWRITE_DATABASE_ID,
        process.env.NEXT_APPWRITE_COLLECTION_PIZZA_ID
    );

    return {
        pizzas: documents.map((document) => {
            const pizza: PizzaModel = {
                $id: document.$id,
                title: document.title,
                description: document.description,
                price: document.price,
                pizzaimg: document.pizzaimg,
                pricediscount: document.pricediscount,
            }
            return pizza;
        })
    }
}

