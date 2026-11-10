// Todos os links do site em um só lugar. Para trocar um link, altere apenas este arquivo.

export const SITE_URL = "https://programadoresdoamanha.org.br";

/** Todos os botões de doar levam para cá. */
export const DOACAO_URL = "https://doe.programadoresdoamanha.org.br/";

export const CONTATO_EMAIL = "contato@programadoresdoamanha.org.br";
export const CONTATO_MAILTO = `mailto:${CONTATO_EMAIL}`;

export const ROUTES = {
  home: "/",
  impacto: "/impacto",
  empresas: "/empresas",
  doe: "/doe",
  sobre: "/sobre",
  naMidia: "/sobre#na-midia",
  sejaMentor: "/doe#seja-mentor",
} as const;

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

export const SOCIAL = {
  instagram: "https://www.instagram.com/programadoresdoamanha/",
  linkedin: "https://www.linkedin.com/company/programadoresdoamanha/",
  medium: "https://medium.com/@programadoresdoamanha",
} as const;

export const SOURCES = {
  atlasMobilidade: "https://atlasmobilidadesocial.org.br/",
} as const;
