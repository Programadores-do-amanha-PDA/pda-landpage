// Todos os links do site em um só lugar. Para trocar um link, altere apenas este arquivo.

export const SITE_URL = "https://programadoresdoamanha.org.br";

/** Todos os botões de doar levam para cá. */
export const DOACAO_URL = "https://doe.programadoresdoamanha.org.br/";

export const CONTATO_EMAIL = "contato@programadoresdoamanha.org.br";
export const CONTATO_MAILTO = `mailto:${CONTATO_EMAIL}`;

/**
 * Google Forms. [PENDENTE] Confirmar os links definitivos com o time.
 * inscricao e mentoria são os links usados hoje no site atual.
 */
export const FORMS = {
  inscricao: "https://forms.gle/Sf93Zf5QmvASRFLp9",
  mentoria: "https://forms.gle/pFCB42A7FJ7L31Fd8",
  /** [LINK DO GOOGLE FORMS DE EMPRESAS] ainda não existe. */
  empresas: "#",
} as const;

/**
 * Destinos dos links internos.
 * [PROVISÓRIO] Enquanto /empresas e /doe não existem, cada link aponta
 * para a página ou o serviço que já está no ar. Quando a página nova ficar pronta,
 * troque o valor pela rota final (comentada ao lado).
 */
export const ROUTES = {
  home: "/",
  impacto: "/impacto",
  empresas: "/hire-a-talent", // final: "/empresas"
  doe: DOACAO_URL, // final: "/doe"
  sobre: "/sobre",
  naMidia: "/sobre#na-midia",
  sejaMentor: FORMS.mentoria, // final: "/doe#seja-mentor"
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/programadoresdoamanha/",
  linkedin: "https://www.linkedin.com/company/programadoresdoamanha/",
  medium: "https://medium.com/@programadoresdoamanha",
} as const;

export const SOURCES = {
  atlasMobilidade: "https://atlasmobilidadesocial.org.br/",
} as const;

/** Matérias da seção "Na mídia" de /sobre. */
export const MEDIA = {
  brazilJournal:
    "https://braziljournal.com/pretos-pobres-e-perifericos-e-programando-o-brasil-de-amanha/",
  ifood:
    "https://institucional.ifood.com.br/noticias/programadores-do-amanha-multiplica-renda-de-jovens-negros/",
  oDia: "https://odia.ig.com.br/economia/empregos-e-negocios/2023/08/6691950-programadores-do-amanha-oferece-curso-exclusivo-de-programacao-para-negros-e-indigenas.html",
  onfly:
    "https://www.linkedin.com/feed/update/urn:li:ugcPost:7183831578299555840/",
  pretaJoia:
    "https://www.pretajoia.com/2023/08/programadores-do-amanha-ministra-curso.html",
  guiaDeTi:
    "https://guiadeti.com.br/curso-gratuito-programacao-jovens-negros/",
  comiteCidadania: "https://comitepelacidadania.org/programadores-do-amanha/",
  aloAloBahia:
    "https://aloalobahia.com/notas/programadores-do-amanha-projeto-oferece-curso-gratuito-de-programacao-para-negros-e-indigenas",
  youtube: "https://youtu.be/I5FkKeaT-2c",
} as const;
