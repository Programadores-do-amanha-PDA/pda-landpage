# Site PdA: briefing do redesign

Este arquivo orienta o Claude Code na reconstrução do site da Programadores do Amanhã (programadoresdoamanha.org.br). Leia tudo antes de começar. Em caso de dúvida, pergunte em vez de inventar conteúdo.

## Objetivo

Trocar a landing page única atual por um site de 5 páginas, cada uma com um público e um CTA claros, contando a tese de mobilidade social da PdA com os dados de outubro/2026.

## Fontes de verdade

| Arquivo | O que é |
| --- | --- |
| `docs/redesign/textos-site.md` | Copy final de todas as páginas. Use o texto exatamente como está. |
| `docs/redesign/mockup-home.dc.html` | Mockup aprovado da Home (estrutura, cores, tipografia, espaçamento). É um arquivo do canvas de design, não roda sozinho: leia o markup e os estilos inline como referência visual. |
| `public/assets/mosaico-alumni.jpg` | Mosaico de fotos dos alumni (provisório, ver Pendências). O hero da Home usa `mosaico-alumni-hero.jpg`, um recorte sem a primeira fileira, que tem os rostos cortados no arquivo original. |

Quando o mockup e o `textos-site.md` divergirem na Home, **o mockup vence**: ele tem as últimas revisões de texto.

Na Home, as revisões do time (nov/2026) também vencem o mockup: o botão do hero é "Patrocine a mobilidade social"; a faixa de números tem todos os valores na mesma cor; o rótulo do gráfico é "Top 10% de renda no Brasil"; "Como apoiar" tem dois blocos, "Apoiar como empresa" (doar e contratar) e "Apoiar como pessoa física" (doar e ser mentor). Em todo o site, a PdA fala de si em primeira pessoa ("os jovens que formamos", não "formados pela PdA"); os depoimentos dos alumni ficam como estão. O zero com ponto é o desenho da JetBrains Mono e fica assim (decisão do time).

Em `/impacto`, as revisões do time (nov/2026) vencem o `textos-site.md`. O conteúdo final está em `content/impacto.ts`. Principais mudanças: sem as seções de depoimento da Débora e de primeiro salário; o Top 5% fica na seção da pirâmide; "um jovem por semana" é o subtítulo das histórias; os cards das histórias usam os 10 alumni do formulário "O Primeiro Sim" (fotos em `public/assets/alumni`, texto resumido no verso do card).

Em `/sobre`, as revisões do time (nov/2026) também vencem o `textos-site.md`. O conteúdo final está em `content/sobre.ts`. Principais mudanças:
- "Nossa missão" com os 4 valores no lugar de "Nossa história". O trecho "missão é gerar renda e empregabilidade" fica em negrito purple, e os textos dos valores foram revisados pelo time.
- Sem as seções "A formação" e "Selos e compromissos". Os selos continuam no rodapé.
- Conselho de administração e conselho fiscal em ordem alfabética pelo nome. O conselho fiscal mostra só o nome. As fotos estão em `public/assets/advice`.
- Seção "Nosso time" logo depois dos conselhos, nos mesmos cards e também em ordem alfabética, sem texto de abertura: Beatriz Meigger (Gerente de Impacto), Cleber Guedes (Diretor executivo), Letícia Silveira (Gerente de Desenvolvimento Institucional) e Thauana Miranda (Conselheira de carreira). As fotos estão em `public/assets/team`; as demais fotos dessa pasta só existem porque `/who-we-are` ainda as usa.
- Nova seção "Transparência" (`#transparencia`), com auditoria, demonstrações contábeis, estatuto e atas no Google Drive. Para publicar um documento novo, adicione o link em `DOCUMENTOS` (`content/links.ts`) e o item em `content/sobre.ts`.
- "Na mídia" mostra só Brazil Journal, iFood, Onfly e Méliuz, nessa ordem: logos com link para as matérias.
- Ano de fundação: 2019.

Em `/doe`, as decisões do time (nov/2026) também vencem o `textos-site.md`. O conteúdo final está em `content/doe.ts`. Principais mudanças:
- A doação é feita pelo pop-up da Doare: o SDK (`paybox.sdk.js`) carrega com `next/script` só nesta página, e cada botão chama `Paybox.show({ payboxId })`. Os IDs ficam em `DOARE` (`content/links.ts`).
- "Doar agora" abre o pop-up genérico. Em "Formas de doar" há os botões R$ 30 (suporte terapêutico), R$ 100 (notebook e internet), R$ 500 (formação completa) e Outro valor, cada um com o seu pop-up.
- Sem os widgets da campanha da Doare (total arrecadado, barra, dias restantes) e sem o pop-up "Futuros que começam agora" (o ID continua em `DOARE`).
- Sem a seção "Seja mentor": os links "Seja mentor" vão direto ao Google Forms de mentoria.
- A Doare recusa (403) o pop-up quando a página roda em `localhost`; em produção ele abre normalmente.

## Stack

