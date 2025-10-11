import { Client, Databases, ID, Query } from "react-native-appwrite";

// ✅ Make sure your `.env` variables start with EXPO_PUBLIC_ (Expo requirement)
const APPWRITE_PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const APPWRITE_DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const APPWRITE_COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // ✅ fixed typo "hhtps" → "https"
  .setProject(APPWRITE_PROJECT_ID);

const database = new Databases(client);

// ✅ Function to update or create search count
export const updateSearchCount = async (query: string, movie: any) => {
  try {
    // 1️⃣ Check if a document with the same search term exists
    const result = await database.listDocuments(
      APPWRITE_DATABASE_ID,
      APPWRITE_COLLECTION_ID,
      [Query.equal("searchterm", query)]
    );

    // 2️⃣ If document exists → update count
    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];

      await database.updateDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTION_ID,
        existingMovie.$id,
        {
          count: (existingMovie.count || 0) + 1, // handle missing count safely
        }
      );
    } 
    // 3️⃣ Else → create a new document
    else {
      await database.createDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTION_ID,
        ID.unique(),
        {
          searchterm: query,
          movie_id: movie.id,
          count: 1,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }
      );
    }
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};
