export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export interface Capability {
  no: string;
  title: string;
  body: string;
}

export interface Project {
  tag: string;
  problem: string;
  body: string;
}

export interface Strings {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    approach: string;
    contact: string;
    ariaLabel: string; // mobile menu dialog aria-label
    toggleMenu: string; // hamburger aria-label
    home: string; // brand link aria-label
  };
  hero: {
    eyebrow: string;
    heading: string; // contains one {em}...{/em} pair
    sub: string;
    ctaContact: string;
    ctaWork: string;
    captionKanji: string; // text after the kanji glyph
  };
  capabilities: {
    eyebrow: string;
    heading: string;
    items: Capability[];
  };
  projects: {
    heading: string;
    items: Project[];
  };
  philosophy: {
    eyebrow: string;
    quote: string; // contains one {em}...{/em} pair
    principles: string[];
  };
  contact: {
    heading: string;
    sub: string;
    toggleForm: string;
    toggleCall: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formSubjectOptional: string;
    formSubjectHint: string;
    formMessage: string;
    formSubmit: string;
    formFallbackPrefix: string;
    formFallbackSuffix: string;
    statusSending: string;
    statusOk: string;
    statusErrorGeneric: string;
    statusErrorNetwork: string;
  };
  footer: {
    credits: string; // "Onigiri isotype via " — Vecteezy.com link stays as-is
  };
}

