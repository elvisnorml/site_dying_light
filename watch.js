const chokidar = require("chokidar");
const { exec } = require("child_process");

const watcher = chokidar.watch("src", { ignoreInitial: true });

watcher.on("all", (event, path) => {
  console.log(`Изменение: ${path}, пересобираем сайт...`);
  exec("node build.js", (err, stdout, stderr) => {
    if (err) console.error(err);
    else console.log(stdout);
    if (stderr) console.error(stderr);
  });
});
