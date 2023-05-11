const { rest } = require("msw");

const APIURL = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.get(`${APIURL}/health`, (req, res, ctx) => {
    return res(
      ctx.json({
        status: "OK",
      })
    );
  }),
];
