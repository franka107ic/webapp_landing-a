window.IC_SAMPLE_SETUP = {
  title: "T-devs",
  favicon:
    "https://scontent.faqp3-1.fna.fbcdn.net/v/t1.6435-9/123259676_141309754374543_1401791795359432479_n.png?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEzM39VZldeaK-IIW0JXMITs_LKz1abie-z8srPVpuJ7-DUTosrWuABPTqMGxPTzX2LJOm6xH9FjWJPdzpnbNtu&_nc_ohc=Hk77OqrEfj0AX_DH1RH&_nc_ht=scontent.faqp3-1.fna&oh=fbd4619d973c670004254f6a1431f600&oe=60CBA274",
  styling: {
    look: {
      shadow: true,
      rounded: true,
    },
    colorPalette: {
      primaryColors: ["#00967D"],
      complementary: {
        white: "#FEFEFE",
        black: "#222222",
        light: "#F6F7FE",
        dark: "#333333",
      },
    },
    fonts: {
      titles: '"Quicksand", sans-serif',
      default: '"Poppins", sans-serif',
    },
  },
  static: {
    // START: Demo setup
    layout: {
      headerLogo: {
        src: "https://scontent.faqp3-1.fna.fbcdn.net/v/t1.6435-9/123259676_141309754374543_1401791795359432479_n.png?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEzM39VZldeaK-IIW0JXMITs_LKz1abie-z8srPVpuJ7-DUTosrWuABPTqMGxPTzX2LJOm6xH9FjWJPdzpnbNtu&_nc_ohc=Hk77OqrEfj0AX_DH1RH&_nc_ht=scontent.faqp3-1.fna&oh=fbd4619d973c670004254f6a1431f600&oe=60CBA274",
        heightScale: 2,
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
          label: "Button 1",
          action: {
            fnKey: "goToState",
            params: {
              stateName: "state-1",
              stateParams: {},
            },
          },
        },
        {
          label: "Button 2",
          action: {
            fnKey: "goToState",
            params: {
              stateName: "state-2",
              stateParams: {},
            },
          },
        },
      ],
    },
    // END: Demo setup
  },
  states: [
    {
      key: "state-1",
      params: {
        stores: [],
        content: [
          {
            type: "header",
            params: {
              title: "El mejor reloj para tu vida diaria",
              button: {
                icon: "fas fa-shopping-cart",
                label: "Ir a comprar",
              },
              wrap: {
                title: "50%",
                subtitle: "de descuento",
              },
              image: {
                src: "https://1000marcas.net/wp-content/uploads/2020/02/Docker-Logo.png",
                width: "800px",
                height: null,
              },
            },
          },
          {
            type: "inline",
            params: {
              cards: [
                {
                  img: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Notes_re_pxhw.svg",
                  title: "Lorem Ipsum",
                  text: "Fat decisively pursuit regular so calling. West he plan girl been my then up no.",
                },
                {
                  img: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/flagged_2uty.svg",
                  title: "Lorem Ipsum",
                  text: "Fat decisively pursuit regular so calling. West he plan girl been my then up no.",
                },
                {
                  img: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Notes_re_pxhw.svg",
                  title: "Lorem Ipsum",
                  text: "Fat decisively pursuit regular so calling. West he plan girl been my then up no.",
                },
                {
                  img: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Notes_re_pxhw.svg",
                  title: "Lorem Ipsum",
                  text: "Fat decisively pursuit regular so calling. West he plan girl been my then up no.",
                },
                {
                  img: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Landscape_mode_re_r964.svg",
                  title: "Lorem Ipsum",
                  text: "Fat decisively pursuit regular so calling. West he plan girl been my then up no.",
                },
              ],
            },
          },
          {
            type: "rightlist",
            params: {
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Orange_lambda.svg/980px-Orange_lambda.svg.png",
              title:
                "AWS Lambda is a serverless compute service that lets you run code",
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
              title: "Abous us",
              backgroundImage:
                "https://image.freepik.com/free-photo/desktop-source-code-wallpaper-by-computer-language-with-coding-programming_33771-595.jpg",
            },
          },
          {
            type: "product",
            params: {
              title: "Our products",
              text: "lorem impusn aid s nuatr surata turame",
              products: [
                {
                  img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                  name: "Xiaomi Redmi Note 9",
                  price: 999,
                  reducePrice: 750,
                  button: "Comprar",
                },
                {
                  img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                  name: "Xiaomi Redmi Note 9",
                  price: 999,
                  reducePrice: 750,
                  button: "Comprar",
                },
                {
                  img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                  name: "Xiaomi Redmi Note 9",
                  price: 999,
                  reducePrice: 750,
                  button: "Comprar",
                },
                {
                  img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                  name: "Xiaomi Redmi Note 9",
                  price: 999,
                  reducePrice: 750,
                  button: "Comprar",
                },
                {
                  img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                  name: "Xiaomi Redmi Note 9",
                  price: 999,
                  reducePrice: 750,
                  button: "Comprar",
                },
                {
                  img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                  name: "Xiaomi Redmi Note 9",
                  price: 999,
                  reducePrice: 750,
                  button: "Comprar",
                },
                {
                  img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                  name: "Xiaomi Redmi Note 9",
                  price: 999,
                  reducePrice: 750,
                  button: "Comprar",
                },
                {
                  img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                  name: "Xiaomi Redmi Note 9",
                  price: 999,
                  reducePrice: 750,
                  button: "Comprar",
                },
                {
                  img: "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
                  name: "Xiaomi Redmi Note 9",
                  price: 999,
                  reducePrice: 750,
                  button: "Comprar",
                },
              ],
            },
          },
          {
            type: "testimonial",
            params: {
              title: "What users says",
              text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore",
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
                  type: "main",
                  position: "center",
                  highlighted: true,
                  "|#|action": {
                    fnKey: "consoleLog",
                    params: {
                      "|&|formParm": "&.stateStores.formValues",
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      key: "state-2",
      params: {
        stores: [],
        content: {
          title: "State 2",
        },
      },
    },
  ],
};
