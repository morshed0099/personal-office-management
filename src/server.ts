import { Server } from "http";
import app from "./app";
import config from "./config";

const port = config.port || 5000;

async function main() {
  try {
    const server: Server = app.listen(port, () => {
      console.log(`server is running for port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
