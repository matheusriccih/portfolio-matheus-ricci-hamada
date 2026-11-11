/*
 * Fonte única de dados do portfólio.
 * Preencha somente valores confirmados; links vazios não são exibidos na interface.
 */
export const profileData = {
  person: {
    name: 'Matheus Ricci Hamada',
    shortName: 'Matheus Ricci',
    initials: 'MR',
    role: 'Analista de Suporte / TI',
    location: 'Londrina, Paraná, Brasil',
    photo: './assets/matheus-ricci-hamada.png',
    resumeUrl: '', // Ex.: './assets/curriculo-matheus-ricci-hamada.pdf'
  },
  hero: {
    eyebrow: 'Tecnologia · Suporte · Evolução contínua',
    statement: 'Conectando tecnologia, pessoas e soluções.',
    description: 'Profissional de Tecnologia da Informação, com experiência na área de suporte técnico e atuação em ambiente corporativo. Estudante de Análise e Desenvolvimento de Sistemas, interessado em desenvolvimento de software, infraestrutura e soluções tecnológicas. Busco evoluir constantemente, aplicar conhecimentos na prática e contribuir para resultados por meio da tecnologia.',
  },
  about: {
    title: 'Tecnologia com escuta, prática e evolução.',
    paragraphs: [
      'Minha trajetória em TI começou como estagiário e seguiu com a efetivação para atuação em tempo integral — uma experiência que reforçou a importância de aprender na prática e colaborar com pessoas.',
      'Hoje, concilio a vivência em suporte com a graduação em Análise e Desenvolvimento de Sistemas. Tenho interesse em desenvolvimento de software, infraestrutura e soluções tecnológicas que tornem o trabalho mais simples e eficiente.',
    ],
    traits: ['Aprendizado contínuo', 'Resolução de problemas', 'Organização', 'Raciocínio lógico'],
  },
  experience: {
    title: 'Uma trajetória construída na prática.',
    current: {
      role: 'Analista de Suporte / TI',
      company: '',
      period: '',
      description: 'Experiência profissional na área de TI, com trajetória iniciada como estagiário e posterior efetivação.',
      responsibilities: [],
      results: [],
    },
    previous: {
      role: 'Estagiário de TI',
      company: '',
      period: '',
      description: 'Início da trajetória profissional em tecnologia, construindo experiência prática no ambiente corporativo.',
    },
  },
  education: {
    degree: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Positivo',
    learning: ['Desenvolvimento web', 'Lógica de programação', 'Banco de dados', 'Cursos complementares'],
  },
  skills: [
    { title: 'Desenvolvimento', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'PHP', 'Java', 'Python', 'Go'] },
    { title: 'Dados e ferramentas', items: ['SQL', 'MySQL', 'Supabase', 'Git', 'GitHub', 'Tailwind CSS'] },
    { title: 'Infraestrutura e TI', items: ['Suporte técnico', 'Redes', 'Infraestrutura', 'Microsoft 365', 'Monitoramento', 'Segurança', 'Telefonia IP'] },
  ],
  projects: [
    {
      name: 'Finanças Matheus',
      type: 'Projeto pessoal',
      description: 'Dashboard de controle financeiro pessoal para acompanhar receitas, despesas, movimentações e metas.',
      stack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'SQL'],
      url: '',
      repository: '',
    },
    {
      name: 'MGZ Creator',
      type: 'Iniciativa empreendedora',
      description: 'Projeto voltado a soluções digitais, infraestrutura, redes, segurança e desenvolvimento para empresas.',
      stack: ['Infraestrutura', 'Redes', 'Desenvolvimento web'],
      url: 'https://mgzcreator.com.br',
      repository: '',
    },
    {
      name: 'Brasil Conectado',
      type: 'Projeto desenvolvido pela MGZ Creator',
      description: 'Projeto desenvolvido pela MGZ Creator.',
      stack: ['MGZ Creator'],
      url: 'https://brasilconectado.com.br',
      repository: '',
    },
  ],
  venture: {
    title: 'Além da carreira, também construo projetos.',
    text: 'Por meio da MGZ Creator, exploro soluções voltadas às necessidades tecnológicas de empresas, conectando infraestrutura, desenvolvimento e inovação.',
    url: 'https://mgzcreator.com.br',
  },
  goals: ['Suporte técnico', 'Infraestrutura de TI', 'Desenvolvimento Front-end', 'Desenvolvimento Back-end', 'Desenvolvimento Full Stack', 'Operações de TI'],
  contacts: {
    linkedin: 'https://www.linkedin.com/in/matheus-ricci-7483ab23b/',
    email: '',
    whatsapp: '',
  },
};
