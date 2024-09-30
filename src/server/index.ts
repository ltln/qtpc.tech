import express, { Request, Response } from "express";
import next from "next";

// get PORT
const _args = process.argv.slice(2);
const _portParam = _args.find((arg) => arg.toLowerCase().startsWith("-port="));
const _port = _portParam ? _portParam.split("=")[1] : 3000;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = _port;

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(` ○ Ready on http://localhost:${port} [${process.env.NODE_ENV.toUpperCase()}]`);
    });

  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();