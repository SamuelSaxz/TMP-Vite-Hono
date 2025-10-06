import { config } from "@server/config";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default {
  port: config.PORT,
  fetch: app.fetch,
};
