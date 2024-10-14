import { Query } from "appwrite";
import { databases } from "../lib/appwrite";
import { PizzaModel } from "../models/pizzamodel";

export async function getEvents() {

    const { documents } = await databases.listDocuments(
        process.env.NEXT_APPWRITE_DATABASE_ID,
        process.env.NEXT_APPWRITE_COLLECTION_PIZZA_ID,
        [
            Query.limit(5), // Limit the results to 5 documents
            Query.orderDesc('$createdAt') // Sort by creation date in descending order
        ]
    );

    return {
        pizzas: documents.map((document) => {
            const pizza: PizzaModel = {
                $id: document.$id,
                title: document.title,
                description: document.description,
                price: document.price,
                image: document.image,
                pricediscount: document.pricediscount,
            }
            return pizza;
        })
    }
}

