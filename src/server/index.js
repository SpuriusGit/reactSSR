const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter, matchPath } = require("react-router-dom");
const AppServer = require("../AppServer").default;
const path = require("path");

const app = express();
app.use(express.static(path.resolve(__dirname, "../build")));
const PORT = process.env.PORT || 3001;

const routes = ["/", "/users"];
app.get("/", (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <AppServer />
    </StaticRouter>
  );
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  // Check if any of the routes matched the request URL
  const match = routes.find((route) => matchPath(req.url, route));

  // If a route matched, set the status code to 200
  if (match) {
    res.status(200);
  }

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
