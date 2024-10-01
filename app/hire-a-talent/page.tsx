// "use client";

// import { Student } from "../api/student/_studentModel";
// import Home from "@/modules/students/Home";
// import { getRandomStudent } from "../api/student/_studentService";

// export interface slugProps {
//   student: Student;
// }

// export default async function SupportAStudent() {
//   const student = await getRandomStudent("pda@programadoresdoamanha.com.br");

//   if (!student) {
//     throw new Error("Student not found");
//   }

//   return <Home student={student} />;
// }

export { default } from "@hire-a-talent/Home";
