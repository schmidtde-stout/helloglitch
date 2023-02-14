const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

/* When the React App attempts to call another
URL on the same domain, but on a different port, the browser gets grumpy.
You will get an error similar to this:

Access to fetch at 'http://localhost:5000/api' from origin 'http://localhost:3000' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is 
present on the requested resource. If an opaque response serves your needs, 
set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

One way to allow this is to permit a CORS request by letting the browser know
that the Express server will permit requests from the same origin:
*/

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api", (req, res) => {
  res.send({ express: "simple response :)" });
});