- Repositório que está no ar: `Programadores-do-amanha-PDA/pda-landpage` (este). O antigo `prog-do-amanha/programadoresdoamanha` não é o site publicado.
- **Next.js 14 com App Router + TypeScript + Tailwind CSS**, já usado aqui. As páginas novas não usam os componentes antigos de `common/` nem de `modules/`.
- Idiomas via `next-intl` (`/pt` e `/en`, padrão `pt`). A copy nova só existe em português: as páginas novas saem em PT e o `/en` delas redireciona para `/pt` até haver tradução.
- Conteúdo estático em arquivos (`content/*.ts` ou MDX). Nada de CMS por enquanto.
- Componentes novos em `components/`, conteúdo em `content/`, links em `content/links.ts`.
- **Não mexer** em `app/[locale]/hire-a-talent`, `app/[locale]/who-we-are`, `app/api/*` e nos módulos que elas usam (`modules/hire-a-talent`, `modules/who-we-are`, banco MongoDB). O futuro delas ainda vai ser decidido; só garanta que continuem funcionando.
- Manter Mixpanel (`PageViewComponent`), `@vercel/analytics` e `@vercel/speed-insights`.

## Páginas

| Rota | Público | CTA principal |
| --- | --- | --- |
| `/` | Todos | Patrocine a mobilidade · Contrate um talento |
| `/impacto` | Doadores, imprensa, conselho | Apoie a próxima turma |
| `/contrate` | RH | Quero contratar (Google Forms de empresas) |
| `/doe` | Pessoa física | Doar agora (pop-up da Doare) |
| `/sobre` | Todos | Contato |

Em `/contrate` ("Contrate um talento", seção "Para empresas" do `textos-site.md`), as decisões do time (nov/2026) também vencem o `textos-site.md`. O conteúdo final está em `content/contrate.ts`. Principais mudanças:
- A página fala só de contratar talentos: no menu ela se chama "Contrate um talento", e sai a seção "Apoie a formação" (patrocínio).
- A rota é `/contrate` (`ROUTES.contrate`). Ela foi publicada primeiro em `/empresas`, que agora redireciona para `/pt/contrate` com redirect temporário (307, em `redirects()` do `next.config.mjs`): `/empresas` fica reservada para a futura página de empresas que querem doar. Ao criar essa página, remova o redirect.
- Os botões "Quero contratar" e "Abrir uma vaga" vão para o Google Forms de empresas (`FORMS.empresas`).
- A faixa "Empresas que já contrataram" tem 10 logos em `public/assets/contrataram` (BTG Pactual, Oracle, Inter, XP Investimentos, Localiza, Onfly, Hotmart, Itaú, BV e Mercado Livre). A Onfly usa `public/assets/partners/onfly.png`.

Header e rodapé iguais em todas as páginas (rodapé descrito no fim de `textos-site.md`). O link "Inscreva-se" aponta para o Google Forms de inscrição. No rodapé, o nome da PdA aparece como logo e os selos (BTG Soma, Pacto Global e ODS 8) aparecem como imagens, em `public/assets/selos`. A coluna "Sobre" do rodapé também tem o link "Transparência" (`/sobre#transparencia`).

**Logo em fundo escuro:** use `public/assets/logo-pda-fundo-escuro.png`. O arquivo `Logo_PDA_Horizontal_FundoRoxo.png` tem o til do "Ã" na cor ink, que some em fundo escuro; a cópia corrige o til para branco.

## Identidade visual

Siga o mockup da Home e aplique a mesma linguagem nas outras páginas.

| Token | Hex | Uso |
| --- | --- | --- |
| ink | `#300635` | Fundos escuros, texto principal em fundo claro |
| ink-deep | `#270A2E` | Seção do problema |
| card-dark | `#3A1442` | Cards sobre fundo escuro (borda `rgba(245,243,220,0.18)`) |
| purple | `#890098` | Faixa de números, botões secundários, destaques |
| purple-mid | `#5C0A6B` | Placeholders e camadas |
| yellow | `#EDDC12` | Acento: barras de destaque, números, botão principal. Sempre em pequena dose |
| cream | `#F5F3DC` | Fundo claro padrão e texto sobre escuro |
| white | `#FFFFFF` | Seções alternadas e cards claros |

- **Títulos:** Anton, caixa alta, `line-height` entre 0.95 e 1.08. Palavras-chave podem ir em amarelo ou sobre uma barra amarela.
- **Texto:** JetBrains Mono, 17 a 20 px, `line-height` 1.55 a 1.6.
- **Botões:** retangulares, caixa alta, `letter-spacing: 0.08em`, mono em negrito. Principal amarelo com texto ink e seta; secundário com contorno cream. Fora do hero, os botões com canto de 8 px do mockup também são aceitos (decisão do time, nov/2026).
- **Sem tag de seção:** o site não usa mais a tag `</NOME DA SEÇÃO>` do mockup; as seções começam direto no título (decisão do time, nov/2026).
- Fundo do hero escuro com textura sutil de pontos (`radial-gradient` 1px a cada 8px).
- Cantos retos por padrão. Cards claros com 16 px; cards de apoio com o corte diagonal (`border-radius: 0 48px 0 48px`).
- Sem gradientes, sem emoji, sem sombras suaves.

