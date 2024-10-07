import { Student } from "../api/student/_studentModel";
import Home from "@hire-a-talent/Home";
import { getStudents } from "../api/student/_studentService";

export interface slugProps {
  student: Student[];
}

export default async function SupportAStudent() {
  const student = await getStudents();

  if (!student) {
    throw new Error("Student not found");
  }

  return <Home students={student} />;
}
