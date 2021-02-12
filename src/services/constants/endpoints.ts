// Uses default values here in case the environment
// variables are incapable of being found.
const {
    REACT_APP_RULEAU_DEFAULT_API_URL = '//localhost:5000',
    REACT_APP_RULEAU_API_URL = '',
    REACT_APP_RULEAU_OVERRIDE_API_URL = ''
  } = process.env;
  
  export const API_URL =
    REACT_APP_RULEAU_OVERRIDE_API_URL.trim() ||
    REACT_APP_RULEAU_API_URL.trim() ||
    REACT_APP_RULEAU_DEFAULT_API_URL;