**Regra crítica de tipografia:** nenhuma barra amarela pode cobrir texto de outra linha. Use espaçamento entre linhas e `gap` suficientes para que as barras fiquem contidas na própria linha, inclusive com acentos (ex.: o "Â" de PIRÂMIDE).

## Regras de conteúdo (decisões do time)

- **Posicionamento:** falar apenas de **baixa renda** (os 10% mais pobres). Não usar nenhuma referência a jovens negros, pretos, pardos ou indígenas em textos, alts, metatags ou títulos de matérias.
- **Patrocínio:** não publicar valores de planos (Bronze/Prata/Ouro), parcelamento nem o trecho do RIR. Na página de empresas, o benefício fiscal aparece só de forma genérica.
- **Doação:** todos os botões de doar do site levam a `/doe` (`ROUTES.doe`). Na página, a doação é feita pelo pop-up da Doare. O subdomínio `doe.programadoresdoamanha.org.br` redireciona para `/pt/doe` (308, em `redirects()` do `next.config.mjs`), mantendo parâmetros como `?utm=`. `www.doe` redireciona para `doe` pelo painel da Vercel.
- **Formulários:** tudo via Google Forms (inscrição de jovens, mentoria, contato de empresas). Nada de HubSpot. Crie os links como constantes em um único arquivo (`content/links.ts`) para facilitar a troca.
- **Domínio:** todos os links internos e absolutos usam `programadoresdoamanha.org.br` (o site atual tem links quebrados para `.org`, sem o `.br`). O DNS do domínio é gerenciado na Vercel (nameservers da Vercel); `doe` e `www.doe` são CNAME para a Vercel e estão ligados a este projeto.
- **Contato:** `contato@programadoresdoamanha.org.br`.
- **Fontes dos dados:** 1,8% vem do Atlas da Mobilidade Social; 9 gerações vem do Global Social Mobility Index 2020; pirâmide de renda vem só do IBGE, por meio da PNAD Contínua – Rendimento de Todas as Fontes, com dados de 2024 (a FGV IBRE saiu por decisão do time, nov/2026). Exibir as fontes nas seções correspondentes.
- Copy em português brasileiro, sem travessões longos (—). Não inventar números, nomes ou depoimentos: o que faltar vira placeholder visível `[ASSIM]`.

## Gráficos

- `/` e `/impacto`: curva salarial dos alumni (Ano 0: R$ 2.423 · Ano 1: R$ 2.700 · Ano 2: R$ 4.833 · Ano 3: R$ 8.662) com a linha do top 10% (R$ 8.034) marcada. Barras em escala real, último ano em purple. A etiqueta da linha do top 10% fica à esquerda, para não encostar na última barra.
- `/impacto`: pirâmide de renda (Top 1% R$ 21.767 · Top 5% R$ 10.313 · Top 10% R$ 8.034 · Média Brasil R$ 2.020 · Jovens 18 a 24 R$ 1.726), com o título "Renda mensal dos trabalhadores brasileiros".
- Os títulos dos gráficos ficam centralizados.
- Fazer em SVG ou HTML/CSS acessível (com texto alternativo ou tabela), sem biblioteca pesada.

## Qualidade

- Responsivo até 360 px de largura, sem rolagem horizontal.
- Acessibilidade: HTML semântico, `alt` em todas as imagens, contraste AA, foco visível (contorno amarelo de 3 px).
- SEO: `title` e `description` por página, Open Graph, `sitemap.xml`. A verificação do Google é feita fora do código, no Search Console (não precisa de meta tag).
- Manter `@vercel/analytics`.
- Rodar `next build` e `next lint` sem erros antes de abrir o PR.

## Fluxo de trabalho

1. Criar uma branch por página (ex.: `feat/pagina-sobre`) a partir de `develop` atualizada.
2. Home, `/impacto`, `/sobre`, `/doe` e `/contrate` já estão no ar. Falta a página de empresas que querem doar, em `/empresas`.
3. Commits pequenos, um por página ou componente.
4. Abrir PR para `develop`. A Vercel gera o preview para o time validar.
5. Nunca fazer push direto em `main` ou `develop`.

## Pendências (não bloqueiam a construção, deixar como placeholder)

- Mosaico do hero: substituir o recorte provisório pelo arquivo original em alta resolução e confirmar a autorização de uso de imagem de todas as pessoas.
- Logos dos parceiros (manter a lista atual por enquanto; os arquivos estão em `public/assets`).
- Matérias de imprensa: os links do Brazil Journal e do iFood em `/sobre` ainda levam a matérias que citam jovens negros no endereço e no título. Trocar por matérias de 2025 e 2026 quando chegarem.
- Links reais dos Google Forms.
- Site antigo de doação no Tilda: a empresa que o mantinha precisa despublicar a página e remover o domínio `doe` do projeto (a PdA não tem acesso ao Tilda). O DNS já não aponta para lá.
- Futuro da página "Apoie um aluno" e do PdA Labs no site.
