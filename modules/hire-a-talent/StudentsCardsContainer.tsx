"use client";
import { useState } from "react";
import { Input } from "@headlessui/react";
import clsx from "clsx";

import { Student } from "@/app/api/student/_studentModel";

import { Button, Column, Image, Layout, Row, Text } from "@/common/components";
import { ListBox } from "@/common/components/Selectors";

import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Card from "./Card";
import EmptyCard from "./EmptyCard";
import { Menu } from "@/common/components/DropdownMenu";
import HireUs from "./HireUs";
import { useTranslations } from "next-intl";

const StudentsCardsContainer = ({
  students,
  loading,
}: {
  students: Student[];
  loading: boolean | null;
}) => {
  const t = useTranslations("hire-a-talent.StudentsCardsContainer");

  const [search, setSearch] = useState("");

  const uniqueTechnologies = Array.from(
    new Set(students.flatMap((s) => s.technologies))
  );

  const uniqueClasses = Array.from(new Set(students.map((s) => s.class)));

  const technologies = [t("technologies"), ...uniqueTechnologies];
  const classes = [t("interestAreas"), ...uniqueClasses];

  const [technologySelected, setTechnologySelected] = useState([
    technologies[0],
  ]);
  const [classSelected, setClassSelected] = useState([classes[0]]);

  const handleSetTechnologySelected = (items: string[]) => {
    if (items[items.length - 1] === technologies[0]) {
      setTechnologySelected([technologies[0]]);
    } else if (
      items[items.length - 1] !== technologies[0] &&
      items.length > 0
    ) {
      setTechnologySelected(items.filter((i) => i !== technologies[0]));
    } else if (items.length === 0) {
      setTechnologySelected([technologies[0]]);
    }
  };

  const handleSetClassSelected = (items: string[]) => {
    if (items[items.length - 1] === classes[0]) {
      setClassSelected([classes[0]]);
    } else if (items[items.length - 1] !== classes[0] && items.length > 0) {
      setClassSelected(items.filter((i) => i !== classes[0]));
    } else if (items.length === 0) {
      setClassSelected([classes[0]]);
    }
  };

  const studentFilter = students.filter((student) => {
    if (search) {
      if (
        technologySelected.length === 1 &&
        technologySelected[0] === technologies[0] &&
        classSelected.length === 1 &&
        classSelected[0] === classes[0]
      ) {
        return student.name.toLowerCase().includes(search.toLowerCase());
      } else if (
        technologySelected.length > 0 &&
        technologySelected[0] !== technologies[0] &&
        classSelected.length > 0 &&
        classSelected[0] !== classes[0]
      ) {
        return (
          student.name.toLowerCase().includes(search.toLowerCase()) &&
          technologySelected.some((tech) =>
            student?.technologies?.includes(tech)
          ) &&
          classSelected.some((cl) => student.class === cl)
        );
      } else if (
        technologySelected.length > 0 &&
        technologySelected[0] !== technologies[0]
      ) {
        return (
          student.name.toLowerCase().includes(search.toLowerCase()) &&
          technologySelected.some((tech) =>
            student?.technologies?.includes(tech)
          )
        );
      } else if (classSelected.length > 0 && classSelected[0] !== classes[0]) {
        return (
          student.name.toLowerCase().includes(search.toLowerCase()) &&
          classSelected.some((cl) => student.class === cl)
        );
      } else {
        return false;
      }
    } else {
      if (
        technologySelected.length === 1 &&
        technologySelected[0] === technologies[0] &&
        classSelected.length === 1 &&
        classSelected[0] === classes[0]
      ) {
        return true;
      } else if (
        technologySelected.length > 0 &&
        technologySelected[0] !== technologies[0] &&
        classSelected.length > 0 &&
        classSelected[0] !== classes[0]
      ) {
        return (
          technologySelected.some((tech) =>
            student?.technologies?.includes(tech)
          ) && classSelected.some((cl) => student.class === cl)
        );
      } else if (
        technologySelected.length > 0 &&
        technologySelected[0] !== technologies[0]
      ) {
        return technologySelected.some((tech) =>
          student?.technologies?.includes(tech)
        );
      } else if (classSelected.length > 0 && classSelected[0] !== classes[0]) {
        return classSelected.some((cl) => student.class === cl);
      } else {
        return false;
      }
    }
  });

  const resetAllFilters = () => {
    setTechnologySelected([technologies[0]]);
    setClassSelected([classes[0]]);
  };

  const isTechnologyFilterActive =
    JSON.stringify(technologySelected) !== JSON.stringify([technologies[0]]);
  const isClassFilterActive =
    JSON.stringify(classSelected) !== JSON.stringify([classes[0]]);
  const filtersActives = [isTechnologyFilterActive, isClassFilterActive].filter(
    (f) => f === true
  ).length;

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
                placeholder={t("searchPlaceholder")}
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
                    selectedItems={technologySelected}
                    setSelectedItems={handleSetTechnologySelected}
                    anchor="left start"
                  />,
                  <ListBox
                    key={"listbox"}
                    itens={classes}
                    selectedItems={classSelected}
                    setSelectedItems={handleSetClassSelected}
                    anchor="left start"
                  />,
                ]}
                ResetDefaultComponent={
                  <Button
                    className="text-sm w-36 items-center justify-center text-gray-50 dark:text-gray-900 py-2"
                    onClick={resetAllFilters}
                  >
                    {t("resetFilters")}
                  </Button>
                }
              >
                {filtersActives > 0 && (
                  <Text className="absolute flex rounded-full -top-1 -right-2 size-5 bg-red-400 text-gray-50 items-center justify-center !text-sm">
                    {filtersActives}
                  </Text>
                )}

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
                {t("emptySearchState")}
              </Text>
            </Column>
          )}
        </Column>
      </Layout>
    </Row>
  );
};

export default StudentsCardsContainer;
