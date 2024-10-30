import mixpanel from "mixpanel-browser";

// Configuração do Mixpanel
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
console.log(MIXPANEL_TOKEN)

// Interface para as props do tracking
interface TrackingProps {
  [key: string]: any;
}

// Classe para gerenciar o analytics
class Analytics {
  private initialized: boolean = false;

  constructor() {
    if (MIXPANEL_TOKEN) {
      try {
        mixpanel.init(MIXPANEL_TOKEN, {
          debug: process.env.NODE_ENV !== "production",
          track_pageview: true,
        });
        this.initialized = true;
      } catch (error) {
        console.error("Erro ao inicializar Mixpanel:", error);
        this.initialized = false;
      }
    }
  }

  track(eventName: string, properties?: TrackingProps) {
    if (!this.initialized) {
      console.warn("Analytics não inicializado");
      return;
    }

    try {
      mixpanel.track(eventName, properties);
    } catch (error) {
      console.error("Erro ao enviar evento:", error);
    }
  }
}

// Exporta uma única instância
export const Mixpanel = new Analytics();

// Uso:
// analytics.track('Button Clicked', { buttonId: 'submit' });
