import { Client, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.NEXT_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_APPWRITE_PROJECT)

const storage = new Storage(client);

export { storage };