import { Column, Image, Layout, Row, Text } from "@common/components";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Cleber Guedes",
      role: "CEO",
      image: {
        url: "/assets/team/Cleber_Guedes.jpg",
        alt: "",
      },
    },
    {
      name: "Leticia Santana",
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
    {
      name: "Karlla Souzza",
      role: "Desenvolvedora FullStack",
      image: {
        url: "/assets/team/Karlla_Souzza.jpg",
        alt: "",
      },
    },
    {
      name: "Bruna Moreira",
      role: "Analista de Aprendizagem",
      image: {
        url: "/assets/team/Bruna_Moreira.jpg",
        alt: "",
      },
    },
    {
      name: "Thauana Miranda",
      role: "Analista de Jornada",
      image: {
        url: "/assets/team/Thauana_Miranda.png",
        alt: "",
      },
    },
    {
      name: "Raíssa Emanuele",
      role: "Analista de Jornada",
      image: {
        url: "/assets/team/Raissa.jpg",
        alt: "",
      },
    },
    {
      name: "Jardielen Chaves",
      role: "Estagiária de Operações",
      image: {
        url: "/assets/team/Jardielen.jpg",
        alt: "",
      },
    },
    {
      name: "Beatriz Ferreira",
      role: "Facilitadora de Programação",
      image: {
        url: "/assets/team/Beatriz_Ferreira.jpg",
        alt: "",
      },
    },
    {
      name: "Daniel Mendes",
      role: "Facilitador de Programação",
      image: {
        url: "/assets/team/Daniel.jpg",
        alt: "",
      },
    },
    {
      name: "Iasmim Oliveira",
      role: "Facilitadora de Programação",
      image: {
        url: "/assets/team/Iasmim.jpg",
        alt: "",
      },
    },
    {
      name: "Tabata Macedo",
      role: "Facilitadora de Programação",
      image: {
        url: "/assets/team/Tabata.jpg",
        alt: "",
      },
    },
    {
      name: "Michelle de souza",
      role: "Facilitadora de Programação",
      image: {
        url: "/assets/team/Michelle.jpg",
        alt: "",
      },
    },
    {
      name: "Felipe Santos",
      role: "Facilitador de Inglês",
      image: {
        url: "/assets/team/Felipe_Santos.jpg",
        alt: "",
      },
    },
    {
      name: "Yasmin",
      role: "Facilitadora de Inglês",
      image: {
        url: "/assets/team/Yasmin_Santana.jpg",
        alt: "",
      },
    },
  ];

  return (
    <Row className="justify-center p-6 lg:p-8 items-center w-full overflow-x-hidden bg-gray-50 dark:bg-secondary-900 relative">
      <Layout className="w-full max-w-7xl py-8 flex-col !justify-start gap-28">
        <Column className="w-full text-start gap-4">
          <Text className="text-xl sm:text-2xl font-dela-gothic uppercase">
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            Nosso Time
            <Text className="text-primary-500  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
          <Text className="font-semibold">
            Conheça as pessoas que tornam a nossa missão possível!
          </Text>
        </Column>

        <Row className="w-full justify-between sm:justify-start flex-wrap gap-y-4 gap-x-1">
          {teamMembers.map((member, index) => (
            <Column key={index} className="w-36">
              <Image
                src={member.image.url}
                alt={member.image.alt}
                width={300}
                height={300}
                className="size-36 object-cover object-center"
              />
              <Column>
                <Text className="font-bold">{member.name}</Text>
                <Text className="font-normal">{member.role}</Text>
              </Column>
            </Column>
          ))}
        </Row>
      </Layout>
    </Row>
  );
};

export default OurTeam;