export const strings: Record<Locale, Strings> = {
  en: {
    meta: {
      title: "Musubi — Engineering studio for growing companies",
      description:
        "Musubi designs and builds automations, data platforms, and AI systems through small, measurable, incremental delivery.",
    },
    nav: {
      work: "Work",
      approach: "Approach",
      contact: "Contact",
      ariaLabel: "Navigation",
      toggleMenu: "Toggle menu",
      home: "Musubi home",
    },
    hero: {
      eyebrow: "Engineering studio",
      heading: "We tie the loose ends into systems that {em}simply work{/em}.",
      sub: "Musubi designs and builds automations, data platforms, and AI systems for growing companies — delivered in small, measurable increments.",
      ctaContact: "Start a conversation",
      ctaWork: "See what we do",
      captionKanji: "— musubi, to bind and connect.",
    },
    capabilities: {
      eyebrow: "What we do",
      heading: "Four ways we help you move.",
      items: [
        {
          no: "01",
          title: "Connect",
          body: "Tie together the systems and data your team already has — no rip-and-replace.",
        },
        {
          no: "02",
          title: "Integrate",
          body: "Make disconnected tools work as one, without a platform migration.",
        },
        {
          no: "03",
          title: "Automate",
          body: "Take repetitive work off your team's plate, safely and incrementally.",
        },
        {
          no: "04",
          title: "Scale",
          body: "Grow what already works instead of rebuilding it.",
        },
      ],
    },
    projects: {
      heading: "Five problems we've solved before.",
      items: [
        {
          tag: "Data platform",
          problem:
            "Your data lives in databases, spreadsheets, and SaaS tools — but there's no single place to query it.",
          body: "We design and build the platform layer: ingestion, storage, transformation. Something your team can own without a dedicated engineering org.",
        },
        {
          tag: "Legacy modernization",
          problem:
            "Reports take hours to run. The BI tool nobody remembers buying is still running critical dashboards.",
          body: "We migrate what matters, retire what doesn't, and replace brittle pipelines with something maintainable — without stopping the business while we do it.",
        },
        {
          tag: "DataOps",
          problem:
            "Deployments need manual steps. Pipelines break silently. Nobody knows what the cloud bill is actually for.",
          body: "We bring CI/CD, observability, and cost tracking to your data workflows so failures are caught early and infrastructure is understood.",
        },
        {
          tag: "Data governance",
          problem:
            "Access controls exist in a spreadsheet. Nobody knows where a number comes from. Compliance is a document, not a system.",
          body: "We implement governance that's enforced by the platform — data contracts, lineage, attribute-based access — not by good intentions.",
        },
        {
          tag: "AI-assisted workflows",
          problem:
            "Your team spends time on repetitive work that a well-configured agent could handle.",
          body: "We deploy AI agents that accelerate data engineering work and assistants that enforce standards across teams — using the same tools we use internally.",
        },
      ],
    },
    philosophy: {
      eyebrow: "Approach",
      quote:
        "Software ages when it tries to solve everything on day one. We prefer small, understandable, evolvable systems — each delivery solving a real problem, integrating with what exists, and leaving the path open for the next step. The best technology is the one that {em}disappears{/em} behind people's work.",
      principles: [
        "We don't replace systems for the sake of it. We connect what already works.",
        "We don't design giant platforms. We compose small pieces.",
        "We don't deliver projects. We build capabilities.",
        "We build systems the client's team can understand, operate, and extend.",
      ],
    },
    contact: {
      heading: "Let's tie the next piece together.",
      sub: "Tell us where the loose ends are. We'll help you connect them into something that simply works.",
      toggleForm: "Write a message",
      toggleCall: "Book a 30 min call",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formSubjectOptional: "(optional)",
      formSubjectHint:
        "Messages are scanned and triaged by hand — a clear subject makes it easier for us to pick the thread back up.",
      formMessage: "Message",
      formSubmit: "Send message",
      formFallbackPrefix: "Prefer email? Write to",
      formFallbackSuffix: "directly.",
      statusSending: "Sending…",
      statusOk: "Message sent — we'll get back to you soon.",
      statusErrorGeneric: "Something went wrong. Please try again or email us directly.",
      statusErrorNetwork: "Network error. Please try again or email us directly.",
    },
    footer: {
      credits: "Onigiri isotype via",
    },
  },
  es: {
    meta: {
      title: "Musubi — Estudio de ingeniería para empresas en crecimiento",
      description:
        "Musubi diseña y construye automatizaciones, plataformas de datos y sistemas de IA mediante entregas pequeñas, medibles e incrementales.",
    },
    nav: {
      work: "Servicios",
      approach: "Filosofía",
      contact: "Hablemos",
      ariaLabel: "Navegación",
      toggleMenu: "Alternar menú",
      home: "Inicio de Musubi",
    },
    hero: {
      eyebrow: "Estudio de ingeniería",
      heading: "Atamos los cabos sueltos en sistemas que {em}simplemente funcionan{/em}.",
      sub: "Musubi diseña y construye automatizaciones, plataformas de datos y sistemas de IA para empresas en crecimiento, con entregas pequeñas y medibles.",
      ctaContact: "Conversemos",
      ctaWork: "Ver qué hacemos",
      captionKanji: "— musubi: atar y conectar.",
    },
    capabilities: {
      eyebrow: "Qué hacemos",
      heading: "Cuatro formas en que te ayudamos a avanzar.",
      items: [
        {
          no: "01",
          title: "Conectar",
          body: "Unimos los sistemas y datos que tu equipo ya tiene — sin reemplazar todo desde cero.",
        },
        {
          no: "02",
          title: "Integrar",
          body: "Hacemos que herramientas desconectadas funcionen como una sola, sin una migración de plataforma.",
        },
        {
          no: "03",
          title: "Automatizar",
          body: "Le quitamos a tu equipo el trabajo repetitivo, de forma segura e incremental.",
        },
        {
          no: "04",
          title: "Escalar",
          body: "Hacemos crecer lo que ya funciona, en lugar de reconstruirlo.",
        },
      ],
    },
    projects: {
      heading: "Cinco problemas que ya resolvimos.",
      items: [
        {
          tag: "Plataforma de datos",
          problem:
            "Tus datos viven en bases de datos, hojas de cálculo y herramientas SaaS — pero no hay un solo lugar para consultarlos.",
          body: "Diseñamos y construimos la capa de plataforma: ingesta, almacenamiento, transformación. Algo que tu equipo pueda operar sin necesitar un área de ingeniería dedicada.",
        },
        {
          tag: "Modernización de sistemas heredados",
          problem:
            "Los reportes tardan horas en generarse. La herramienta de BI que nadie recuerda haber comprado todavía sostiene dashboards críticos.",
          body: "Migramos lo que importa, damos de baja lo que no, y reemplazamos pipelines frágiles por algo mantenible — sin detener el negocio mientras lo hacemos.",
        },
        {
          tag: "DataOps",
          problem:
            "Los despliegues necesitan pasos manuales. Los pipelines fallan en silencio. Nadie sabe realmente en qué se va la factura de la nube.",
          body: "Traemos CI/CD, observabilidad y seguimiento de costos a tus flujos de datos, para detectar fallas a tiempo y entender la infraestructura.",
        },
        {
          tag: "Gobernanza de datos",
          problem:
            "Los controles de acceso viven en una hoja de cálculo. Nadie sabe de dónde sale un número. El cumplimiento es un documento, no un sistema.",
          body: "Implementamos gobernanza que la plataforma hace cumplir — contratos de datos, lineage, acceso basado en atributos — no buenas intenciones.",
        },
        {
          tag: "Flujos de trabajo asistidos por IA",
          problem:
            "Tu equipo pierde tiempo en trabajo repetitivo que un agente bien configurado podría manejar.",
          body: "Implementamos agentes de IA que aceleran el trabajo de ingeniería de datos y asistentes que hacen cumplir estándares entre equipos — usando las mismas herramientas que usamos internamente.",
        },
      ],
    },
    philosophy: {
      eyebrow: "Enfoque",
      quote:
        "Los sistemas que intentan resolverlo todo desde el primer día suelen convertirse en sistemas difíciles de entender y mantener. Preferimos construir de forma incremental: cada entrega resuelve un problema real, se integra con lo existente y deja abierto el camino para el siguiente paso. La mejor tecnología es la que potencia el trabajo de las personas sin convertirse en {em}protagonista{/em}.",
      principles: [
        "No reemplazamos sistemas porque sí. Conectamos lo que ya funciona.",
        "No diseñamos plataformas gigantes. Componemos piezas pequeñas.",
        "No entregamos proyectos. Construimos capacidades.",
        "Construimos sistemas que el equipo del cliente puede entender, operar y extender.",
      ],
    },
    contact: {
      heading: "Atemos la próxima pieza juntos.",
      sub: "Cuéntanos dónde están los cabos sueltos. Te ayudaremos a conectarlos en algo que simplemente funcione.",
      toggleForm: "Escribir consulta",
      toggleCall: "Agendar un meet",
      formName: "Nombre",
      formEmail: "Email",
      formSubject: "Asunto",
      formSubjectOptional: "(opcional)",
      formSubjectHint:
        "Los mensajes se revisan y priorizan a mano — un asunto claro nos facilita retomar la conversación.",
      formMessage: "Mensaje",
      formSubmit: "Enviar mensaje",
      formFallbackPrefix: "¿Prefieres el email? Escríbenos directo a",
      formFallbackSuffix: ".",
      statusSending: "Enviando…",
      statusOk: "Mensaje enviado — te responderemos pronto.",
      statusErrorGeneric:
        "Algo salió mal. Intenta de nuevo o escríbenos directo por email.",
      statusErrorNetwork:
        "Error de red. Intenta de nuevo o escríbenos directo por email.",
    },
    footer: {
      credits: "Isotipo onigiri vía",
    },
  },
};
