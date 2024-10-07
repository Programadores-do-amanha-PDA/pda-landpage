import { MongoClient, Db, ServerApiVersion } from "mongodb";

let client: MongoClient | null;
let db: Db | null;

export const connectToDatabase = async (): Promise<Db> => {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_PDA_URI || "", {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    db = client.db("pda");
  }
  if (!db) {
    throw new Error("Failed to connect to database");
  }
  return db;
};
