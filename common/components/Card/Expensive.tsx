"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Column } from "../Column";
import { Row } from "../Row";
import { Text } from "../Text";
import { useEffect, useState } from "react";
import useIsScreenSmall from "@/hooks/useIsScreenSmall";

const Expensive = ({
  label,
  expandedText,
  tagSection: { tagLabel, tags },
  index,
}: {
  label: string;
  expandedText: string;
  tagSection: {
    tagLabel: string;
    tags: string[];
  };
  index: number;
}) => {
  const isScreenSmall = useIsScreenSmall();
  const [isExpend, setIsExpend] = useState<boolean>();

  useEffect(() => {
    if (isScreenSmall && index !== 0) {
      setIsExpend(false);
    }
    if (isScreenSmall && index === 0) {
      setIsExpend(true);
    }

    if (!isScreenSmall) {
      setIsExpend(true);
    }
  }, [isScreenSmall, index]);

  const handleSetIsExpend = () => {
    setIsExpend(!isExpend);
  };

  return (
    <Column className="w-full h-max sm:w-72 min-h-10 bg-primary-500/55 backdrop-blur rounded-xl px-3 items-center justify-start gap-2">
      <Row
        className="w-full h-10 items-center justify-between gap-4"
        onClick={handleSetIsExpend}
      >
        <Text className="font-roboto font-semibold text-gray-900 dark:text-gray-50">
          {label}
        </Text>
        <ChevronDownIcon
          className={`size-5 text-gray-900 dark:text-gray-50 stroke-2 ${
            isExpend && "rotate-180"
          } `}
        />
      </Row>

      {isExpend && (
        <Column className="w-full pb-3 gap-4">
          <Text className="font-light font-roboto text-gray-900 dark:text-gray-50">
            {expandedText}
          </Text>
          <hr className="w-full h-px border-gray-900/35 dark:border-gray-50/35 rounded-lg" />
          <Row className="w-full items-center justify-between gap-2">
            <Text className="text-sm font-roboto font-semibold text-gray-900 dark:text-gray-50">
              {tagLabel}
            </Text>
          </Row>
          <Row className="flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Text
                key={i}
                className="w-max h-max px-2 rounded-full border border-gray-900/55 dark:border-gray-50/55 font-roboto-mono text-sm text-gray-900 dark:text-gray-50"
              >
                {tag}
              </Text>
            ))}
          </Row>
        </Column>
      )}
    </Column>
  );
};

export default Expensive;
