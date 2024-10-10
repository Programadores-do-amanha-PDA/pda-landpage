"use client";
import { useState } from "react";
import { Input } from "@headlessui/react";
import clsx from "clsx";

import { Student } from "@/app/api/student/_studentModel";

import { Column, Layout, Link, Row, Text } from "@/common/components";
import { ListBox } from "@/common/components/Selectors";

import {
  DocumentTextIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Card from "./Card";
import EmptyCard from "./EmptyCard";

const StudentsCardsContainer = ({
  students,
  loading,
}: {
  students: Student[];
  loading: boolean | null;
}) => {
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
    <Row className="justify-center p-6 md:p-10 !py-0 h-full !items-start w-full overflow-x-hidden relative overflow-hidden">
      <Layout className="w-full h-full max-w-7xl flex-col !items-center !justify-start overflow-hidden">
        <Column className="dark:bg-primary-700 bg-primary-500 w-full h-max md:h-max rounded-xl p-4 items-start md:items-center justify-between md:flex-row flex-wrap gap-4 sticky top-0 inset-x-0 z-10">
          <Row className="h-10 w-36 items-center gap-2 relative">
            <FunnelIcon className="size-5 stroke-2" />
            <ListBox
              key={"listbox"}
              itens={technologies}
              selectedItems={filterSelected}
              setSelectedItems={handleSetFilterSelected}
              anchor="right start"
            />
          </Row>

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

          <Link
            className="font-semibold text-gray-900 cursor-pointer dark:text-gray-50 flex flex-row gap-4 items-center justify-center w-full md:w-max h-10 p-1 px-2 rounded-xl border-2 border-gray-900/35  dark:border-gray-50/35 dark:hover:border-gray-50/80 hover:border-gray-900/80"
            href=""
          >
            <Text className="">Saiba Mais</Text>
            <DocumentTextIcon className="size-4 -rotate-12 stroke-2" />
          </Link>
        </Column>

        <Column className="w-full h-max gap-6 px-2 py-10 md:flex-row md:flex-wrap justify-evenly overflow-x-auto">
          {loading || loading === null
            ? Array(9)
                .fill(0)
                .map((_, i) => <EmptyCard key={i} />)
            : studentFilter.map((student, i) => (
                <Card student={student} key={i} />
              ))}
        </Column>
      </Layout>
    </Row>
  );
};

export default StudentsCardsContainer;
