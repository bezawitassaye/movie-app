import { Client, Databases } from "react-native-appwrite";

const APPWRITE_PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const APPWRITE_DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const APPWRITE_COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") 
  .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);


export const updateSearchCount = async(query:string,movie:Movie)=>{

}