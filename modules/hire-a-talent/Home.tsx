"use client";
import { Column, Header } from "@/common/components";
import StudentsCards from "./StudentsCardsContainer";
import { Student } from "@/app/api/student/_studentModel";
import { useEffect, useState } from "react";
import { getStudents } from "@/hooks/getStudents";

const Home = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    getStudents("/student").then((response) => {
      setStudents(response);
    });
  }, []);

  if (!students) {
    return <div>Loading...</div>;
  }

  return (
    <Column className="flex w-full h-screen items-center justify-center md:justify-start bg-gray-50 dark:bg-secondary-900 relative">
      <Header />

      <StudentsCards students={students} />
    </Column>
  );
};

export default Home;
