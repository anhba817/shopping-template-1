import * as appearanceConstants from "../constants/appearance";

const initialState = {
  primaryColor: "rgb(0, 158, 127)",
  contrastTextColor: "rgb(255, 255, 255)",
  primaryTextColor: "rgb(13, 17, 54)",
  secondaryTextColor: "rgb(119, 121, 140)",
  homeBackgroundImage: {
    data_url: "/images/grocery_background.png",
  },
  logo: {
    useText: false,
    text: "My Shop",
    image: {
      data_url: "/images/logo.png",
    },
  },
};

const appearanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case appearanceConstants.CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.payload.color,
      };
    case appearanceConstants.CHANGE_CONTRAST_TEXT_COLOR:
      return {
        ...state,
        contrastTextColor: action.payload.color,
      };
    case appearanceConstants.CHANGE_PRIMARY_TEXT_COLOR:
      return {
        ...state,
        primaryTextColor: action.payload.color,
      };
    case appearanceConstants.CHANGE_SECODARY_TEXT_COLOR:
      return {
        ...state,
        secondaryTextColor: action.payload.color,
      };
    case appearanceConstants.CHANGE_HOME_BACKGROUND_IMAGE:
      return {
        ...state,
        homeBackgroundImage: action.payload.image
          ? action.payload.image
          : {
              data_url: "/images/grocery_background.png",
            },
      };
    case appearanceConstants.CHANGE_LOGO_IMAGE:
      return {
        ...state,
        logo: {
          ...state.logo,
          image: action.payload.image
            ? action.payload.image
            : {
                data_url: "/images/grocery_background.png",
              },
        },
      };
    case appearanceConstants.CHANGE_LOGO_TEXT:
      return {
        ...state,
        logo: {
          ...state.logo,
          text: action.payload.text,
        },
      };
    case appearanceConstants.TOGGLE_LOG_USE_TEXT_ONLY:
      return {
        ...state,
        logo: {
          ...state.logo,
          useText: !state.logo.useText,
        },
      };
    default:
      return state;
  }
};

export default appearanceReducer;
