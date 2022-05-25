/**
 * A NodeJS application using docker-compose.
 */
const express = require("express");
const redis = require("redis");

const app = express();
// Connect redis client to the redis server running locally in a container.
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

client.on("error", (err) => {
  console.log("***ERROR***", err);
});

client.set("visits", 0);

app.get("/", (req, resp) => {
  client.get("visits", (err, visits) => {
    resp.send("Number of visits is" + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
