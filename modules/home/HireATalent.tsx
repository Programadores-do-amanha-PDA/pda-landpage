"use client";
import {
  Button,
  Column,
  InternalLink,
  Layout,
  Text,
} from "@/common/components";
import { EnvelopeIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { useModal } from "@common/context/modal-context";
import { useTranslations } from "next-intl";

const HireATalent = () => {
  const t = useTranslations("home.HireATalent");

  const { setIsOpen, setTitle } = useModal();

  const handleOpenForms = () => {
    setIsOpen(true);
    setTitle(t("formTitle"));
  };

  const HireATalentCards = [
    {
      image: "bg-[url('/assets/woman_working.jpg')]",
      title: t("cards.0.title"),
      description: t("cards.0.description"),
    },
    {
      image: "bg-[url('/assets/man_working.jpg')]",
      title: t("cards.1.title"),
      description: t("cards.1.description"),
    },
    {
      image: "bg-[url('/assets/woman_working_together.jpg')]",
      title: t("cards.2.title"),
      description: t("cards.2.description"),
    },
  ];

  return (
    <Layout className="w-full max-w-7xl p-6 lg:p-8 relative flex-col gap-20">
      <Column className="w-full text-start gap-4">
        <Text className="text-xl sm:text-2xl font-dela-gothic uppercase">
          <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
            {"</"}
          </Text>
          {t("title")}
          <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
            {">"}
          </Text>
        </Text>
        <Text className="font-ibm-plex-sans-sans font-semibold text-lg">
          {t("description")}
        </Text>
      </Column>

      <Column className="gap-6 md:gap-8 md:flex-row">
        {HireATalentCards.map((card, i) => (
          <Column
            key={i}
            className={`w-full md:w-80 h-max items-start justify-center rounded-xl p-4 ${card.image} gap-8 shadow-sm  overflow-clip bg-bottom bg-cover relative before:rounded-xl before:bg-secondary-300/90 before:dark:bg-secondary-700/85 before:absolute before:w-full before:h-full before:inset-y-0 before:m-auto before:inset-x-0`}
          >
            <Column className="gap-4 z-[2]">
              <Text className="text-lg font-dela-gothic">{card.title}</Text>
              <Text className="prose text-gray-900 dark:text-gray-50">
                {card.description}
              </Text>
            </Column>
          </Column>
        ))}
      </Column>

      <Column className="md:flex-row gap-4 w-full items-center justify-start">
        <Button
          className="w-full md:w-max h-10 p-1 px-3 gap-3 relative flex items-center justify-center transition-all font-semibold text-gray-900 dark:text-gray-50  bg-gray-50/55 dark:bg-secondary-800/55 hover:bg-gray-50/85 dark:hover:bg-secondary-800/85 rounded-xl sm:max-w-52 shadow-md"
          onClick={handleOpenForms}
        >
          {t("buttonLearnMore")}
          <EnvelopeIcon className="size-5 text-gray-900 dark:text-gray-50 stroke-2 -rotate-12" />
        </Button>
        <InternalLink
          className="w-full md:w-max h-10 p-1 px-3 gap-4 relative flex items-center justify-center transition-all font-semibold text-gray-50 border-2 border-gray-50/50 hover:bg-gray-50/50 dark:border-secondary-800/50 dark:hover:bg-secondary-800/50 rounded-xl hover:shadow-md"
          href="/contrate-um-talento"
        >
          {t("buttonHireATalent")}
          <TrophyIcon className="size-5 text-gray-50 -rotate-12" />
        </InternalLink>
      </Column>
    </Layout>
  );
};

export default HireATalent;
