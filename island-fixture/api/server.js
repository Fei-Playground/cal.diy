// Says which repository answered, so a call that reaches the wrong one shows it.
import http from "node:http";
const port = Number(process.env.API_PORT || 8000);
http
  .createServer((req, res) => {
    res.setHeader("content-type", "text/plain");
    res.end(`island-fixture-cal.diy api on ${port} (${req.url})`);
  })
  .listen(port, "127.0.0.1", () => console.log(`api on ${port}`));
