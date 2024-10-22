"use client";
import { Button, Row, Text, Layout } from "@/common/components";
import { useModal } from "@/common/context/modal-context";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const HireUs = () => {
  const t = useTranslations("hire-a-talent.HireUs");

  const { setIsOpen, setTitle } = useModal();

  const handleContact = () => {
    setIsOpen(true);
    setTitle(t("formTitle"));
  };

  return (
    <Row className="justify-center p-6 mt-20 rounded-xl md:p-10 items-center w-full overflow-x-hidden bg-[url('/assets/woman_bg_subscribe.png')] bg-bottom bg-cover relative before:absolute before:bg-primary-500/90 before:w-full before:h-full">
      <Layout className="w-full max-w-7xl gap-6 !justify-between items-start flex-wrap">
        <Text className="text-lg sm:text-xl md:text-2xl md:lg:max-w-2xl lg:max-w-3xl xl:max-w-5xl font-dela-gothic uppercase text-gray-900">
          {t("title")}
        </Text>

        <Button
          className="h-10 px-2 w-full md:w-max relative flex items-center justify-center sm:justify-between bg-slate-50 hover:bg-slate-100 text-gray-900 rounded-xl gap-4 font-roboto font-semibold sm:max-w-sm shadow-md"
          onClick={handleContact}
        >
          {t("button")}
          <EnvelopeIcon className="size-7 rounded-2xl text-gray-900 p-1 -rotate-12" />
        </Button>
      </Layout>
    </Row>
  );
};

export default HireUs;
