/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-197627906-1",
};

//Home Page
const greeting = {
  title: "Saudações!",
  title2: "Araujo.Barros",
  logo_name_a: "{dson",
  logo_name_b: "(Araujo) => {dso",
  logo_name_c: "}",
  nickname: "",
  full_name: "Edson Araujo de Barros Junior",
  subTitle:
    "Estudante de Desenvolvimento Full Stack, Entusiasta do mercado financeiro  🗠.",
  resumeLink:
    "https://drive.google.com/file/d/1WKpasCW2kWhCLXIzPeXHzm51L_mvswha/view?usp=sharing",
  mail: "araujo.barros@matematica.ufrj.br",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/araujobarros",
  linkedin: "https://www.linkedin.com/in/araujo-barros/",
  gmail: "araujo.barros@matematica.ufrj.br",
  gitlab: "",
  facebook: "",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Desenvolvimento Full Stack",
      fileName: "FullStackImg",
      skills: [
        " Desenvolvimento de APIs backend em NodeJs, Express, Django e SpringBoot.",
        " Domínio na tecnologia React, em conjunto com Redux e Context API.",
        " Criação de sites responsivos com ferramentas como Bulma e Bootstrap.",
        " Experiência com Git, GitHub e metodologias ágeis.",
        " Habituado com metodologia ativa de ensino, o que possibilita facilidade na aprenizagem de novas tecnologias.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6aac3d",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodejs",
          style: {
            color: "#6aac3d",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#31648c",
          },
        },        
        {
          skillName: "Sequelize",
          fontAwesomeClassname: "simple-icons:sequelize",
          style: {
            color: "#2379bd",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#812f2f",
          },
        },
        {
          skillName: "Bulma",
          fontAwesomeClassname: "simple-icons:bulma",
          style: {
            color: "#11d1b2",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952b3",
          },
        },
        {
          skillName: "Material-UI",
          fontAwesomeClassname: "simple-icons:materialui",
          style: {
            color: "#1a76d2",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Trybe",
      subtitle: "Formação em Desenvolvimento Web",
      logo_path: "Trybe-I.png",
      alt_name: "Trybe",
      duration: "set-2020",
      descriptions: [
        "No módulo de Fundamentos do desenvolvimento Web foram abordadod tópicos como HTML, CSS, JS, Git, e Unix & Bash",
        "Em Desenvolvimento Front-end os tópicos anteriores foram melhor desenvolvidos além da implementação do React com manipulação do  estado nos componentes e globalmente usando ferramentas como Redux,ContextAPI e React Hooks, e bibliotecas RTL para testar componentes síncronos e assíncronos.",
        "Em Back-end aprendi Banco de dados, Rest, Server-side, Autenticação, Segurança e Deploy ",
        "Em Introdução à Ciência da Computação foram abordados Estrutura de dados, Paradigmas de Programação, Python e Arquitetura de Computadores",
      ],
      website_link: "https://www.betrybe.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introdução a Segurança Cibernética",
      subtitle: "CISCO",
      logo_path: "I2CS__1_.png",
      certificate_link:
        "https://www.credly.com/badges/9c9474a0-2cd1-49ca-bee1-650905cac36e/linked_in",
      alt_name: "CyberSecurity CISCO",
    },
    {
      title: "Learn-A-Thon",
      subtitle: "CISCO",
      logo_path: "learnathon.png",
      certificate_link:
        "https://www.credly.com/badges/14c7055b-b765-4c9a-9cb2-9be8aa0eea08/linked_in",
      alt_name: "Learn-A-Thon",
    },
    {
      title: "Aceleração Java",
      subtitle: "Codenation/Trybe",
      logo_path: "Trybe-I.png",
      certificate_link:
        "https://smartcerts.co/certificate/dyapeazj",
      alt_name: "Aceleração Java",
    },
    {
      title: "Programação de dispositivos móveis",
      subtitle: "UFRN",
      logo_path: "brasaoUFRN.png",
      certificate_link: "http://www.sigaa.ufrn.br/documentos/",
      alt_name: "Brasão UFRN",
    },
    {
      title: "Derivativos Financeiros",
      subtitle: "Unicesumar",
      logo_path: "unicesumar.png",
      certificate_link:
        "https://producao.caf.ufv.br/pronatec/scripts/validacaoCertificadoNC.php",
      alt_name: "UFV",
    },
    {
      title: "Matematica Financeira",
      subtitle: "Fundação bradesco",
      logo_path: "fundacao-bradesco.png",
      certificate_link: "https://www.ev.org.br/",
      alt_name: "Fundação Bradesco",
    },
    {
      title: "MEI",
      subtitle: "UFV",
      logo_path: "brasaoUfV.gif",
      certificate_link:
        "https://www.ufv.br/",
      alt_name: "UFV",
      color_code: "#2AAFED",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiência",
  subtitle: "Mercado Financeiro",
  description:
    "Opero no mercado financeiro há cinco anos, montando novas estratégias para auferir lucro em curto prazo em derivativos financeiros, atualmente busco meios para automatizá-las",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Mais Experiências Profissionais",
      experiences: [
        {
          title: "Técnico em química de petróleo pleno",
          company: "PETROBRAS",
          company_url: "https://petrobras.com.br/pt/",
          logo_path: "logoBR.png",
          duration: "set 2010 - oct 2016",
          location: "",
          description: [
            "Experiência com amostragem, tratamento e limpeza de rochas para análises de petrofísica, MEV e DRX;",
            "Confecção de lâminas petrográficas e controle de qualidade em lâminas confeccionadas por parceiros;",
            "Responsável por elaborar, implantar, revisar, avaliar e validar procedimentos e normas técnicas operacionais;",
            " Dar suporte técnico e analítico na resolução de problemas operacionais, realizando ensaios e formulações;",
            "Otimizar procedimentos técnico-operacionais, definindo o melhor processo analítico, técnicas e sistemas a serem adotados;",
            "Elaborar a orçamentação e as especificações técnicas para contratação de bens e serviços;",
            "Inspecionar, conferir e controlar produtos químicos, equipamentos, materiais e reagentes químicos recebidos, emitir parecer técnico;",
            "Atuar no processo para o atendimento das normas relativas a segurança, proteção ao meio ambiente, saúde, sistemas de gestão e responsabilidade social, a fim de assegurar a boa operação do negócio e o alcance das metas;",
            "Desenvolvimento de novas metodologias e análises, novos processos e produtos.",
          ],
          color: "#00A59D",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contato",
    profile_image_path: ["Edson.jpg", "familia.jpg", "piscina-Helena.jpg"],
    description:
      "Abaixo encontram-se alguns meios para entrar em contato comigo e meu Currículo.",
  }
};
const projects = {
  title: "Projetos",
  description:
    "A maioria dos meu projetos foram feitos durante o curso de desenvolvimento Full Stack na Trybe, Envolvem tecnologias e ferramentas contextualizadas com a demanda atual do mercado, como React, CSS, JS, MySQL, MongoDB,  NodeJS, entre outras. Como meu portfólio está em constante melhoria ainda não fiz o upload de todos os meus projetos.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Projetos finalizados",

      detailedProjects: [
        {
          id: "0",
          name: "Central de Erros",
          device: "PC",
          urlSite: "https://error-center-qq.herokuapp.com/swagger-ui.html",
          urlRepo: "https://github.com/araujobarros/Error_Center",
          preview: "Token-2021-09-28_09.39.34.gif",
          description:
            "Projeto final da aceleração Java. Consiste na criação de uma API para centralizar os registros de erros em um banco de dados relacional. Nesta aplicação deverá ser possível cadastrar erros e fazer consultas, além da necessidade de autenticação.",
          languages: [
            {
              name: "Java",
              iconifyClass: "logos:java",
            },
            {
              name: "SpringBoot",
              iconifyClass: "logos:spring-icon",
            },
            {
              name: "OAuth2",
              iconifyClass: "logos:oauth",
            },
            {
              name: "PostgreSQL",
              iconifyClass: "logos:postgresql",
            },
            {
              name: "Swagger",
              iconifyClass: "logos:swagger",
            },
          ],
        },
        {
          id: "1",
          name: "MagPy-Instruct",
          device: "PC",
          urlSite: "https://magpy-instruct-api.herokuapp.com",
          urlRepo: "https://github.com/araujobarros/Magpy-Instruct",
          preview: "MagPy_Print.png",
          description:
            "Projeto realizado com Django Rest Framework, para cadastro e consulta de pacotes em banco de dados.",
          languages: [
            {
              name: "Python",
              iconifyClass: "logos:python",
            },
            {
              name: "Django REST Framework",
              iconifyClass: "vscode-icons:file-type-django",
            },
            {
              name: "PostgreSQL",
              iconifyClass: "logos:postgresql",
            },
            {
              name: "Swagger",
              iconifyClass: "logos:swagger",
            },
          ],
        },
        {
          id: "2",
          name: "Do Eat!",
          device: "mobile",
          urlSite: "https://doeat-78254.web.app/comidas",
          urlRepo: "https://github.com/araujobarros/Do-Eat-",
          preview: "do_eat_preview.gif",
          description:
            "Este foi o último projeto em grupo do módulo de Front-end da Trybe, onde houve muita cooperação e entrega da parte dos integrantes. O mesmo consiste em uma aplicação de receitas com muitas funcionalidades, como pesquisa por região, por nome da receita, indicação de drinks que possam harmonizar, entre outras. No entanto, o ponto forte ao meu ver, foi a implementação de busca de receitas por múltiplos ingredientes, idealizada com a iniciativa do meu grupo, portanto além do que solicitado em requisitos.",
          languages: [
            {
              name: "CSS3",
              iconifyClass: "vscode-icons:file-type-css",
            },
            {
              name: "React",
              iconifyClass: "logos-react",
            },
            {
              name: "JavaScript",
              iconifyClass: "logos-javascript",
            },
          ],
        },
        {
          id: "3",
          name: "Star Wars Planets List",
          device: "mobile",
          urlSite: "https://starwars-45bd8.web.app",
          urlRepo: "https://github.com/araujobarros/StarWars",
          preview: "star_wars_preview.gif",
          description:
            "Este foi o último projeto solo do módulo de Front-end da Trybe, e como foi um projeto com um tema Maaaravilhoso, e com funcionalidades que gosto muito de implementar como pesquisas, filtros e ordenação utilizando HOF, decidi deixá-lo com a minha cara.",
          languages: [
            {
              name: "CSS3",
              iconifyClass: "vscode-icons:file-type-css",
            },
            {
              name: "React",
              iconifyClass: "logos-react",
            },
            {
              name: "JavaScript",
              iconifyClass: "logos-javascript",
            },
          ],
        },
      ],
    },
    {
      title: "Projetos em desenvolvimento",
      detailedProjects: [
        {
          id: "0",
          name: "Sra. Orem",
          device: "mobile",
          urlSite: "https://srorem-fc8aa.web.app/Cardapio",
          urlRepo: "https://github.com/araujobarros/Sra.Orem",
          preview: "sra_Orem_preview.gif",
          description:
            "Sra.Orem é uma aplicação em desenvolvimento para exposição das guloseimas do negócio da minha esposa, futuramente pretendo expandir para que seja uma ferramente onde se possa fazer compras e até montar um presente por exemplo, como uma cesta de café da manhã. Enquanto não tenho as informações necessárias para concluir a aplicação, eu utilizo uma API do Mercado Livre com os produtos de uma loja de chocolates aleatória.",
          languages: [
            {
              name: "CSS3",
              iconifyClass: "vscode-icons:file-type-css",
            },
            {
              name: "React",
              iconifyClass: "logos-react",
            },
            {
              name: "JavaScript",
              iconifyClass: "logos-javascript",
            },
          ],
        },
      ],
    },
  ],
};

const references = [
  {
    id: 0,
    name: "Portfolio template",
    url: "https://github.com/harikanani/PortfolioV2",
  },
  {
    id: 1,
    name: "Hexagon Tutorial",
    url: "https://jtauber.github.io/articles/css-hexagon.html",
  },
  {
    id: 3,
    name: "Animations",
    url: "https://www.imaginarycloud.com/blog/how-to-make-css-animations/",
  },
];

const candles = [
  "candle.png",
  "candle2.png",
  "candle3.png",
  "candle4.png",
  "candle5.png",
  "candle6.png",
  "candleR.png",
  "candle2R.png",
  "candle3R.png",
  "candle4R.png",
  "candle5R.png",
  "candle6R.png",
];

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  candles,
};
