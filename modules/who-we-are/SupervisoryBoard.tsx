"use client";
import { Column, Image, Layout, Marker, Row, Text } from "@common/components";
import { useEffect, useRef } from "react";

const supervisoryMembers = [
  {
    name: "Cleber Guedes",
    role: "CEO",
    image: {
      url: "/assets/team/Cleber_Guedes.jpg",
      alt: "",
    },
  },
  {
    name: "Leticia Silveira",
    role: "Gerente de Programas",
    image: {
      url: "/assets/team/Leticia_Silveira.png",
      alt: "",
    },
  },
  {
    name: "Beatriz Meigger",
    role: "Líder de seleção & Empregabilidade",
    image: {
      url: "/assets/team/Beatriz_Meigger.jpg",
      alt: "",
    },
  },
  {
    name: "Rafael Cerqueira",
    role: "Líder de Jornada do Estudante",
    image: {
      url: "/assets/team/Rafael_Cerqueira.jpeg",
      alt: "",
    },
  },
];

const SupervisoryBoard = () => {
  const teamMembersContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = teamMembersContainer.current;
    if (container) {
      const items = container.children;
      const windowHeight = window.innerWidth;
      console.log(windowHeight);
      if (items[0] && container && windowHeight > 737) {
        const lineHeight = (items[0] as HTMLElement).offsetHeight;
        console.log(lineHeight);

        const secondLineItems = [];

        for (let i = 0; i < items.length; i++) {
          const itemTop =
            items[i].getBoundingClientRect().top -
            container.getBoundingClientRect().top;

          if (itemTop >= lineHeight) {
            secondLineItems.push(items[i]);
          }
        }

        secondLineItems.forEach((item) => {
          item.classList.add("second-line");
        });
      }
    }
  }, []);

  return (
    <Row className="justify-center p-6 lg:p-8 items-center w-full overflow-x-hidden bg-secondary-400 dark:bg-secondary-700 relative">
      <Layout className="w-full max-w-7xl py-8 flex-col !justify-start gap-28">
        <Column className="w-full text-start gap-4">
          <Text className="text-xl sm:text-2xl font-dela-gothic uppercase">
            <Text className="text-gray-50 dark:text-primary-900  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            Conselho Fiscal
            <Text className="text-gray-50 dark:text-primary-900  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
        </Column>

        <div
          ref={teamMembersContainer}
          className="w-full flex flex-wrap gap-4 gap-y-10 justify-around"
        >
          {supervisoryMembers.map((member, index) => (
            <Row
              key={index}
              className="gap-4 w-max max-w-80 max-[737px]:even:flex-row-reverse"
            >
              <Image
                src={member.image.url}
                alt={member.image.alt}
                width={300}
                height={400}
                className="w-36 h-52 object-cover object-center rounded-xl"
              />

              <Column className="gap-2 max-[737px]:even:items-end">
                <Text className="font-bold text-lg max-[737px]:even:text-right text-gray-900 dark:text-gray-50">
                  <Marker className="px-1 rounded-lg bg-gray-50 dark:bg-secondary-900 text-gray-900 dark:text-gray-50">
                    {member.name}
                  </Marker>
                </Text>
                <Text className="font-normal max-[737px]:even:text-right text-gray-900 dark:text-gray-50">
                  {member.role}
                </Text>
              </Column>
            </Row>
          ))}
        </div>
      </Layout>
    </Row>
  );
};

export default SupervisoryBoard;
