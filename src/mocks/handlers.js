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
  rest.get(`${APIURL}/questions`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          question: "Favourite programming language?",
          image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
          thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
          published_at: "2015-08-05T08:40:51.620Z",
          choices: [
            {
              choice: "Swift",
              votes: 2048,
            },
            {
              choice: "Python",
              votes: 1024,
            },
            {
              choice: "Objective-C",
              votes: 512,
            },
            {
              choice: "Ruby",
              votes: 256,
            },
          ],
        },
        {
          id: 2,
          question: "Favourite programming language?",
          image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
          thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
          published_at: "2015-08-05T08:40:51.620Z",
          choices: [
            {
              choice: "Swift",
              votes: 2048,
            },
            {
              choice: "Python",
              votes: 1024,
            },
            {
              choice: "Objective-C",
              votes: 512,
            },
            {
              choice: "Ruby",
              votes: 256,
            },
          ],
        },
        {
          id: 3,
          question: "Favourite programming language?",
          image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
          thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
          published_at: "2015-08-05T08:40:51.620Z",
          choices: [
            {
              choice: "Swift",
              votes: 2048,
            },
            {
              choice: "Python",
              votes: 1024,
            },
            {
              choice: "Objective-C",
              votes: 512,
            },
            {
              choice: "Ruby",
              votes: 256,
            },
          ],
        },
        {
          id: 4,
          question: "Favourite programming language?",
          image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
          thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
          published_at: "2015-08-05T08:40:51.620Z",
          choices: [
            {
              choice: "Swift",
              votes: 2048,
            },
            {
              choice: "Python",
              votes: 1024,
            },
            {
              choice: "Objective-C",
              votes: 512,
            },
            {
              choice: "Ruby",
              votes: 256,
            },
          ],
        },
        {
          id: 5,
          question: "Favourite programming language?",
          image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
          thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
          published_at: "2015-08-05T08:40:51.620Z",
          choices: [
            {
              choice: "Swift",
              votes: 2048,
            },
            {
              choice: "Python",
              votes: 1024,
            },
            {
              choice: "Objective-C",
              votes: 512,
            },
            {
              choice: "Ruby",
              votes: 256,
            },
          ],
        },
        {
          id: 6,
          question: "Favourite programming language?",
          image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
          thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
          published_at: "2015-08-05T08:40:51.620Z",
          choices: [
            {
              choice: "Swift",
              votes: 2048,
            },
            {
              choice: "Python",
              votes: 1024,
            },
            {
              choice: "Objective-C",
              votes: 512,
            },
            {
              choice: "Ruby",
              votes: 256,
            },
          ],
        },
        {
          id: 7,
          question: "Favourite programming language?",
          image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
          thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
          published_at: "2015-08-05T08:40:51.620Z",
          choices: [
            {
              choice: "Swift",
              votes: 2048,
            },
            {
              choice: "Python",
              votes: 1024,
            },
            {
              choice: "Objective-C",
              votes: 512,
            },
            {
              choice: "Ruby",
              votes: 256,
            },
          ],
        },
        {
          id: 8,
          question: "Favourite programming language?",
          image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
          thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
          published_at: "2015-08-05T08:40:51.620Z",
          choices: [
            {
              choice: "Swift",
              votes: 2048,
            },
            {
              choice: "Python",
              votes: 1024,
            },
            {
              choice: "Objective-C",
              votes: 512,
            },
            {
              choice: "Ruby",
              votes: 256,
            },
          ],
        },
        {
          id: 9,
          question: "Favourite programming language?",
          image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
          thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
          published_at: "2015-08-05T08:40:51.620Z",
          choices: [
            {
              choice: "Swift",
              votes: 2048,
            },
            {
              choice: "Python",
              votes: 1024,
            },
            {
              choice: "Objective-C",
              votes: 512,
            },
            {
              choice: "Ruby",
              votes: 256,
            },
          ],
        },
        {
          id: 10,
          question: "Favourite programming language?",
          image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
          thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
          published_at: "2015-08-05T08:40:51.620Z",
          choices: [
            {
              choice: "Swift",
              votes: 2048,
            },
            {
              choice: "Python",
              votes: 1024,
            },
            {
              choice: "Objective-C",
              votes: 512,
            },
            {
              choice: "Ruby",
              votes: 256,
            },
          ],
        },
      ])
    );
  }),
];
