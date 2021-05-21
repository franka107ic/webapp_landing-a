window.IC_SAMPLE_SETUP = {
  title: "Webapp title",
  favicon: "FAVICON_URL",
  homepage: ".",
  styling: {
    look: {
      shadow: true,
      rounded: true,
    },
    colorPalette: {
      primaryColors: ["#00967D", "#10B981", "#34D399"],
      secondaryColors: ["#10B981", "#00967D", "#10B981"],
      complementary: {
        white: "#FEFEFE",
        black: "#222222",
        light: "#F6F7FE",
        dark: "#333333",
      },
    },
    fonts: {
      titles: '"Quicksand", sans-serif',
      default: '"Quicksand", sans-serif',
    },
  },
  static: {
    layout: {
      headerLogo: {
        src: "https://scontent.faqp3-1.fna.fbcdn.net/v/t1.6435-9/188063235_278100284028822_6423264595726889643_n.png?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeE-m6HiNNHUNgklvJDVMpqVfk1gIGr7aEB-TWAgavtoQGDQQYh8gu9Mzv2W5nE4V0k0Yuhai4msxzABOFBbEOek&_nc_ohc=8Ek3V3HGiIUAX_6uQtM&_nc_ht=scontent.faqp3-1.fna&oh=39200a24c1214111a020ffa0b7d498ac&oe=60CBE70B",
        heightScale: 5,
        widthScale: 5,
        action: {
          fnKey: "goToState",
          params: {
            stateName: "home",
            stateParams: {},
          },
        },
      },
      headerButtons: [
        {
          label: "Inicio",
          action: {
            fnKey: "goToState",
            params: {
              stateName: "home",
              stateParams: {},
            },
          },
        },
        {
          label: "Contacto",
          action: {
            fnKey: "goToState",
            params: {
              stateName: "contact",
              stateParams: {},
            },
          },
        },
        {
          label: "Servicios",
          action: {
            fnKey: "goToState",
            params: {
              stateName: "services",
            },
          },
          childs: [
            {
              label: "Páginas web",
              action: {
                fnKey: "goToState",
                params: {
                  stateName: "webPages",
                },
              },
            },
            {
              label: "Aplicaciones moviles",
              action: {
                fnKey: "goToState",
                params: {
                  stateName: "mobileApps",
                },
              },
            },
          ],
        },
      ],
      headerIcons: [
        {
          icon: "fab fa-facebook",
          action: {
            fnKey: "redirect",
            params: {
              url: "https://www.facebook.com/tdevts",
            },
          },
        },
        {
          icon: "fab fa-github",
          action: {
            fnKey: "redirect",
            params: {
              url: "https://github.com/TDevelopments",
            },
          },
        },
      ],
    },
  },
  states: [
    {
      key: "home",
      params: {
        stores: [],
        content: {
          blocks: [
            {
              type: "header",
              params: {
                title: "T-devs",
                subtitle: "Tu lo imaginas, nosotros te ayudamos a crearlo.",
                button: {
                  icon: "fab fa-servicestack",
                  label: "Servicios",
                  action: {
                    fnKey: "goToState",
                    params: {
                      stateName: "services",
                      stateParams: {},
                    },
                  },
                },
                wrap: {
                  title: "50%",
                  subtitle: "De descuento",
                },
                image: {
                  src: "https://5ffb76a091e821000827671c.projects.ideascloud.io/file-uploads/60a5d81e70cd5b00083002a9",
                  width: "600",
                },
              },
            },

            {
              type: "inline",
              params: {
                cards: [
                  {
                    img: "https://5ffb76a091e821000827671c.projects.ideascloud.io/file-uploads/60a5fc5289aea90009d39717",
                    title: {
                      text: "Web apps",
                      action: {},
                    },
                    text: "Desarrollamos páginas web personalizadas segun los requerimientos de tu empresa y en un tiempo record.",
                  },
                  {
                    img: "https://5ffb76a091e821000827671c.projects.ideascloud.io/file-uploads/60a5fc8f89aea90009d39718	",
                    title: {
                      text: "Mobile apps",
                      action: {},
                    },
                    text: "Somos especialistas en el desarrolo de aplicaciones mobiles multiplataforma (iOS y Android), esperando crear la app perfecta para ti.",
                  },
                  {
                    img: "https://5ffb76a091e821000827671c.projects.ideascloud.io/file-uploads/60a5fd3d89aea90009d3971a	",
                    title: {
                      text: "Desktop apps",
                      action: {},
                    },
                    text: "¿Necesitas una aplicacion de escritorio nativa?, Nosotros te la implementamos!",
                  },
                  {
                    img: "https://5ffb76a091e821000827671c.projects.ideascloud.io/file-uploads/60a5fe7389aea90009d3971c	",
                    title: {
                      text: "Fix apps",
                      action: {},
                    },
                    text: "Ya tienes una aplicación web, movil o de escritorio pero funciona mal o no hay nadie que le de soporte, te ayudaremos!",
                  },
                ],
              },
            },
            {
              type: "rightlist",
              params: {
                image:
                  "https://5ffb76a091e821000827671c.projects.ideascloud.io/file-uploads/60a69acf7a20a90009e81c9a	",
                title: "T-devs, una empresa comprometida contido",
                features: [
                  {
                    icon: "flaticon-chat-1",
                    title: "Soporte 24/7",
                    text: "Hay cosas que no pueden detenerse y en T-devs lo sabemos bien. Por ello le ofrecemos un soporte siempre activo que se ajusta a sus necesidades",
                  },
                  {
                    icon: "flaticon-heart",
                    title: "Monitorizacion",
                    text: "Explorar, analizar y visualizar sus registros es parte de nuestro trabajo primordial enn T-devs. Esto con el objetivo de resolver problemas operativos con facilidad.",
                  },
                  {
                    icon: "flaticon-route",
                    title: "En todo el mundo",
                    text: "Te proveemos nuestros servicios estes dondes estes, contamos con varias sedes alrededor del mundo",
                  },
                  {
                    icon: "flaticon-alarm-clock",
                    title: "Notificaciones",
                    text: "Te informamos constantemente de los cambios y las mejoras que encontremos en tu plataforma",
                  },
                ],
              },
            },
            {
              type: "leftlist",
              params: {
                image: "https://mobinnovatics.com/img/logos/firebase.png",
                title:
                  "Firebase is a serverless compute service that lets you run code",
                features: [
                  {
                    icon: "flaticon-chat-1",
                    title: "Support 24/7",
                    text: "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
                  },
                  {
                    icon: "flaticon-heart",
                    title: "Monitorization",
                    text: "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
                  },
                  {
                    icon: "flaticon-route",
                    title: "In the World",
                    text: "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
                  },
                  {
                    icon: "flaticon-alarm-clock",
                    title: "Notifications",
                    text: "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
                  },
                ],
              },
            },
            {
              type: "blockfeature",
              params: {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1280px-AWS_Simple_Icons_AWS_Cloud.svg.png",
                features: [
                  {
                    icon: "flaticon-wifi",
                    title: "Support 24/7",
                    text: "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
                  },
                  {
                    icon: "flaticon-heart",
                    title: "Monitorization",
                    text: "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
                  },
                  {
                    icon: "flaticon-route",
                    title: "In the World",
                    text: "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
                  },
                  {
                    icon: "flaticon-fingerprint-2",
                    title: "Backups",
                    text: "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
                  },
                  {
                    icon: "flaticon-photo-camera",
                    title: "Backups",
                    text: "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
                  },
                  {
                    icon: "flaticon-alarm-clock",
                    title: "Notifications",
                    text: "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
                  },
                ],
              },
            },
            {
              type: "introvideo",
              params: {
                href: "https://www.youtube.com/watch?v=1fFoImlTaHA",
                button: {
                  icon: "fas fa-play",
                  action: {
                    fnKey: "redirect",
                    params: {
                      url: "https://www.youtube.com",
                    },
                  },
                },
                title: "Nuestro trabajo",
                backgroundImage:
                  "https://image.freepik.com/free-photo/desktop-source-code-wallpaper-by-computer-language-with-coding-programming_33771-595.jpg",
              },
            },
            {
              type: "product",
              params: {
                title: "Nuestros productos",
                text: "Proyectos del dia a dia adaptados al consumidor",
                productsToShow: 4,
                products: [
                  {
                    img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                    name: {
                      text: "T-devs ERP",
                      action: {},
                    },
                    description: "Sistema especializado para grandes empresas",
                    price: "$999",
                    reducePrice: "$399",
                    button: {
                      label: "Adquirir",
                      action: {
                        fnKey: "goToState",
                        params: {
                          stateName: "services",
                        },
                      },
                    },
                  },
                  {
                    img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                    name: {
                      text: "T-devs ERP",
                      action: {},
                    },
                    description: "Sistema especializado para grandes empresas",
                    price: "$999",
                    reducePrice: "$399",
                    button: {
                      label: "Adquirir",
                      action: {
                        fnKey: "goToState",
                        params: {
                          stateName: "services",
                        },
                      },
                    },
                  },
                  {
                    img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                    name: {
                      text: "T-devs ERP",
                      action: {},
                    },
                    description: "Sistema especializado para grandes empresas",
                    price: "$999",
                    reducePrice: "$399",
                    button: {
                      label: "Adquirir",
                      action: {
                        fnKey: "goToState",
                        params: {
                          stateName: "services",
                        },
                      },
                    },
                  },
                  {
                    img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                    name: {
                      text: "T-devs ERP",
                      action: {},
                    },
                    description: "Sistema especializado para grandes empresas",
                    price: "$999",
                    reducePrice: "$399",
                    button: {
                      label: "Adquirir",
                      action: {
                        fnKey: "goToState",
                        params: {
                          stateName: "services",
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              type: "testimonial",
              params: {
                title: "What users says",
                text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore",
                cardsToShow: 2,
                cards: [
                  {
                    text: "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
                    author: "Mark Anthony",
                    imgAuthor:
                      "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
                    profession: "Director",
                  },
                  {
                    text: "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
                    author: "Mark Anthony",
                    imgAuthor:
                      "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
                    profession: "Director",
                  },
                  {
                    text: "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
                    author: "Mark Anthony",
                    imgAuthor:
                      "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
                    profession: "Director",
                  },
                  {
                    text: "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
                    author: "Mark Anthony",
                    imgAuthor:
                      "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
                    profession: "Director",
                  },
                  {
                    text: "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
                    author: "Mark Anthony",
                    imgAuthor:
                      "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
                    profession: "Director",
                  },
                  {
                    text: "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
                    author: "Mark Anthony",
                    imgAuthor:
                      "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
                    profession: "Director",
                  },
                  {
                    text: "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
                    author: "Mark Anthony",
                    imgAuthor:
                      "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
                    profession: "Director",
                  },
                  {
                    text: "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
                    author: "Mark Anthony",
                    imgAuthor:
                      "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
                    profession: "Director",
                  },
                  {
                    text: "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
                    author: "Mark Anthony",
                    imgAuthor:
                      "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
                    profession: "Director",
                  },
                  {
                    text: "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
                    author: "Mark Anthony",
                    imgAuthor:
                      "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
                    profession: "Director",
                  },
                ],
              },
            },
            {
              type: "faq",
              params: {
                title: "frequently asked questions",
                text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore",
                img: "https://gluonhq.com/wp-content/uploads/2018/05/heroku-logotype-vertical-purple-253x300@2x.png",
                questions: [
                  {
                    title: "Agreed but expect repair she nay sir silent person",
                    desc: "My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.",
                  },
                  {
                    title: "Agreed but expect repair she nay sir silent person",
                    desc: "My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.",
                  },
                  {
                    title: "Agreed but expect repair she nay sir silent person",
                    desc: "My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.",
                  },
                  {
                    title: "Agreed but expect repair she nay sir silent person",
                    desc: "My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.",
                  },
                  {
                    title: "Agreed but expect repair she nay sir silent person",
                    desc: "My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.",
                  },
                ],
              },
            },
            {
              type: "contact",
              params: {
                title: "Contac Us",
                text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore",
                info: [
                  {
                    icon: "fas fa-home",
                    firstText: "143 castre road",
                    secondText: "143 castre road",
                  },
                  {
                    icon: "fas fa-home",
                    firstText: "143 castre road",
                    secondText: "143 castre road",
                  },
                  {
                    icon: "fas fa-home",
                    firstText: "143 castre road",
                    secondText: "143 castre road",
                  },
                ],
                inputs: [
                  {
                    key: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your Name",
                    tag: "input",
                    class: "col-lg-6",
                  },
                  {
                    key: "phone",
                    label: "Phone",
                    type: "text",
                    placeholder: "Your Phone Number",
                    tag: "input",
                    class: "col-lg-6",
                  },
                  {
                    key: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "Your Email",
                    tag: "input",
                    class: "col-lg-12",
                  },
                  {
                    key: "message",
                    label: "Message",
                    type: "text",
                    placeholder: "Message",
                    tag: "textarea",
                    class: "col-lg-12",
                  },
                ],
                buttons: [
                  {
                    label: "Submit Now",
                    action: {
                      fnKey: "goToState",
                      params: {
                        stateName: "services",
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
    {
      key: "contact",
      params: {
        stores: [],
        content: {},
      },
    },
    {
      key: "services",
      params: {
        stores: [],
        content: {
          blocks: [
            {
              type: "inline",
              params: {
                cards: [
                  {
                    img: "https://5ffb76a091e821000827671c.projects.ideascloud.io/file-uploads/60a5fc5289aea90009d39717",
                    title: {
                      text: "Web apps",
                      action: {},
                    },
                    text: "Desarrollamos páginas web personalizadas segun los requerimientos de tu empresa y en un tiempo record.",
                  },
                  {
                    img: "https://5ffb76a091e821000827671c.projects.ideascloud.io/file-uploads/60a5fc8f89aea90009d39718	",
                    title: {
                      text: "Mobile apps",
                      action: {},
                    },
                    text: "Somos especialistas en el desarrolo de aplicaciones mobiles multiplataforma (iOS y Android), esperando crear la app perfecta para ti.",
                  },
                  {
                    img: "https://5ffb76a091e821000827671c.projects.ideascloud.io/file-uploads/60a5fd3d89aea90009d3971a	",
                    title: {
                      text: "Desktop apps",
                      action: {},
                    },
                    text: "¿Necesitas una aplicacion de escritorio nativa?, Nosotros te la implementamos!",
                  },
                  {
                    img: "https://5ffb76a091e821000827671c.projects.ideascloud.io/file-uploads/60a5fe7389aea90009d3971c	",
                    title: {
                      text: "Fix apps",
                      action: {},
                    },
                    text: "Ya tienes una aplicación web, movil o de escritorio pero funciona mal o no hay nadie que le de soporte, te ayudaremos!",
                  },
                ],
              },
            },
          ],
        },
      },
    },
    {
      key: "webPages",
      params: {
        stores: [],
        content: {},
      },
    },
    {
      key: "mobileApps",
      params: {
        stores: [],
        content: {},
      },
    },
  ],
};
