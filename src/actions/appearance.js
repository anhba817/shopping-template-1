import * as appearanceConstants from '../constants/appearance';

export const changePrimaryColor = (color) => {
  return {
    type: appearanceConstants.CHANGE_PRIMARY_COLOR,
    payload: {
      color,
    },
  };
};

export const changeContrastTextColor = (color) => {
  return {
    type: appearanceConstants.CHANGE_CONTRAST_TEXT_COLOR,
    payload: {
      color,
    },
  };
};

export const changePrimaryTextColor = (color) => {
  return {
    type: appearanceConstants.CHANGE_PRIMARY_TEXT_COLOR,
    payload: {
      color,
    },
  };
};

export const changeSecondaryTextColor = (color) => {
  return {
    type: appearanceConstants.CHANGE_SECODARY_TEXT_COLOR,
    payload: {
      color,
    },
  };
};

export const changeHomeBackgroundImage = (image) => {
  return {
    type: appearanceConstants.CHANGE_HOME_BACKGROUND_IMAGE,
    payload: {
      image,
    },
  };
};

export const changeLogoImage = (image) => {
  return {
    type: appearanceConstants.CHANGE_LOGO_IMAGE,
    payload: {
      image,
    },
  };
};

export const toggleLogoUseTextOnly = () => {
  return {
    type: appearanceConstants.TOGGLE_LOG_USE_TEXT_ONLY,
  };
};

export const changeLogoText = (text) => {
  return {
    type: appearanceConstants.CHANGE_LOGO_TEXT,
    payload: {
      text,
    },
  };
};

export const changeLogoTextRequest = (text) => {
  return {
    type: appearanceConstants.CHANGE_LOGO_TEXT_REQUEST,
    payload: {
      text,
    },
  };
};
