import { program } from "commander";

program
  .option("-m, --mode <mode>", "ambiente a trabajar", "development")
  .option("-p, --port <number>", "puerto a trabajar", 8080)
  .option("-d, --debug", "variable para modo debug", false)
  .parse();

console.log("argv", program.args);
console.log("opts", program.opts());

export default program;
// console.log(process.argv);
// const modo = process.argv[2];
// switch (modo) {
//   case "testing":
//     console.log("Modo testing");
//     break;
//   case "development":
//     console.log("Modo development");
//     break;
//   case "staging":
//     console.log("Modo staging");
//     break;
//   default:
//     console.log("Ningun modo");
//     break;
// }
