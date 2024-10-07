import { connectToDatabase } from "../infra/mongodb/connector";
import { Student } from "./_studentModel";

const colllectionName = "students";

export const getAllStudents = async (): Promise<Student[]> => {
  return new Promise(async (resolve) => {
    const databaseConnector = await connectToDatabase();

    const collection = databaseConnector.collection<Student>(colllectionName);

    const student = await collection.find().toArray();

    if (!student) {
      throw new Error(`Students not found`);
    }

    return resolve(student);
  });
};
