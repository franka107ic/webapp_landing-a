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
        content: {
          title: "State 1",
        },
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
