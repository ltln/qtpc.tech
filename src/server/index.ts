import express, { NextFunction, Request, Response } from "express";
import next from "next";
import { routes } from "../../resources/routes";
import { join } from "path";

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

    server.get("/:path", (req: Request, res: Response, next: NextFunction) => {
      const path = req.originalUrl.replace("/","");
      const data = routes.find(p => p.path === path);
      if (data) {
        if (data.url) {
          res.status(data.permanent ? 301 : 302).redirect(data.url);
        } else if (data.asset) {
          try {
            const filePath = join(process.cwd(), "public", data.asset);
            res.sendFile(filePath);
          } catch {
            next();
          }
        }
      } else {
        next();
      }
    });

    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    
    server.listen(port, (err?: any) => { // eslint-disable-line
      if (err) throw err;
      console.log(` ○ Ready on http://localhost:${port} [${process.env.NODE_ENV.toUpperCase()}]`);
    });

  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();