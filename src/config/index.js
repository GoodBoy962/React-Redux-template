const {
  REACT_APP_API,
  REACT_API_KEY = 'key'
} = process.env;

module.exports = {
  hostUri: REACT_APP_API,
  apiKey: REACT_API_KEY
};