import { Hono } from "hono";
import { cors } from "hono/cors";
import { timeout } from "hono/timeout";

const app = new Hono();

app.use("/api/*", cors());
app.use("/api/*", timeout(180000));

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

const port = process.env.PORT || 4000;
console.log(`Server is running on port ${port}`);
export default {
	port,
	fetch: app.fetch,
};
