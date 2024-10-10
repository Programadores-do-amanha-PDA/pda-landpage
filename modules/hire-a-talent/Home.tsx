"use client";
import { Column, Header, Image, InternalLink, Text } from "@/common/components";
import StudentsCards from "./StudentsCardsContainer";
import { Student } from "@/app/api/student/_studentModel";
import { useEffect, useState } from "react";
import { getStudents } from "@/hooks/getStudents";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const data = await getStudents("/student");
      setStudents(data);
      setLoading(false);
    };

    fetchStudents();
  }, []);

  return (
    <Column className="flex w-full h-screen items-center justify-center md:justify-start bg-gray-50 dark:bg-secondary-900 relative">
      <Header />

      {students.length === 0 && !loading && loading !== null ? (
        <Column className="w-full h-full justify-center gap-4 items-center">
          <Image
            width={200}
            height={200}
            src="/assets/empty_states/noTalents.svg"
            alt=""
            className="size-72 md:size-96"
          />
          <Text className="font-bold text-lg text-center">
            Estamos atualizando o banco de Talentos!
            <br />
            Volte mais tarde!
          </Text>
          <InternalLink
            className="font-semibold text-gray-900 cursor-pointer dark:text-gray-50 flex flex-row flex-nowrap gap-4 items-center justify-center bg-primary-500/55 w-max p-4 py-2 rounded-xl hover:bg-primary-500/75"
            href="/"
          >
            <ArrowLeftIcon className="size-4 rotate-12" />
            <Text className="">Voltar a tela inicial</Text>
          </InternalLink>
        </Column>
      ) : (
        <StudentsCards students={students} loading={loading} />
      )}
    </Column>
  );
};

export default Home;
