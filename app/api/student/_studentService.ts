import { Student } from "./_studentModel";
import {
  getAllStudents,
  getStudentByEmail,
  insertStudent,
} from "./_studentRepository";
import md5 from "md5";

export const getStudents = async (): Promise<Student[] | null> => {
  return new Promise(async (resolve) => {
    const allStudents = await getAllStudents();

    if (!allStudents) {
      resolve(null);
      return;
    }

    const students: Student[] = allStudents.map(
      ({ _id, email, mobile, createdAt, ...rest }) => rest
    );
    resolve(students);
  });
};

export const addStudent = async (student: Student): Promise<Student> => {
  return new Promise(async (resolve, reject) => {
    if (!student.email) {
      throw new Error("Email is required");
    }

    const studentExists = await getStudentByEmail(student.email);

    if (studentExists) {
      resolve(student);
      return;
    }

    student.avatar = makeGravatarUrl(student.email);
    student.createdAt = new Date();

    await insertStudent(student);

    resolve(student);
  });
};

const makeGravatarUrl = (email: string) => {
  const address = String(email).trim().toLowerCase();

  const hash = md5(address);

  return `https://www.gravatar.com/avatar/${hash}`;
};
