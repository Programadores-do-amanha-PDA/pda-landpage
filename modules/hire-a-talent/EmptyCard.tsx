"use client";

import { Column, Row } from "@/common/components";

const EmptyCard = () => {
  return (
    <Column className="w-full lg:max-w-96 lg:h-max max-h-50 bg-gray-100 dark:bg-gray-50/30 p-2 rounded-2xl gap-6 shadow-md animate-pulse">
      <Row className="w-full gap-4">
        <Row className="rounded-xl min-w-20 h-36 object-cover border-0 bg-primary-50" />
        <Column className="gap-4">
          <Row className="font-bold text-lg w-full h-7 bg-gray-200 rounded-xl" />
          <Column className="gap-3">
            <Row className="text-sm font-semibold text-gray-900 dark:text-gray-50 w-full h-5 bg-gray-200 rounded-xl" />
            <Row className="flex-wrap gap-2 h-14">
              <Row className="w-14 h-5 px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 text-sm text-gray-900 dark:text-gray-50"></Row>
              <Row className="w-14 h-5 px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 text-sm text-gray-900 dark:text-gray-50"></Row>
              <Row className="w-14 h-5 px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 text-sm text-gray-900 dark:text-gray-50"></Row>
              <Row className="w-14 h-5 px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 text-sm text-gray-900 dark:text-gray-50"></Row>
              <Row className="w-14 h-5 px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 text-sm text-gray-900 dark:text-gray-50"></Row>
              <Row className="w-14 h-5 px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 text-sm text-gray-900 dark:text-gray-50"></Row>
            </Row>
          </Column>
        </Column>
      </Row>
      <Column className="gap-4 md:flex-row">
        <Row className="gap-2 w-full justify-between">
          <Row className="font-semibold text-gray-900 cursor-pointer dark:text-gray-50 flex flex-row flex-nowrap gap-4 items-center justify-center bg-primary-500/55 w-full h-8 p-1 px-2 rounded-xl hover:bg-primary-500/75"></Row>
          <Row className="font-semibold text-gray-900 cursor-pointer dark:text-gray-50 flex flex-row flex-nowrap gap-4 items-center justify-center w-full h-8 p-1 px-2 rounded-xl dark:hover:bg-gray-50/35 hover:bg-gray-50 bg-gray-200"></Row>
        </Row>
      </Column>
    </Column>
  );
};

export default EmptyCard;
