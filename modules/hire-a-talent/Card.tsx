import { Student } from "@/app/api/student/_studentModel";
import { Column, Image, Link, Row, Text } from "@/common/components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Card = ({ student }: { student: Student }) => {
  return (
    <Column className="w-full lg:max-w-96 lg:h-max max-h-50 bg-gray-100 dark:bg-gray-50/30 p-2 rounded-2xl gap-6 shadow-md">
      <Row className="w-full gap-4">
        <Image
          className="rounded-xl w-20 h-36 object-cover border-0"
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
            <Row className="flex-wrap gap-2 md:h-14">
              {student?.technologies?.map((technology, j) => (
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
  );
};

export default Card;
