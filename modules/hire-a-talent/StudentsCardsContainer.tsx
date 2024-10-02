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
import { ComboBox } from "@/common/components/Selectors";

const students = [
  {
    name: "Karlla Doe",
    image: "/images/alumini/alumini1.jpg",
    technologies: ["Angular", "Vue"],
    linkedIn: "https://www.linkedin.com/in/johndoe/",
    github: "https://github.com/johndoe",
  },
  {
    name: "John Doe",
    image: "/images/alumini/alumini1.jpg",
    technologies: ["React", "Angular", "Vue"],
    linkedIn: "https://www.linkedin.com/in/johndoe/",
    github: "https://github.com/johndoe",
  },
  {
    name: "John Doe",
    image: "/images/alumini/alumini1.jpg",
    technologies: ["React", "Angular", "Vue"],
    linkedIn: "https://www.linkedin.com/in/johndoe/",
    github: "https://github.com/johndoe",
  },
  {
    name: "John Doe",
    image: "/images/alumini/alumini1.jpg",
    technologies: ["React", "Angular", "Vue"],
    linkedIn: "https://www.linkedin.com/in/johndoe/",
    github: "https://github.com/johndoe",
  },
];

const StudentsCardsContainer = () => {
  const [search, setSearch] = useState("");
  const [queryFilter, setQueryFilter] = useState("");
  const uniqueTechnologies = Array.from(
    new Set(students.flatMap((s) => s.technologies))
  );
  const technologies = ["Tecnologias", ...uniqueTechnologies];
  const [filterSelected, setFilterSelected] = useState<string | null>(
    technologies[0]
  );

  const studentFilter = students.filter((student) => {
    if (search) {
      if (filterSelected === "Tecnologias") {
        return student.name.toLowerCase().includes(search.toLowerCase());
      } else if (filterSelected !== null) {
        return (
          student.name.toLowerCase().includes(search.toLowerCase()) &&
          student.technologies.includes(filterSelected)
        );
      } else {
        return false;
      }
    } else {
      if (filterSelected === "Tecnologias") {
        return true;
      } else if (filterSelected !== null) {
        return student.technologies.includes(filterSelected);
      } else {
        return false;
      }
    }
  });

  return (
    <Row className="justify-center p-6 md:p-10 h-full !items-start w-full overflow-x-hidden relative overflow-hidden">
      <Layout className="w-full h-full max-w-7xl flex-col !items-start !justify-start overflow-x-auto">
        <Column className="bg-primary-700 w-full h-max md:h-max rounded-xl p-4 items-start md:items-center justify-between md:flex-row flex-wrap gap-4 sticky top-0 inset-x-0">
          <Row className="h-10 w-full md:w-1/3 items-center justify-center gap-2">
            <MagnifyingGlassIcon className="size-5 stroke-2" />
            <Input
              className={clsx(
                " block w-full rounded-xl shadow-sm border-none bg-gray-50/35 py-1.5 px-3 text-sm/6 text-gray-50 dark:text-gray-900 placeholder-gray-50 dark:placeholder-gray-900",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-50/25 font-ibm-plex-sans"
              )}
              placeholder="Procurando por alguém?"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Row>
          <Row className="h-10 w-52 items-center justify-center gap-2 relative">
            <FunnelIcon className="size-5 stroke-2" />
            <ComboBox
              item={filterSelected}
              itens={technologies}
              query={queryFilter}
              setItem={setFilterSelected}
              setQuery={setQueryFilter}
            />
          </Row>
          <Link
            className="font-semibold text-gray-900 cursor-pointer dark:text-gray-50 flex flex-row gap-4 items-center justify-center w-full md:w-max h-10 p-1 px-2 rounded-xl border-2 border-gray-50/35 hover:border-gray-50/80"
            href=""
          >
            <Text className="">Contrate diretamente conosco</Text>
            <DocumentTextIcon className="size-4 -rotate-12 stroke-2" />
          </Link>
        </Column>

        <Column className="w-full h-max gap-6 px-2 pt-10 md:flex-row md:flex-wrap">
          {studentFilter.map((student, i) => (
            <Column
              key={i}
              className="w-full lg:max-w-96 lg:h-max max-h-50 dark:bg-gray-50/30 p-2 rounded-2xl gap-6 shadow-md"
            >
              <Row className="w-full gap-4">
                <Image
                  className="rounded-xl w-28 object-cover border-0"
                  src={student.image}
                  width={300}
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
                    href={student.linkedIn}
                  >
                    <Text className="">LinkedIn</Text>
                    <ArrowRightIcon className="size-4 -rotate-12" />
                  </Link>
                  <Link
                    className="font-semibold text-gray-900 cursor-pointer dark:text-gray-50 flex flex-row flex-nowrap gap-4 items-center justify-center w-full p-1 px-2 rounded-xl hover:bg-gray-50/35"
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
