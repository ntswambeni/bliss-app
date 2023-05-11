const APIURL = process.env.REACT_APP_API_URL;

export const getServerStatus = () => {
  return fetch(`${APIURL}/health`);
};
