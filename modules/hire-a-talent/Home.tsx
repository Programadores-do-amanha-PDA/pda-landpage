"use client";

import { Suspense, useEffect, useState } from "react";
import {
  Column,
  Header,
  Image,
  InternalLink,
  PageViewComponent,
  Text,
} from "@/common/components";
import StudentsCards from "./StudentsCardsContainer";
import WannaSupportModal from "@forms/WannaSupportModal";

import { Student } from "@/app/api/student/_studentModel";
import { getStudents } from "@/hooks/getStudents";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";

const Home = () => {
  const t = useTranslations("hire-a-talent.emptyState");

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
            {t("start")}
            <br />
            {t("end")}
          </Text>
          <InternalLink
            className="font-semibold text-gray-900 cursor-pointer dark:text-gray-50 flex flex-row flex-nowrap gap-4 items-center justify-center bg-primary-500/55 w-max p-4 py-2 rounded-xl hover:bg-primary-500/75"
            href="/"
          >
            <ArrowLeftIcon className="size-4 rotate-12" />
            <Text className="">{t("button")}</Text>
          </InternalLink>
        </Column>
      ) : (
        <StudentsCards students={students} loading={loading} />
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <WannaSupportModal />
      </Suspense>

      <PageViewComponent pageName="Hire a Talent" />
    </Column>
  );
};

export default Home;
