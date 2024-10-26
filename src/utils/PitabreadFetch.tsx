import { Query } from "appwrite";
import { databases } from "../lib/appwrite";
import { PitabreadModel } from "../models/pitabreadmodel";

export async function getEvents() {

    const { documents } = await databases.listDocuments(
        process.env.NEXT_APPWRITE_DATABASE_ID,
        process.env.NEXT_APPWRITE_COLLECTION_PITABREAD_ID,
        [
            Query.orderDesc('$createdAt') // Sort by creation date in descending order
        ]
    );

    return {
        pitabreads: documents.map((document) => {
            const pitabread: PitabreadModel = {
                $id: document.$id,
                title: document.title,
                description: document.description,
                price: document.price,
                image: document.image,
                pricediscount: document.pricediscount,
            }
            return pitabread;
        })
    }
}

