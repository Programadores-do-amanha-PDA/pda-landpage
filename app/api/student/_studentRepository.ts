import { connectToDatabase } from "../infra/mongodb/connector";
import { Student } from "./_studentModel";

const collectionName = "students";

export const getAllStudents = async (): Promise<Student[]> => {
  return new Promise(async (resolve) => {
    const databaseConnector = await connectToDatabase();

    const collection = databaseConnector.collection<Student>(collectionName);

    const student = await collection.find().toArray();

    if (!student) {
      throw new Error(`Students not found`);
    }

    return resolve(student);
  });
};

export const insertStudent = async (student: Student): Promise<void> => {
  return new Promise(async (resolve) => {
    const databaseConnector = await connectToDatabase();

    const collection = databaseConnector.collection<Student>(collectionName);

    await collection.insertOne(student);

    return resolve();
  });
};

export const getStudentByEmail = async (
  email: String
): Promise<Student | null> => {
  return new Promise(async (resolve) => {
    const databaseConnector = await connectToDatabase();

    const collection = databaseConnector.collection<Student>(collectionName);

    const student = await collection.findOne({ email: email });

    return resolve(student);
  });
};
