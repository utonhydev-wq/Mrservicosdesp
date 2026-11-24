import heroBackdropImg from '../assets/images/hero_automotive_driving_1795518801138.jpg';

export const BUSINESS = {
  shortName: 'MR Serviços',
  fullName: 'MR Serviços – Despachante Veicular',
  tagline: 'Despachante Veicular em Piedade, Jaboatão dos Guararapes – PE',
  whatsappDisplay: '(81) 99544-8503',
  whatsappNumber: '5581995448503',
  whatsappBaseUrl: 'https://wa.me/5581995448503',
  instagramHandle: '@mrservicosdesp',
  instagramUrl: 'https://www.instagram.com/mrservicosdesp/',
  addressLine: 'Av. Barreto de Menezes, 538',
  neighborhoodCity: 'Piedade, Jaboatão dos Guararapes – PE',
  fullAddress: 'Av. Barreto de Menezes, 538 – Piedade, Jaboatão dos Guararapes – PE',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+Barreto+de+Menezes,+538+-+Piedade,+Jaboat%C3%A3o+dos+Guararapes+-+PE',
  assets: {
    logo: '/assets/aistudio/mr_servicos_logo_original_melhorada_c9fc6dea.png',
    storefront: 'https://i.postimg.cc/nrmFDGNs/Screenshot-20261124-080513-2.jpg',
    heroBackdrop: heroBackdropImg,
  },
} as const;

export function buildWhatsAppUrl(message?: string): string {
  if (!message || !message.trim()) {
    return BUSINESS.whatsappBaseUrl;
  }
  return `${BUSINESS.whatsappBaseUrl}?text=${encodeURIComponent(message.trim())}`;
}

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string;
  whatsappMessage: string;
  iconKey: 'first-license' | 'add-category' | 'toxicology' | 'general-services';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'primeira-habilitacao',
    number: '01.',
    title: 'Primeira Habilitação',
    description: 'Cuidamos de todo o processo para você tirar sua primeira CNH.',
    details: 'Orientação completa desde a abertura do processo até a emissão da sua carteira.',
    whatsappMessage:
      'Olá! Vim pelo site da MR Serviços e gostaria de consultar informações sobre Primeira Habilitação.',
    iconKey: 'first-license',
  },
  {
    id: 'adicao-categoria',
    number: '02.',
    title: 'Adição de Categoria',
    description: 'Inclua novas categorias na sua CNH com praticidade e segurança.',
    details: 'Acompanhamento ágil de todas as etapas documentais junto ao DETRAN.',
    whatsappMessage:
      'Olá! Vim pelo site da MR Serviços e gostaria de consultar informações sobre Adição de Categoria.',
    iconKey: 'add-category',
  },
  {
    id: 'exames-toxicologicos',
    number: '03.',
    title: 'Exames Toxicológicos',
    description: 'Atendimento para exames toxicológicos das categorias C, D e E.',
    details: 'Atendimento organizado para motoristas profissionais e exigências periódicas.',
    whatsappMessage:
      'Olá! Vim pelo site da MR Serviços e gostaria de consultar informações sobre Exames Toxicológicos (categorias C, D e E).',
    iconKey: 'toxicology',
  },
  {
    id: 'servicos-gerais',
    number: '04.',
    title: 'Serviços em Geral de Habilitação',
    description: 'Renovação, mudança de categoria, segunda via, CNH definitiva e outros serviços.',
    details: 'Soluções completas em documentação de habilitação sem perda de tempo.',
    whatsappMessage:
      'Olá! Vim pelo site da MR Serviços e gostaria de consultar informações sobre Serviços em Geral de Habilitação.',
    iconKey: 'general-services',
  },
];

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    number: '01.',
    title: 'Atendimento personalizado',
    description:
      'Cada processo de habilitação tem suas particularidades. Analisamos o seu caso individualmente para oferecer a orientação correta.',
  },
  {
    number: '02.',
    title: 'Praticidade na resolução dos processos',
    description:
      'Facilitamos a organização das etapas e documentações para que você economize tempo no seu dia a dia.',
  },
  {
    number: '03.',
    title: 'Suporte e orientação ao cliente',
    description:
      'Esclarecemos dúvidas e acompanhamos você do primeiro contato até a conclusão do atendimento.',
  },
  {
    number: '04.',
    title: 'Compromisso e transparência',
    description:
      'Comunicação clara sobre prazos, documentos necessários e andamento de cada solicitação.',
  },
  {
    number: '05.',
    title: 'Mais tranquilidade e menos burocracia',
    description:
      'Cuidamos da parte burocrática com seriedade para que você conduza seu processo com segurança.',
  },
];
