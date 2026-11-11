// Todos os links do site em um só lugar. Para trocar um link, altere apenas este arquivo.

export const SITE_URL = "https://programadoresdoamanha.org.br";

/**
 * Doação pelo pop-up da Doare (doare.org), usado na página /doe.
 * Os payboxId são públicos (não são chave secreta). Para trocar um pop-up, altere só o ID.
 */
export const DOARE = {
  sdk: "https://paybox.doare.org/assets/javascripts/paybox.sdk.js",
  termos: "https://doare.org/terms",
  privacidade: "https://doare.org/privacidade",
  payboxId: {
    /** Pop-up genérico "Doar": a pessoa escolhe valor e recorrência. */
    geral: "98533830-b7f0-4222-8efb-a55b908df8f7",
    /** Configurado na Doare com R$ 30 (era o "cota50" do site anterior). */
    cota30: "19470d9b-82f2-4060-926e-fb61bd5249a6",
    cota100: "ea5e1102-0d1d-4083-a007-41c4bb2a4d49",
    cota500: "8e3dfea9-022e-4e75-b526-0832fd8d84b6",
    outroValor: "611c2811-cccc-42cb-938f-677b9d6e327f",
    /** Campanha "Futuros que começam agora" (não usada na página por enquanto). */
    futurosQueComecamAgora: "78d4b4a1-7aad-4d71-8eba-1506fac82dda",
  },
} as const;

export const CONTATO_EMAIL = "contato@programadoresdoamanha.org.br";
export const CONTATO_MAILTO = `mailto:${CONTATO_EMAIL}`;

/**
 * Google Forms. [PENDENTE] Confirmar os links definitivos com o time.
 * inscricao e mentoria são os links usados hoje no site atual.
 */
export const FORMS = {
  inscricao: "https://forms.gle/Sf93Zf5QmvASRFLp9",
  mentoria: "https://forms.gle/pFCB42A7FJ7L31Fd8",
  /** Empresas que querem contratar um talento (botões de /contrate). */
  empresas: "https://forms.gle/4LpDwUxAU3cDSTT19",
} as const;

/**
 * Destinos dos links internos. Todos os botões de doar levam para ROUTES.doe.
 */
export const ROUTES = {
  home: "/",
  impacto: "/impacto",
  contrate: "/contrate",
  doe: "/doe",
  sobre: "/sobre",
  naMidia: "/sobre#na-midia",
  transparencia: "/sobre#transparencia",
  // Decisão do time (nov/2026): sem seção de mentoria em /doe; o link vai direto ao Forms.
  sejaMentor: FORMS.mentoria,
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
  onfly:
    "https://www.linkedin.com/feed/update/urn:li:ugcPost:7183831578299555840/",
  youtube: "https://youtu.be/I5FkKeaT-2c",
} as const;

/**
 * Documentos da seção "Transparência" de /sobre (arquivos no Google Drive da PdA).
 * Para publicar um documento novo, adicione o link aqui e o item em content/sobre.ts.
 */
export const DOCUMENTOS = {
  auditoria2024:
    "https://drive.google.com/file/d/1SgwDqy5xmLyfFmHs5-9vOABZtFAMyW-6/view?usp=sharing",
  demonstracoes2024:
    "https://drive.google.com/file/d/1PNgNAz34Y90reYj7fJ6BJlNmhX7oDv1T/view?usp=sharing",
  estatuto:
    "https://drive.google.com/file/d/1a0k84oPobukIG5yffA5M_ViJsf32hvnM/view?usp=sharing",
  ataEleicao2024:
    "https://drive.google.com/file/d/1Sp2uReAKfU08o-23JhwAw4GxUe3g4WXg/view?usp=sharing",
} as const;
