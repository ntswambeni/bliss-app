const APIURL = process.env.REACT_APP_API_URL;

export const getServerStatus = () => {
  return fetch(`${APIURL}/health`);
};

export const getAllQuestions = ({ limit, offset, filter }) => {
  return fetch(
    `${APIURL}/questions?limit=${limit}&offset=${offset}&filter=${filter}`
  );
};

export const retriveQuestion = (id) => {
  return fetch(`${APIURL}/questions/${id}`);
};

export const voteQuestion = ({ questionId, vote }) => {
  return fetch(`${APIURL}/questions/${questionId}`, {
    method: "PUT",
    body: JSON.stringify(vote),
    headers: { "Content-type": "application/json" },
  });
};

export const shareScreen = ({ destinationEmail, urlContent }) => {
  return fetch(
    `${APIURL}/share?destination_email=${destinationEmail}&content_url=${urlContent}`,
    {
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};
