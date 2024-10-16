/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
    interface ProcessEnv {
        NEXT_APPWRITE_ENDPOINT: string;
        NEXT_APPWRITE_PROJECT: string;
        NEXT_APPWRITE_API_KEY: string;
        NEXT_APPWRITE_DATABASE_ID: string;
        NEXT_APPWRITE_COLLECTION_PIZZA_ID: string;
        NEXT_APPWRITE_COLLECTION_BURGER_ID: string;
        NEXT_APPWRITE_COLLECTION_PITABREAD_ID: string;
        NEXT_APPWRITE_COLLECTION_DURUM_ID: string;
        NEXT_APPWRITE_COLLECTION_WHOLEMENU_ID: string;
        NEXT_APPWRITE_STORAGE_ID: string;
        NEXT_APPWRITE_COLLECTION_EMAILS_ID: string;
        NEXT_APPWRITE_COLLECTION_RATING: string;
        NEXT_APPWRITE_COLLECTION_MENU_ID: string;
      // Add other variables as needed
      API_URL?: string; // Optional because it won't always exist
    }
}