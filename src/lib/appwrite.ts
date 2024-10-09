import { Client, Databases, } from "appwrite";

export const client = new Client();
export const databases = new Databases(client);


client
    .setEndpoint(process.env.NEXT_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_APPWRITE_PROJECT)

