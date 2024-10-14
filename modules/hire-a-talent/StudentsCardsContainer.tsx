"use client";
import { useState } from "react";
import { Input } from "@headlessui/react";
import clsx from "clsx";

import { Student } from "@/app/api/student/_studentModel";

import {
  Button,
  Column,
  Image,
  Layout,
  Link,
  Row,
  Text,
} from "@/common/components";
import { ListBox } from "@/common/components/Selectors";

import {
  EnvelopeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Card from "./Card";
import EmptyCard from "./EmptyCard";
import { Menu } from "@/common/components/DropdownMenu";
import HireUs from "./HireUs";

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
  const technologies = ["Tecnologias", ...uniqueTechnologies];

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
      if (
        filterSelected.length === 1 &&
        filterSelected[0] === technologies[0]
      ) {
        return student.name.toLowerCase().includes(search.toLowerCase());
      } else if (filterSelected.length > 0) {
        return (
          student.name.toLowerCase().includes(search.toLowerCase()) &&
          filterSelected.some((tech) => student?.technologies?.includes(tech))
        );
      } else {
        return false;
      }
    } else {
      if (
        filterSelected.length === 1 &&
        filterSelected[0] === technologies[0]
      ) {
        return true;
      } else if (
        filterSelected.length > 0 &&
        filterSelected[0] !== technologies[0]
      ) {
        return filterSelected.some((tech) =>
          student?.technologies?.includes(tech)
        );
      } else {
        return false;
      }
    }
  });

  const resetAllFilters = () => {
    setFilterSelected([technologies[0]]);
  };

  return (
    <Row className="justify-center p-4 md:p-10 !py-0 h-max !items-start w-full relative overflow-x-auto">
      <Layout className="w-full h-max max-w-7xl flex-col !items-center !justify-start">
        <Row className="dark:bg-primary-700 bg-primary-500 w-full h-max md:h-max rounded-xl !items-center !justify-center rounded-t-none px-6 py-2 fixed top-20 inset-x-0 z-10">
          <Row className="w-full max-w-7xl items-start md:items-center justify-between gap-4">
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
            <Row className="h-10 w-max items-center gap-2 relative">
              <Menu
                anchor="bottom end"
                menuItems={[
                  <ListBox
                    key={"listbox"}
                    itens={technologies}
                    selectedItems={filterSelected}
                    setSelectedItems={handleSetFilterSelected}
                    anchor="left start"
                  />,
                ]}
                ResetDefaultComponent={
                  <Button
                    className="text-sm w-full items-center justify-center text-gray-50 dark:text-gray-900 py-2"
                    onClick={resetAllFilters}
                  >
                    Limpar filtros
                  </Button>
                }
              >
                <FunnelIcon className="size-5 stroke-2" />
              </Menu>
            </Row>
          </Row>
        </Row>

        <HireUs />

        <Column className="w-full h-max gap-6 my-20 mt-16 !grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading || loading === null ? (
            Array(9)
              .fill(0)
              .map((_, i) => <EmptyCard key={i} />)
          ) : studentFilter.length !== 0 ? (
            studentFilter.map((student, i) => (
              <Card student={student} key={i} />
            ))
          ) : (
            <Column className="w-full h-full justify-center gap-4 items-center col-start-1 md:col-end-3 lg:col-end-4">
              <Image
                width={200}
                height={200}
                src="/assets/empty_states/noSearchedTalents.svg"
                alt=""
                className="size-72 md:size-96"
              />
              <Text className="font-bold text-lg text-center">
                Nenhum talento foi encontrado
              </Text>
            </Column>
          )}
        </Column>
      </Layout>
    </Row>
  );
};

export default StudentsCardsContainer;
