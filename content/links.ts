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
 * [PROVISÓRIO] Enquanto /empresas, /doe e /sobre não existem, cada link aponta
 * para a página ou o serviço que já está no ar. Quando a página nova ficar pronta,
 * troque o valor pela rota final (comentada ao lado).
 */
export const ROUTES = {
  home: "/",
  impacto: "/impacto",
  empresas: "/hire-a-talent", // final: "/empresas"
  doe: DOACAO_URL, // final: "/doe"
  sobre: "/who-we-are", // final: "/sobre"
  naMidia: "/who-we-are", // final: "/sobre#na-midia"
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
