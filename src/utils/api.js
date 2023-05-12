const APIURL = process.env.REACT_APP_API_URL;

export const getServerStatus = () => {
  return fetch(`${APIURL}/health`);
};

export const getAllQuestions = ({ limit, offset, filter }) => {
  return fetch(
    `${APIURL}/questions?limit=${limit}&offset=${offset}&filter=${filter}`
  );
};
