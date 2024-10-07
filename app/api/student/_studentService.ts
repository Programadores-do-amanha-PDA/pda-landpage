import { Student } from "./_studentModel";
import { getAllStudents } from "./_studentRepository";

export const getStudents = async (): Promise<Student[] | null> => {
  return new Promise(async (resolve) => {
    const allStudents = await getAllStudents();

    if (!allStudents) {
      resolve(null);
      return;
    }

    const students: Student[] = allStudents.map(
      ({ _id, email, mobile, createdAt, events, ...rest }) => rest
    );
    resolve(students);
  });
};
