"use client";
import { useState } from "react";

import { Column, Text, Row, Layout, Button, Image } from "@common/components";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

type News = {
  content: string;
  contentType: string;
  logo: string;
  logoAlt: string;
  link: string;
  linkTitle: string;
};

const OurNews = () => {
  const [newsGroupIndex, setNewsGroupIndex] = useState<number>(0);

  const news: News[] = [
    {
      content:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7183831578299555840?compact=1",
      contentType: "linkedin",
      logo: "/assets/partners/onfly.png",
      logoAlt: "onfly",
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7183831578299555840?compact=1",
      linkTitle: "Ver post",
    },
    {
      content:
        "“A ONG já formou 140 jovens, que saíram do curso empregados com um salário médio de R$ 3.600. Isso gera um aumento médio na renda familiar desses jovens de 240%.”",
      contentType: "text",
      logo: "/assets/news/braziljournal.png",
      logoAlt: "Brazil Journal",
      link: "https://braziljournal.com/pretos-pobres-e-perifericos-e-programando-o-brasil-de-amanha/",
      linkTitle: "Ler noticia",
    },
    {
      content:
        "“Tecnologia e impacto podem e devem andar juntos, afirma o CEO e fundador da ONG, Cleber Guedes, em sintonia com as metas do iFood. A Programadores do Amanhã foi criada para gerar renda e emprego para jovens negros por meio do ensino da programação.”",
      contentType: "text",
      logo: "/assets/partners/ifood.jpg",
      logoAlt: "ifood",
      link: "https://institucional.ifood.com.br/noticias/programadores-do-amanha-multiplica-renda-de-jovens-negros/",
      linkTitle: "Ler noticia",
    },
    {
      content:
        "https://www.youtube-nocookie.com/embed/I5FkKeaT-2c?si=Cd1yACJIqpqR8iAQ",
      contentType: "youtube",
      logo: "/assets/maintainers/meliuz.png",
      logoAlt: "Méliuz",
      link: "https://youtu.be/I5FkKeaT-2c?feature=shared",
      linkTitle: "Ver video",
    },
    {
      content:
        "“O curso atua como uma ponte entre sonhos e realidade, oferecendo um caminho para que pessoas que antes viam a carreira em TI como algo distante possam agora trilhar um percurso concreto em direção ao sucesso”",
      contentType: "text",
      logo: "/assets/news/pretajoia.jpg",
      logoAlt: "Preta Joia",
      link: "https://www.pretajoia.com/2023/08/programadores-do-amanha-ministra-curso.html",
      linkTitle: "Ler noticia",
    },
    {
      content:
        "“Com uma infraestrutura de qualidade, incluindo os melhores softwares e equipamentos, o “Programadores do Amanhã” promove uma conexão entre esses jovens talentos e grandes empresas que valorizam a diversidade e buscam construir um mercado mais inclusivo.”",
      contentType: "text",
      logo: "/assets/news/guiadeti.png",
      logoAlt: "GUIA DE TI",
      link: "https://guiadeti.com.br/curso-gratuito-programacao-jovens-negros/",
      linkTitle: "Ler noticia",
    },
    {
      content:
        "“Nosso objetivo é ampliar as oportunidades para jovens negros e indígenas, proporcionando uma rota para ingressar no mercado de tecnologia, uma área muitas vezes marcada por desigualdades.”",
      contentType: "text",
      logo: "/assets/news/odia.webp",
      logoAlt: "O DIA",
      link: "https://odia.ig.com.br/economia/empregos-e-negocios/2023/08/6691950-programadores-do-amanha-oferece-curso-exclusivo-de-programacao-para-negros-e-indigenas.html",
      linkTitle: "Ler noticia",
    },
    {
      content:
        "“Mesmo sendo alta a demanda por profissionais da área de tecnologia e ciência da computação, o acesso à faculdade e aos cursos de capacitação é ainda restrito a poucas pessoas. Além do custo do investimento na qualificação profissional, tem também o investimento em um computador, ou notebook, de alta performance. Contudo não é barato e nem fácil ser programador. É por isso que o Projeto Programadores do Amanhã nasceu!”",
      contentType: "text",
      logo: "/assets/news/comitepelacidadania.png",
      logoAlt: "Comitê Pela Cidadania",
      link: "https://comitepelacidadania.org/programadores-do-amanha/",
      linkTitle: "Ler noticia",
    },
    {
      content:
        "“Nossa meta é atingir 80% de empregabilidade em até seis meses após a formação e meu sonho grande é que, futuramente, não seja necessário realizar um processo seletivo para sermos realmente acessíveis e que todo jovem que tenha interesse possa fazer o curso”, aponta Cleber Guedes.",
      contentType: "text",
      logo: "/assets/news/aloalobahia.png",
      logoAlt: "alôalôbahia",
      link: "https://aloalobahia.com/notas/programadores-do-amanha-projeto-oferece-curso-gratuito-de-programacao-para-negros-e-indigenas",
      linkTitle: "Ler noticia",
    },
  ];

  const makeGroups = () => {
    let groups = [];
    for (var i = 0; i < news.length; i += 3) {
      groups.push(news.slice(i, i + 3));
    }
    return groups;
  };

  const newsGroups = makeGroups();

  return (
    <Row className="w-full items-center justify-center py-8">
      <Layout className="w-full max-w-7xl p-6 lg:p-8 relative flex-col gap-28">
        <Column className="w-full text-start gap-4 ">
          <Text className="text-xl sm:text-2xl font-dela-gothic uppercase">
            <Text className="text-yellow-400  font-ibm-plex-sans font-black text-center">
              {"</"}
            </Text>
            Nossas Noticias
            <Text className="text-yellow-400  font-ibm-plex-sans font-black text-center">
              {">"}
            </Text>
          </Text>
          <Text className="font-semibold">
            Veja o que a comunidade tem falado da Programadores do Amanhã.
          </Text>
        </Column>

        <Column className="gap-6">
          <Row className="gap-6 flex-wrap">
            {newsGroups[newsGroupIndex].map((n, i) => (
              <Column
                key={i}
                className="max-w-80 h-max bg-secondary-630/15 dark:bg-secondary-800 gap-8 p-3 rounded-lg justify-between"
              >
                {n.contentType === "text" && (
                  <>
                    <Text className=" text-gray-900 dark:text-gray-50">
                      {n.content}
                    </Text>
                  </>
                )}
                {n.contentType === "youtube" && (
                  <Row className="">
                    <iframe
                      src={n.content}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      className="w-full rounded-xl overflow-hidden"
                    ></iframe>
                  </Row>
                )}
                {n.contentType === "linkedin" && (
                  <Row className="">
                    <iframe
                      src={n.content}
                      title="Embedded post"
                      className="w-full rounded-xl overflow-hidden"
                    ></iframe>
                  </Row>
                )}

                <Row className="w-full h-10 items-center justify-between">
                  <Image
                    src={n.logo}
                    alt={n.logoAlt}
                    width={100}
                    height={100}
                    className="max-h-10 w-auto"
                  />

                  <Button
                    className="w-max h-10 p-1 px-2 relative flex items-center justify-center transition-all text-primary-600 hover:text-primary-700  dark:text-yellow-400 dark:hover:text-yellow-400/55  rounded-xl gap-1  sm:max-w-52"
                    onClick={() => window.open(n.link)}
                  >
                    {n.linkTitle}
                    <ArrowRightIcon className="size-4 -rotate-12" />
                  </Button>
                </Row>
              </Column>
            ))}
          </Row>

          <Row className="w-full h-10 gap-4 items-center justify-center lg:justify-start">
            {newsGroupIndex > 0 && (
              <Button
                className="size-10 bg-gray-200 dark:bg-gray-700 rounded-lg items-center justify-center"
                onClick={() => setNewsGroupIndex(newsGroupIndex - 1)}
              >
                <ChevronLeftIcon
                  className="text-gray-900 dark:text-gray-50 size-8 stroke-2"
                  strokeWidth={1}
                />
              </Button>
            )}
            <Row className="w-28 items-center justify-between">
              {newsGroups.map((_, i) =>
                i === newsGroupIndex ? (
                  <SunIcon
                    key={i}
                    className="size-8 text-yellow-400"
                    strokeWidth={2}
                  />
                ) : (
                  <SunIcon
                    key={i}
                    className="size-6 text-gray-600 "
                    strokeWidth={2}
                  />
                )
              )}
            </Row>
            {newsGroupIndex !== newsGroups.length - 1 && (
              <Button
                className="size-10 bg-gray-200 dark:bg-gray-700 rounded-lg items-center justify-center"
                onClick={() => setNewsGroupIndex(newsGroupIndex + 1)}
              >
                <ChevronRightIcon
                  className="text-gray-900 dark:text-gray-50 size-8 stroke-2"
                  strokeWidth={1}
                />
              </Button>
            )}
          </Row>
        </Column>
      </Layout>
    </Row>
  );
};

export default OurNews;
