const WebSocketServer = require("ws").Server;
const PromiseQueue = require("easy-promise-queue").default;

const wss = new WebSocketServer({ port: 9000 });
const pq = new PromiseQueue({ concurrency: 1 });

const log = [
  { message: "Hello", delay: 1000 },
  { message: "Yo", delay: 2000 },
  { message: "Hm", delay: 5000 }
];

console.log("\nWelcome to Prisma! Waiting connection from web interface...")
wss.on("connection", ws => {
  console.log("\nConnected at port 9000. Let's get started!")
  ws.on("message", message => {
    console.log(message);
  });

  // log.forEach(({ message, delay }) =>
  //   pq.add(
  //     () =>
  //       new Promise(resolve => {
  //         setTimeout(() => {
  //           console.log(message);
  //           ws.send(message);
  //           resolve();
  //         }, delay);
  //       })
  //   )
  // );
});
