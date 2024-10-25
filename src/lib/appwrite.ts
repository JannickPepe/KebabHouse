import { Account, Client, Databases, } from "appwrite";

export const client = new Client();
export const databases = new Databases(client);
export const account = new Account(client)


client
    .setEndpoint(process.env.NEXT_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_APPWRITE_PROJECT)

