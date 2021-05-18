window.IC_SAMPLE_SETUP = {
  "title": "Webapp title",
  "favicon": "FAVICON_URL",
  "styling": {
    "rounded": true,
    "inputsBorder": false,
    "inputsBackgroundColor": '#f5f8f9',
    "logoHeight": "50px",
    "logoWidth" : null,
    "colorPrimary": "#009688",
    "colorPrimaryDark": "#00796B" ,
    "colorPrimaryLight": "#B2DFDB" ,
    "colorAccent": "#FFC107",
    "textColorPrimary": "#212121",
    "textColorSecondary": "#757575",
    "colorDivider": "#BDBDBD",
    "colorIcons": "#FFFFF",
    "windowBackground": "#1A202C",
    "darkMode": true,
  },
  "static": {
    "logo": "https://ic-core-assets.s3.us-east-2.amazonaws.com/ic-webapps/landing/ic/images/ic-logo-darkgrey.png",
    "footerIcons": [
      {
        "icon": "fab fa-facebook-f",
        "|#|fn": {
          "fnKey": "goToState",
          "params": {
            "stateName": "search"
          }
        }
      },
      {
        "icon": "fab fa-pinterest-p",
        "|#|fn": {
          "fnKey": "goToState",
          "params": {
            "stateName": "shopping-cart"
          }
        }
      },
    ],
    "headerIcons": [
      {
        "icon": "fas fa-search",
        "|#|fn": {
          "fnKey": "goToState",
          "params": {
            "stateName": "search"
          }
        }
      },
      {
        "icon": "fas fa-shopping-cart",
        "|#|fn": {
          "fnKey": "goToState",
          "params": {
            "stateName": "shopping-cart"
          }
        }
      },
    ],
    "headerButtons": [
      {
        "label": "Home",
        "|#|fn": {
          "fnKey": "goToState",
          "params": {
            "stateName": "home"
          }
        }
      },
      {
        "label": "Contact",
        "|#|fn": {
          "fnKey": "goToState",
          "params": {
            "stateName": "home"
          }
        }
      },
      {
        "label": "Blog",
        "|#|fn": {
          "fnKey": "goToState",
          "params": {
            "stateName": "blog"
          }
        },
        "childs": [
          {
            "label": "Noticias semanales",
            "|#|fn": {
              "fnKey": "goToState",
              "params": {
                "stateName": "enterprise"
              }
            }
          },
          {
            "label": "Importante",
            "|#|fn": {
              "fnKey": "goToState",
              "params": {
                "stateName": "workers"
              }
            }
          }
        ]
      },
      {
        "label": "About",
        "|#|fn": {
          "fnKey": "goToState",
          "params": {
            "stateName": "about"
          }
        },
        "childs": [
          {
            "label": "Nuestra empresa",
            "|#|fn": {
              "fnKey": "goToState",
              "params": {
                "stateName": "enterprise"
              }
            }
          },
          {
            "label": "Nuestros trabajadores",
            "|#|fn": {
              "fnKey": "goToState",
              "params": {
                "stateName": "workers"
              }
            }
          }
        ]
      }
    ],
    "headerAreaTitle": "El mejor reloj para tu vida cotidiana",
    "areas": [
      {
        "type": "header",
        "params": {
          "title": "El mejor reloj para tu vida diaria",
          "button": {
            "icon": "fas fa-shopping-cart",
            "label": "Ir a comprar",
          },
          "wrap": {
            "title": "50%",
            "subtitle": "de descuento"
          },
          "image": {
            "src": "https://1000marcas.net/wp-content/uploads/2020/02/Docker-Logo.png",
            "width": "800px",
            "height": null,
          }
        }
      },
      {
        "type": "inline",
        "params": {
          "cards": [
            {
              "img": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Notes_re_pxhw.svg",
              "title": "Lorem Ipsum",
              "text": "Fat decisively pursuit regular so calling. West he plan girl been my then up no."
            },
            {
              "img": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/flagged_2uty.svg",
              "title": "Lorem Ipsum",
              "text": "Fat decisively pursuit regular so calling. West he plan girl been my then up no."
            },
            {
              "img": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Notes_re_pxhw.svg",
              "title": "Lorem Ipsum",
              "text": "Fat decisively pursuit regular so calling. West he plan girl been my then up no."
            },
            {
              "img": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Notes_re_pxhw.svg",
              "title": "Lorem Ipsum",
              "text": "Fat decisively pursuit regular so calling. West he plan girl been my then up no."
            },
            {
              "img": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Landscape_mode_re_r964.svg",
              "title": "Lorem Ipsum",
              "text": "Fat decisively pursuit regular so calling. West he plan girl been my then up no."
            }
          ]
        }
      },
      {
        "type": "rightlist",
        "params": {
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Orange_lambda.svg/980px-Orange_lambda.svg.png",
          "title": "AWS Lambda is a serverless compute service that lets you run code",
          "features": [
            {
              "icon": "flaticon-chat-1",
              "title": "Support 24/7",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-heart",
              "title": "Monitorization",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-route",
              "title": "In the World",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-alarm-clock",
              "title": "Notifications",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
          ],
        },
      },
      {
        "type": "leftlist",
        "params": {
          "image": "https://mobinnovatics.com/img/logos/firebase.png",
          "title": "Firebase is a serverless compute service that lets you run code",
          "features": [
            {
              "icon": "flaticon-chat-1",
              "title": "Support 24/7",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-heart",
              "title": "Monitorization",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-route",
              "title": "In the World",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-alarm-clock",
              "title": "Notifications",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
          ],
        },
      },
      {
        "type": "blockfeature",
        "params": {
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1280px-AWS_Simple_Icons_AWS_Cloud.svg.png",
          "features": [
            {
              "icon": "flaticon-wifi",
              "title": "Support 24/7",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-heart",
              "title": "Monitorization",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-route",
              "title": "In the World",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-fingerprint-2",
              "title": "Backups",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-photo-camera",
              "title": "Backups",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
            {
              "icon": "flaticon-alarm-clock",
              "title": "Notifications",
              "text": "Intention age nay otherwise but breakfast. Around garden beyond to extent by.",
            },
          ],
        }
      },
      {
        "type": "introvideo",
        "params": {
          "href": "https://www.youtube.com/watch?v=1fFoImlTaHA",
          "title": "Abous us",
          "backgroundImage": "https://image.freepik.com/free-photo/desktop-source-code-wallpaper-by-computer-language-with-coding-programming_33771-595.jpg",
        }
      },
      {
        "type": "product",
        "params": {
          "title": "Our products",
          "text": "lorem impusn aid s nuatr surata turame",
          "products": [
            {
              "img": "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
              "name": "Xiaomi Redmi Note 9",
              "price": 999,
              "reducePrice": 750,
              "button": "Comprar"
            },
            {
              "img": "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
              "name": "Xiaomi Redmi Note 9",
              "price": 999,
              "reducePrice": 750,
              "button": "Comprar"
            },
            {
              "img": "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
              "name": "Xiaomi Redmi Note 9",
              "price": 999,
              "reducePrice": 750,
              "button": "Comprar"
            },
            {
              "img": "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
              "name": "Xiaomi Redmi Note 9",
              "price": 999,
              "reducePrice": 750,
              "button": "Comprar"
            },
            {
              "img": "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
              "name": "Xiaomi Redmi Note 9",
              "price": 999,
              "reducePrice": 750,
              "button": "Comprar"
            },
            {
              "img": "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
              "name": "Xiaomi Redmi Note 9",
              "price": 999,
              "reducePrice": 750,
              "button": "Comprar"
            },
            {
              "img": "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
              "name": "Xiaomi Redmi Note 9",
              "price": 999,
              "reducePrice": 750,
              "button": "Comprar"
            },
            {
              "img": "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
              "name": "Xiaomi Redmi Note 9",
              "price": 999,
              "reducePrice": 750,
              "button": "Comprar"
            },
            {
              "img": "https://estaticos-cdn.elperiodico.com/clip/c51b92fd-7a10-47b1-aad6-9adc4ce01804_alta-libre-aspect-ratio_default_0.jpg",
              "name": "Xiaomi Redmi Note 9",
              "price": 999,
              "reducePrice": 750,
              "button": "Comprar"
            },
          ]
        }
      },
      {
        "type": "testimonial",
        "params": {
          "title": "What users says",
          "text": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore",
          "cards": [
            {
              "text": "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
              "author": "Mark Anthony",
              "imgAuthor": "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
              "profession": "Director"
            },
            {
              "text": "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
              "author": "Mark Anthony",
              "imgAuthor": "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
              "profession": "Director"
            },
            {
              "text": "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
              "author": "Mark Anthony",
              "imgAuthor": "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
              "profession": "Director"
            },
            {
              "text": "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
              "author": "Mark Anthony",
              "imgAuthor": "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
              "profession": "Director"
            },
            {
              "text": "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
              "author": "Mark Anthony",
              "imgAuthor": "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
              "profession": "Director"
            },
            {
              "text": "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
              "author": "Mark Anthony",
              "imgAuthor": "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
              "profession": "Director"
            },
            {
              "text": "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
              "author": "Mark Anthony",
              "imgAuthor": "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
              "profession": "Director"
            },
            {
              "text": "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
              "author": "Mark Anthony",
              "imgAuthor": "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
              "profession": "Director"
            },
            {
              "text": "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
              "author": "Mark Anthony",
              "imgAuthor": "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
              "profession": "Director"
            },
            {
              "text": "They provide innovate solutions with the best. tempo incidunct ulta bora et dolor incidunt.",
              "author": "Mark Anthony",
              "imgAuthor": "https://cdns-images.dzcdn.net/images/artist/567dcb94bb1a3b972176f52f00c64f9c/264x264.jpg",
              "profession": "Director"
            },
          ]
        }
      },
      {
        "type": "faq",
        "params": {
          "title": "frequently asked questions",
          "text": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore",
          "img": "https://gluonhq.com/wp-content/uploads/2018/05/heroku-logotype-vertical-purple-253x300@2x.png",
          "questions": [
            {
              "title": "Agreed but expect repair she nay sir silent person",
              "desc": "My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed."
            },
            {
              "title": "Agreed but expect repair she nay sir silent person",
              "desc": "My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed."
            },
            {
              "title": "Agreed but expect repair she nay sir silent person",
              "desc": "My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed."
            },
            {
              "title": "Agreed but expect repair she nay sir silent person",
              "desc": "My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed."
            },
            {
              "title": "Agreed but expect repair she nay sir silent person",
              "desc": "My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed."
            },
          ]
        }
      },
      {
        "type": "contact",
        "params": {
          "title": "Contac Us",
          "text": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore",
          "info": [
            {
              "icon": "fas fa-home",
              "firstText": "143 castre road",
              "secondText": "143 castre road",
            },
            {
              "icon": "fas fa-home",
              "firstText": "143 castre road",
              "secondText": "143 castre road",
            },
            {
              "icon": "fas fa-home",
              "firstText": "143 castre road",
              "secondText": "143 castre road",
            },
          ],
          "inputs": [
            {
              "key": "name",
              "label": "Name",
              "type": "text",
              "placeholder": "Your Name",
              "tag": "input",
              "class": "col-lg-6"
            },
            {
              "key": "phone",
              "label": "Phone",
              "type": "text",
              "placeholder": "Your Phone Number",
              "tag": "input",
              "class": "col-lg-6"
            },
            {
              "key": "email",
              "label": "Email",
              "type": "email",
              "placeholder": "Your Email",
              "tag": "input",
              "class": "col-lg-12"
            },
            {
              "key": "message",
              "label": "Message",
              "type": "text",
              "placeholder": "Message",
              "tag": "textarea",
              "class": "col-lg-12"
            },
          ],
          "buttons": [
            {
              "label": "Submit Now",
              "type": "main",
              "position": "center",
              "highlighted": true,
              "|#|action": {
                "fnKey": "consoleLog",
                "params": {
                  "|&|formParm": "&.stateStores.formValues"
                }
              }
            },
          ]
        }
      },
    ]
  },
  "states": [

    {
      "key": "login",
      "params": {
        "stores": [],
        "content": {

          "title": "Login",
          "inputs": [
            {
              "key": "email",
              "label": "Email",
              "type": "email",
              "placeholder": "user@domain.com",
            },
            {
              "key": "password",
              "label": "Password",
              "type": "password",
              "placeholder": "*********",
            },
          ],
          "buttons": [
            {
              "label": "Forgot password? Click here",
              "position": "left",
              "|#|action": {
                "fnKey": "goToState",
                "params": {
                  "stateName": "register"
                }
              }
            },
            {
              "label": "Login",
              "type": "main",
              "position": "center",
              "highlighted": true,
              "|#|action": {
                "fnKey": "consoleLog",
                "params": {
                  "|&|formParm": "&.stateStores.formValues"
                }
              }
            },
            {
              "label": "Create an account",
              "position": "center",
              "|#|action": {
                "fnKey": "goToState",
                "params": {
                  "stateName": "register"
                }
              }
            }
          ]


        }
      }
    },

    {
      "key": "register",
      "params": {
        "stores": [],
        "content": {

          "title": "Register",
          "inputs": [
            {
              "key": "name",
              "label": "Name",
              "type": "text",
              "placeholder": "John",
            },
            {
              "key": "lastname",
              "label": "Lastname",
              "type": "text",
              "placeholder": "Smith",
            },
            {
              "key": "email",
              "label": "Email",
              "type": "email",
              "placeholder": "user@domain.com",
            },
            {
              "key": "password",
              "label": "Password",
              "type": "password",
              "placeholder": "*********",
            },
          ],
          "buttons": [
            {
              "label": "Register",
              "type": "main",
              "position": "center",
              "highlighted": true,
              "|#|action": {
                "fnKey": "consoleLog",
                "params": {
                  "|&|formParm": "&.stateStores.formValues"
                }
              }
            },
            {
              "label": "Login to account",
              "position": "center",
              "|#|action": {
                "fnKey": "goToState",
                "params": {
                  "stateName": "login"
                }
              }
            }
          ]


        }
      }
    },

  ]
}
