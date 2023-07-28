import express, { Application } from "express";
import trickandmortyRoutes from "../routes/trickandmorty";
import cors from "cors";

class Server {
  private app: Application;
  private port: string | undefined;
  private apiPaths = {
    trickandmorty: "/api/rick-and-mortys",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // methods
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Cors
    this.app.use(cors());

    // body reading
    this.app.use(express.json());

    // public folder
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.trickandmorty, trickandmortyRoutes);
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Activo en el puerto ${this.port}`)
    );
  }
}

export default Server;
