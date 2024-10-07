"use client";
import { Column, Image, Layout, Link, Row, Text } from "@/common/components";
import {
  ArrowRightIcon,
  DocumentTextIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Input } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { ListBox } from "@/common/components/Selectors";
import { Student } from "@/app/api/student/_studentModel";

const StudentsCardsContainer = ({ students }: { students: Student[] }) => {
  if (!students) {
    throw new Error("Students prop is required");
  }

  const [search, setSearch] = useState("");
  const uniqueTechnologies = Array.from(
    new Set(students.flatMap((s) => s.technologies))
  );
  const technologies = ["Todas", ...uniqueTechnologies];
  const [filterSelected, setFilterSelected] = useState([technologies[0]]);

  const handleSetFilterSelected = (items: string[]) => {
    if (items[items.length - 1] === technologies[0]) {
      setFilterSelected([technologies[0]]);
    } else if (
      items[items.length - 1] !== technologies[0] &&
      items.length > 0
    ) {
      setFilterSelected(items.filter((i) => i !== technologies[0]));
    } else if (items.length === 0) {
      setFilterSelected([technologies[0]]);
    }
  };

  const studentFilter = students.filter((student) => {
    if (search) {
      if (filterSelected.length === 1 && filterSelected[0] === "Todas") {
        return student.name.toLowerCase().includes(search.toLowerCase());
      } else if (filterSelected.length > 0) {
        return (
          student.name.toLowerCase().includes(search.toLowerCase()) &&
          filterSelected.some((tech) => student.technologies.includes(tech))
        );
      } else {
        return false;
      }
    } else {
      if (filterSelected.length === 1 && filterSelected[0] === "Todas") {
        return true;
      } else if (filterSelected.length > 0) {
        return filterSelected.some((tech) =>
          student.technologies.includes(tech)
        );
      } else {
        return false;
      }
    }
  });

  return (
    <Row className="justify-center p-6 md:p-10 h-full !items-start w-full overflow-x-hidden relative overflow-hidden">
      <Layout className="w-full h-full max-w-7xl flex-col !items-center !justify-start overflow-x-auto">
        <Column className="dark:bg-primary-700 bg-primary-500 w-full h-max md:h-max rounded-xl p-4 items-start md:items-center justify-between md:flex-row flex-wrap gap-4 sticky top-0 inset-x-0 z-10">
          <Text className="text-xl w-full mb-10 text-gray-900 dark:text-gray-50 sm:text-2xl text-center font-dela-gothic uppercase">
            Contrate um Talento
          </Text>
          <Row className="h-10 w-full md:w-1/3 items-center justify-center gap-2">
            <MagnifyingGlassIcon className="size-5 stroke-2" />
            <Input
              className={clsx(
                " block w-full rounded-xl shadow-sm border-none bg-gray-700/35 dark:bg-gray-50/35 py-1.5 px-3 text-sm/6 text-gray-50 dark:text-gray-900 placeholder-gray-50 dark:placeholder-gray-900",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-50/25 font-ibm-plex-sans"
              )}
              placeholder="Procurando por alguém?"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Row>
          <Row className="h-10 w-52 items-center justify-center gap-2 relative">
            <FunnelIcon className="size-5 stroke-2" />
            <ListBox
              itens={technologies}
              selectedItems={filterSelected}
              setSelectedItems={handleSetFilterSelected}
            />
          </Row>
          <Link
            className="font-semibold text-gray-900 cursor-pointer dark:text-gray-50 flex flex-row gap-4 items-center justify-center w-full md:w-max h-10 p-1 px-2 rounded-xl border-2 border-gray-900/35  dark:border-gray-50/35 dark:hover:border-gray-50/80 hover:border-gray-900/80"
            href=""
          >
            <Text className="">Contrate Diretamente Conosco</Text>
            <DocumentTextIcon className="size-4 -rotate-12 stroke-2" />
          </Link>
        </Column>

        <Column className="w-full h-max gap-6 px-2 pt-10 md:flex-row md:flex-wrap justify-evenly">
          {studentFilter.map((student, i) => (
            <Column
              key={i}
              className="w-full lg:max-w-96 lg:h-max max-h-50 bg-gray-100 dark:bg-gray-50/30 p-2 rounded-2xl gap-6 shadow-md"
            >
              <Row className="w-full gap-4">
                <Image
                  className="rounded-xl w-28 object-cover border-0"
                  src={student.avatar ?? ""}
                  width={150}
                  height={300}
                  alt=""
                />
                <Column className="gap-4">
                  <Text className="font-bold text-lg">{student.name}</Text>
                  <Column className="gap-3">
                    <Text className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                      Tecnologias:
                    </Text>
                    <Row className="flex-wrap gap-2 h-14">
                      {student.technologies.map((technology, j) => (
                        <Text
                          key={j}
                          className="w-max h-max px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 text-sm text-gray-900 dark:text-gray-50"
                        >
                          {technology}
                        </Text>
                      ))}
                    </Row>
                  </Column>
                </Column>
              </Row>
              <Column className="gap-4 md:flex-row">
                <Row className="gap-2 w-full justify-between">
                  <Link
                    className="font-semibold text-gray-900 cursor-pointer dark:text-gray-50 flex flex-row flex-nowrap gap-4 items-center justify-center bg-primary-500/55 w-full p-1 px-2 rounded-xl hover:bg-primary-500/75"
                    href={student.linkedin}
                  >
                    <Text className="">LinkedIn</Text>
                    <ArrowRightIcon className="size-4 -rotate-12" />
                  </Link>
                  <Link
                    className="font-semibold text-gray-900 cursor-pointer dark:text-gray-50 flex flex-row flex-nowrap gap-4 items-center justify-center w-full p-1 px-2 rounded-xl dark:hover:bg-gray-50/35 hover:bg-gray-50"
                    href={student.github}
                  >
                    <Text className="">Github</Text>
                    <ArrowRightIcon className="size-4 -rotate-12" />
                  </Link>
                </Row>
              </Column>
            </Column>
          ))}
        </Column>
      </Layout>
    </Row>
  );
};

export default StudentsCardsContainer;
