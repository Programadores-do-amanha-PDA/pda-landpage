import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// Páginas que só existem em português: o /en delas redireciona para /pt.
const PT_ONLY = /^\/(pt|en)(\/(impacto|sobre|doe|contrate))?\/?$/;

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // O next-intl anuncia ao Google uma versão /en de toda página (cabeçalho Link com
  // hreflang). Nas páginas só em português essa versão não existe, então o cabeçalho sai.
  if (PT_ONLY.test(request.nextUrl.pathname)) {
    response.headers.delete("link");
  }

  return response;
}

export const config = {
  matcher: ["/", "/(pt|en)/:path*"],
};
